import React from 'react'
import { AddNewRecipeButton } from '../../components/AddNewRecipeButton'
import { Container, Header } from './styles'

export function Home() {
  return (
    <Container>
      <Header>
        <AddNewRecipeButton />
      </Header>
    </Container>
  )
}
