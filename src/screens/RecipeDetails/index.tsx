import { CookingPot, Notebook, Scroll } from 'phosphor-react-native'
import React, { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { CardDetails } from '../../components/CardDetails/inde'
import { Header } from '../../components/Header'
import { RecipeScroll, Container, DetailsWrapper } from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ActivityIndicator, Alert } from 'react-native'

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { useTheme } from 'styled-components/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootParamList } from '../../routes/app.routes'

type RouteParams = {
  recipeId: string
}

type RecipeCardProps = {
  title: string
  ingredients: string
  prepare: string
}

type Props = StackNavigationProp<RootParamList, 'home'>

export function RecipeDetails() {
  const [recipe, setRecipe] = useState<RecipeCardProps>({} as RecipeCardProps)

  const [loading, setLoading] = useState(true)
  const theme = useTheme()

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
    <Container>
      <Header title="Detalhes da receita" />
      {loading ? (
        <ActivityIndicator
          size="large"
          color={theme.colors.indigo600}
          style={{ alignItems: 'center', justifyContent: 'center' }}
        />
      ) : (
        <RecipeScroll>
          <DetailsWrapper>
            <CardDetails
              title="Título"
              content={recipe.title}
              icon={Notebook}
            />
            <CardDetails
              title="Ingredientes"
              content={recipe.ingredients}
              icon={Scroll}
            />
            <CardDetails
              title="Modo de Preparo"
              content={recipe.prepare}
              icon={CookingPot}
            />
          </DetailsWrapper>
          <Button
            title="Editar receita"
            variant="edit"
            onPress={() => handleEditRecipe(recipeId)}
          />

          <Button
            title="Deletar receita"
            variant="delete"
            onPress={AlertDelete}
          />
        </RecipeScroll>
      )}
    </Container>
  )
}
