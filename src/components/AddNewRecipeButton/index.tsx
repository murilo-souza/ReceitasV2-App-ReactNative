import { Plus } from 'phosphor-react-native'
import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components/native'
import { Container } from './styles'

export function AddNewRecipeButton({ ...rest }: RectButtonProps) {
  const theme = useTheme()

  return (
    <Container {...rest}>
      <Plus size={30} color={theme.colors.slate100} />
    </Container>
  )
}
