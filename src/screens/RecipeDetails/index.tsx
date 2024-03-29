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
import { Modal } from 'react-native'

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

import { StackNavigationProp } from '@react-navigation/stack'
import { RootParamList } from '../../routes/app.routes'
import { Loading } from '../../components/Loading'
import { IngredientsProps } from '../NewRecipe/IngredientesStep'
import { StepsProps } from '../NewRecipe/PrepareStep'

import Checkbox from 'expo-checkbox'
import { theme } from '../../styles/theme'
import { AlertDialog } from '../../components/AlertDialog'

type RouteParams = {
  recipeId: string
}

type RecipeCardProps = {
  title: string
  ingredients: IngredientsProps[]
  prepare: StepsProps[]
}

type Props = StackNavigationProp<RootParamList, 'home'>

export function RecipeDetails() {
  const [recipe, setRecipe] = useState<RecipeCardProps>({} as RecipeCardProps)
  const [itemsChecked, setItemsChecked] = useState([])

  const [loading, setLoading] = useState(true)

  const navigation = useNavigation<Props>()
  const route = useRoute()
  const { recipeId } = route.params as RouteParams
  const uid = auth().currentUser.uid

  const [modalVisible, setModalVisible] = useState(false)

  function handleDeleteRecipe() {
    setModalVisible(false)
    firestore()
      .collection('users')
      .doc(uid)
      .collection('receitas')
      .doc(recipeId)
      .delete()
    navigation.navigate('home')
  }

  function handleCheckbox(itemId: string) {
    if (itemsChecked.includes(itemId)) {
      setItemsChecked(itemsChecked.filter((id) => id !== itemId))
    } else {
      setItemsChecked([...itemsChecked, itemId])
    }
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
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible)
            }}
          >
            <AlertDialog
              alert="Deletar receita"
              description="Tem certeza que deseja excluir essa receita?"
              stay={() => setModalVisible(false)}
              notStay={handleDeleteRecipe}
              stayText="Manter"
              notStayText="Excluir"
            />
          </Modal>
          <RecipeScroll>
            <DetailsWrapper>
              <CardDetails
                title="Título"
                content={recipe.title}
                icon={Notebook}
              />
              <CardDetails title="Ingredientes" icon={Scroll}>
                {recipe.ingredients.map((item) => {
                  const isChecked = itemsChecked.includes(item.id)

                  return (
                    <ListOptions key={item.id}>
                      <Checkbox
                        value={isChecked}
                        onValueChange={() => handleCheckbox(item.id)}
                        color={isChecked ? theme.colors.indigo500 : undefined}
                      />
                      <Title checked={isChecked}>{item.ingredient}</Title>
                    </ListOptions>
                  )
                })}
              </CardDetails>
              <CardDetails title="Modo de Preparo" icon={CookingPot}>
                {recipe.prepare.map((item, i) => {
                  const isChecked = itemsChecked.includes(item.id)

                  return (
                    <ListOptions key={item.id}>
                      <Checkbox
                        value={isChecked}
                        onValueChange={() => handleCheckbox(item.id)}
                        color={isChecked ? theme.colors.indigo500 : undefined}
                      />
                      <Title checked={isChecked}>
                        {i + 1}º {item.step}
                      </Title>
                    </ListOptions>
                  )
                })}
              </CardDetails>
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
              onPress={() => setModalVisible(true)}
              isLoading={false}
            />
          </RecipeScroll>
        </Container>
      )}
    </>
  )
}
