import { CookingPot, Notebook, Scroll } from 'phosphor-react-native'
import React, { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { CardDetails } from '../../components/CardDetails/inde'
import { Header } from '../../components/Header'
import {
  RecipeScroll,
  Container,
  DetailsWrapper,
  ListOptions,
  Title,
} from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Alert, FlatList } from 'react-native'

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

import { StackNavigationProp } from '@react-navigation/stack'
import { RootParamList } from '../../routes/app.routes'
import { Loading } from '../../components/Loading'
import { IngredientsProps } from '../NewRecipe/IngredientesStep'

type RouteParams = {
  recipeId: string
}

type RecipeCardProps = {
  title: string
  ingredients: IngredientsProps[]
  prepare: string[]
}

type Props = StackNavigationProp<RootParamList, 'home'>

export function RecipeDetails() {
  const [recipe, setRecipe] = useState<RecipeCardProps>({} as RecipeCardProps)

  const [loading, setLoading] = useState(true)

  const navigation = useNavigation<Props>()
  const route = useRoute()
  const { recipeId } = route.params as RouteParams
  const uid = auth().currentUser.uid

  function handleDeleteRecipe() {
    firestore()
      .collection('users')
      .doc(uid)
      .collection('receitas')
      .doc(recipeId)
      .delete()
    navigation.navigate('home')
  }

  function AlertDelete() {
    Alert.alert(
      'Deletar receita',
      'Tem certeza que deseja excluir essa receita?',
      [
        {
          text: 'Manter',
          onPress: () => {},
          style: 'cancel',
        },
        { text: 'Excluir', onPress: () => handleDeleteRecipe() },
      ],
    )
  }

  function handleEditRecipe(recipeId: string) {
    navigation.navigate('editRecipe', { recipeId })
  }

  useEffect(() => {
    firestore()
      .collection('users')
      .doc(uid)
      .collection('receitas')
      .doc(recipeId)
      .get()
      .then((doc) => {
        const { title, ingredients, prepare } = doc.data()
        setRecipe({
          title,
          ingredients,
          prepare,
        })
        setLoading(false)
      })
  }, [recipeId, uid])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Header title="Detalhes da receita" share={true} recipe={recipe} />

          <RecipeScroll>
            <DetailsWrapper>
              <CardDetails
                title="Título"
                content={recipe.title}
                icon={Notebook}
              />
              <CardDetails title="Ingredientes" icon={Notebook}>
                <FlatList
                  data={recipe.ingredients}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <ListOptions>
                      <Title>{item.ingredient}</Title>
                    </ListOptions>
                  )}
                />
              </CardDetails>
              <CardDetails
                title="Título"
                content={recipe.title}
                icon={Notebook}
              />
            </DetailsWrapper>
            <Button
              title="Editar receita"
              variant="edit"
              onPress={() => handleEditRecipe(recipeId)}
              isLoading={false}
            />

            <Button
              title="Deletar receita"
              variant="delete"
              onPress={AlertDelete}
              isLoading={false}
            />
          </RecipeScroll>
        </Container>
      )}
    </>
  )
}
