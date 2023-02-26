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

export function Home() {
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
        <AddNewRecipeButton />
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
