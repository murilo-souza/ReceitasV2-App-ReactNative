import { ArrowLeft, ShareNetwork } from 'phosphor-react-native'
import React from 'react'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components/native'
import { Container, Title } from './styles'
import { useNavigation } from '@react-navigation/native'
import * as Print from 'expo-print'
import { shareAsync } from 'expo-sharing'
import { IngredientsProps } from '../../screens/NewRecipe/IngredientesStep'
import { StepsProps } from '../../screens/NewRecipe/PrepareStep'
import { useWindowDimensions } from 'react-native'

type RecipePDFProps = {
  title: string
  ingredients: IngredientsProps[]
  prepare: StepsProps[]
}

type Props = {
  title: string
  share?: boolean
  recipe?: RecipePDFProps
}

export function Header({ title, share = false, recipe }: Props) {
  const theme = useTheme()
  const navigation = useNavigation()
  const { width } = useWindowDimensions()

  function handleGoBack() {
    navigation.goBack()
  }

  async function handleShareRecipeWithPDF() {
    const html = `
      <html>
        <body>
          <header>
            <h1 style="font-size: 2rem">Receita Compartilhada</h1>  
            <p style="font-size: 2rem">${recipe.title}</p>
          </header>
          <section>
            <h2>Ingredientes:</h2>
            <ul>
                ${recipe.ingredients.map((item) => `<li>${item.ingredient}</li>`)}
            </ul>
          </section>
          <section>
            <h2>Modo de preparo:</h2>
            <ol>
                ${recipe.prepare.map((item, i) => `<li>${i + 1}º ${item.step}</li>`)}
            </ol>
          </section>
        </body>
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
          }
          header {
            background-color: ${theme.colors.indigo800};
            text-align: center;
            padding: 10px;
            color: white;
          }
          section {
            background-color: white;
            padding: 30px 100px;
            max-width: ${width}px
          }
          ul {
            list-style-type: none;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          ol {
            list-style-type: none;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          li {
            font-size: 1.5rem
            margin-bottom: 10px;
          }
        </style>
      </html>
    `

    const file = await Print.printToFileAsync({
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
