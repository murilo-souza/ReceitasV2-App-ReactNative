/* eslint-disable camelcase */
import { Cookie, CookingPot } from 'phosphor-react-native'
import React, { useEffect, useState } from 'react'
import { AddNewRecipeButton } from '../../components/AddNewRecipeButton'
import { Card } from '../../components/Card'
import { ActivityIndicator, FlatList } from 'react-native'

import { FilterButton } from '../../components/FilterButton'
import {
  Container,
  FilterWrapper,
  Header,
  HeaderListWrapper,
  ListTitle,
  Quantity,
} from './styles'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootParamList } from '../../routes/app.routes'
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { useTheme } from 'styled-components/native'
import { UserInfo } from '../../components/UserInfo'

type Props = StackNavigationProp<RootParamList, 'newRecipe'>

type RecipeCardProps = {
  id: string
  title: string
  description: string
  ingredients: string
  prepare: string
  created_at: FirebaseFirestoreTypes.Timestamp
}

export function Home() {
  const theme = useTheme()
  const [recipeType, setRecipeType] = useState<'salty' | 'sweet'>('salty')
  const [recipes, setRecipes] = useState<RecipeCardProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const navigation = useNavigation<Props>()

  function handleNewRecipe() {
    navigation.navigate('newRecipe')
  }

  function handleRecipeDetail(recipeId: string) {
    navigation.navigate('recipeDetails', { recipeId })
  }

  useEffect(() => {
    const uid = auth().currentUser.uid

    const recipeList = firestore()
      .collection('users')
      .doc(uid)
      .collection('receitas')
      .where('type', '==', recipeType)
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          const { title, description, ingredients, prepare, created_at } =
            doc.data()

          return {
            id: doc.id,
            title,
            description,
            ingredients,
            prepare,
            created_at,
          }
        })
        setRecipes(data)
        setIsLoading(false)
      })
    return recipeList
  }, [recipeType])

  return (
    <Container>
      <Header>
        <UserInfo />
        <AddNewRecipeButton onPress={handleNewRecipe} />
      </Header>
      <HeaderListWrapper>
        <ListTitle>Suas Receitas</ListTitle>
        <Quantity>Total {recipes.length}</Quantity>
      </HeaderListWrapper>
      <FilterWrapper>
        <FilterButton
          icon={CookingPot}
          title="Salgado"
          isActive={recipeType === 'salty'}
          onPress={() => setRecipeType('salty')}
        />
        <FilterButton
          icon={Cookie}
          title="Doce"
          isActive={recipeType === 'sweet'}
          onPress={() => setRecipeType('sweet')}
        />
      </FilterWrapper>
      {isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.indigo600} />
      ) : (
        <FlatList
          data={recipes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              description={item.description}
              onPress={() => handleRecipeDetail(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
      {/* <RectButton onPress={handleSignOut}>
        <Text>Signout</Text>
      </RectButton> */}
    </Container>
  )
}
