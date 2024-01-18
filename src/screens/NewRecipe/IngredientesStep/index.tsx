import React, { useState } from 'react'
import { Container } from './styles'
import { Header } from '../../../components/Header'

export interface IngredientsProps {
  id: string
  ingredient: string
}

export function IngredientesStep() {
  const [ingredients, setIngredients] = useState<IngredientsProps[]>([])
  const [ingredient, setIngredient] = useState('')

  function handleAddNewIngredient() {
    setIngredients([{ id: String(Math.random()), ingredient }, ...ingredients])
    setIngredient('')
  }

  function handleDeleteIngredient(id: string) {
    const filteredIngredients = ingredients.filter(
      (ingredient) => ingredient.id !== id,
    )
    setIngredients(filteredIngredients)
  }
  return (
    <Container>
      <Header title="Criar receita" />
    </Container>
  )
}
