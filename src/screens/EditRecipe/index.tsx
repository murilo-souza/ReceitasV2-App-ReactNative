import React, { useState, useEffect } from 'react'
import { EditRecipePreload } from '../EditRecipePreload'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { useRoute } from '@react-navigation/native'
import { ActivityIndicator } from 'react-native'
import { Container } from './styles'
import { useTheme } from 'styled-components/native'
import { IngredientsProps } from '../NewRecipe/IngredientesStep'
import { StepsProps } from '../NewRecipe/PrepareStep'

interface FormData {
  title: string
  description: string
  ingredients: IngredientsProps[]
  prepare: StepsProps[]
  type: string
}

type RouteParams = {
  recipeId: string
}

export function EditRecipe() {
  const [recipeToEdit, setRecipeToEdit] = useState<FormData>(null)
  const route = useRoute()
  const { recipeId } = route.params as RouteParams
  const uid = auth().currentUser.uid
  const theme = useTheme()

  useEffect(() => {
    firestore()
      .collection('users')
      .doc(uid)
      .collection('receitas')
      .doc(recipeId)
      .get()
      .then((doc) => {
        const { title, description, ingredients, prepare, type } = doc.data()
        setRecipeToEdit({
          title,
          description,
          ingredients,
          prepare,
          type,
        })
      })
  }, [recipeId, uid])

  return recipeToEdit ? (
    <EditRecipePreload preload={recipeToEdit} recipeId={recipeId} />
  ) : (
    <Container>
      <ActivityIndicator size="large" color={theme.colors.indigo600} />
    </Container>
  )
}
