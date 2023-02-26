import { Plus } from 'phosphor-react-native'
import React from 'react'
import { useTheme } from 'styled-components/native'
import { Container } from './styles'

export function AddNewRecipeButton() {
  const theme = useTheme()

  return (
    <Container>
      <Plus size={30} color={theme.colors.slate100} />
    </Container>
  )
}
