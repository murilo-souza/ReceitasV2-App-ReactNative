import { Cookie, CookingPot } from 'phosphor-react-native'
import React from 'react'
import { AddNewRecipeButton } from '../../components/AddNewRecipeButton'
import { Card } from '../../components/Card'
import { FilterButton } from '../../components/FilterButton'
import {
  Container,
  FilterWrapper,
  Header,
  HeaderListWrapper,
  ListTitle,
  Photo,
  Quantity,
  User,
  UserDescription,
  UserInfo,
  UserName,
} from './styles'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootParamList } from '../../routes/app.routes'

type Props = StackNavigationProp<RootParamList, 'newRecipe'>

export function Home() {
  const navigation = useNavigation<Props>()

  function handleNewRecipe() {
    navigation.navigate('newRecipe')
  }
  return (
    <Container>
      <Header>
        <UserInfo>
          <Photo source={{ uri: 'https://github.com/murilo-souza.png' }} />
          <User>
            <UserName>Olá, Murilo</UserName>
            <UserDescription>Masterchef</UserDescription>
          </User>
        </UserInfo>
        <AddNewRecipeButton onPress={handleNewRecipe} />
      </Header>
      <HeaderListWrapper>
        <ListTitle>Suas Receitas</ListTitle>
        <Quantity>Total 5</Quantity>
      </HeaderListWrapper>
      <FilterWrapper>
        <FilterButton icon={CookingPot} title="Salgados" />
        <FilterButton icon={Cookie} title="Sobremesa" />
      </FilterWrapper>
      <Card
        title="Costelinha Barbecue"
        description="Costelinha com molho caseiro"
      />
    </Container>
  )
}
