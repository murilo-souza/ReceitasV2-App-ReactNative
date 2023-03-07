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
      <html>
        <body>
          <h1 style="font-size: 3rem">Receita Compartilhada</h1>
          <br/>
          
          <h2 style="font-size: 2rem">Título</h2>
          <p style="font-size: 1.5rem">${recipe.title}</p>
          <br/>

          <h2 style="font-size: 2rem">Ingredientes</h2>
          <textarea rows=${recipe.ingredients.length / 12} cols="40">
            ${recipe.ingredients}
          </textarea>
          <br/>

          <h2 style="font-size: 2rem">Modo de preparo</h2>
          <textarea rows=${recipe.prepare.length / 15} cols="40">
            ${recipe.prepare}
          </textarea>
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
