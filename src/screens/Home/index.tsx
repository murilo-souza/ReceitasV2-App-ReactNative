/* eslint-disable prefer-const */
/* eslint-disable camelcase */
import { Cookie, CookingPot } from 'phosphor-react-native'
import React, { useCallback, useState } from 'react'
import { AddNewRecipeButton } from '../../components/AddNewRecipeButton'
import { Card } from '../../components/Card'
import { FlatList } from 'react-native'

import { FilterButton } from '../../components/FilterButton'
import {
  Container,
  FilterWrapper,
  Header,
  HeaderListWrapper,
  ListTitle,
  Quantity,
} from './styles'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootParamList } from '../../routes/app.routes'
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { UserInfo } from '../../components/UserInfo'
import { Loading } from '../../components/Loading'

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
  const [recipeType, setRecipeType] = useState<'salty' | 'sweet'>('salty')
  const [recipes, setRecipes] = useState<RecipeCardProps[]>([])
  const [isLoading, setIsLoading] = useState(true)
  let [name, setName] = useState<FirebaseFirestoreTypes.DocumentFieldType>('')
  let [photo, setPhoto] = useState<FirebaseFirestoreTypes.DocumentFieldType>('')

  const navigation = useNavigation<Props>()

  function handleNewRecipe() {
    navigation.navigate('newRecipe')
  }

  function handleRecipeDetail(recipeId: string) {
    navigation.navigate('recipeDetails', { recipeId })
  }

  useFocusEffect(
    useCallback(() => {
      const uid = auth().currentUser?.uid

      const fetchData = async () => {
        try {
          const userSnapshot = await firestore()
            .collection('users')
            .doc(uid)
            .get()
          const name = userSnapshot.get('Name')
          const photo = userSnapshot.get('Photo')
          setName(name)
          setPhoto(photo)

          firestore()
            .collection('users')
            .doc(uid)
            .collection('receitas')
            .orderBy('created_at', 'desc')
            .where('type', '==', recipeType)
            .onSnapshot((recipeSnapshot) => {
              if (recipeSnapshot) {
                const data = recipeSnapshot.docs.map((doc) => {
                  const {
                    title,
                    description,
                    ingredients,
                    prepare,
                    created_at,
                  } = doc.data()

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
              }
            })
        } catch (error) {
          console.error('Erro ao buscar receitas:', error)
        } finally {
          setIsLoading(false)
        }
      }
      fetchData()
    }, [recipeType]),
  )

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <Header>
            <UserInfo
              username={name}
              photo={
                photo === ''
                  ? 'https://static.vecteezy.com/ti/vetor-gratis/t2/6994468-icone-de-de-chapeu-de-chef-vetor.jpg'
                  : photo
              }
            />
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
        </Container>
      )}
    </>
  )
}
