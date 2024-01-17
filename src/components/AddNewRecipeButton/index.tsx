import { Plus } from 'phosphor-react-native'
import React from 'react'
import { useTheme } from 'styled-components/native'
import { Container } from './styles'
import { TouchableOpacityProps } from 'react-native'

export function AddNewRecipeButton({ ...rest }: TouchableOpacityProps) {
  const theme = useTheme()

  return (
    <Container {...rest}>
      <Plus size={30} color={theme.colors.slate100} />
    </Container>
  )
}
