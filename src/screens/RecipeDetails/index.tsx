import { Book, CookingPot, Notebook, Scroll } from 'phosphor-react-native'
import React from 'react'
import { Button } from '../../components/Button'
import { CardDetails } from '../../components/CardDetails/inde'
import { Header } from '../../components/Header'
import { Container, DetailsWrapper } from './styles'

export function RecipeDetails() {
  return (
    <Container>
      <Header title="Detalhes da receita" />
      <DetailsWrapper>
        <CardDetails
          title="Título"
          content="Costelinha Barbaecue"
          icon={Notebook}
        />
        <CardDetails
          title="Ingredientes"
          content=" 1Kg de Costela de porco
        200g de Mostarda
        2 Limãos
        Tempero da vovó"
          icon={Scroll}
        />
        <CardDetails
          title="Modo de Preparo"
          content="Colacar os temperos na costela
        Usar siringa para injetar tempero (opcional)
        Envolver a costela em papel alumínio
        Forno 200 C° por 4 horas"
          icon={CookingPot}
        />
      </DetailsWrapper>

      <Button title="Editar receita" variant="edit" />

      <Button title="Deletar receita" variant="delete" />
    </Container>
  )
}
