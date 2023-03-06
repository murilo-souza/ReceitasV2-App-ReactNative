import { ArrowLeft, ShareNetwork } from 'phosphor-react-native'
import React, { useEffect, useState } from 'react'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components/native'
import { Container, Title } from './styles'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { printToFileAsync } from 'expo-print'
import { shareAsync } from 'expo-sharing'

type Props = {
  title: string
  share?: boolean
  recipeId?: string
}

type RecipePDFProps = {
  title: string
  ingredients: string
  prepare: string
}

export function Header({ title, share = false, recipeId = '' }: Props) {
  const [recipe, setRecipe] = useState<RecipePDFProps>({} as RecipePDFProps)

  const uid = auth().currentUser.uid

  const theme = useTheme()
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
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
      })
  }, [recipeId, uid])

  async function handleShareRecipeWithPDF() {
    const html = `
      <html style="background-color: ${theme.colors.zinc900}">
        <body>
          <h1>Receita Compartilhada</h1>
          <br/>
          
          <h2>Título</h2>
          <p>${recipe.title}</p>
          <br/>

          <h2>Ingredientes</h2>
          <p>${recipe.ingredients}</p>
          <br/>

          <h2>Modo de preparo</h2>
          <p>${recipe.prepare}</p>
        </body>
      </html>
    `

    const file = await printToFileAsync({
      html,
      base64: false,
    })

    await shareAsync(file.uri)
  }

  return (
    <Container>
      <BorderlessButton onPress={handleGoBack}>
        <ArrowLeft size={30} color={theme.colors.white} />
      </BorderlessButton>
      <Title>{title}</Title>
      {share && (
        <BorderlessButton onPress={handleShareRecipeWithPDF}>
          <ShareNetwork size={30} color={theme.colors.white} />
        </BorderlessButton>
      )}
    </Container>
  )
}
