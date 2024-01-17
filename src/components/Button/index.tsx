import React from 'react'
import { Container, Title } from './styles'
import { ActivityIndicator, TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components/native'

type Props = TouchableOpacityProps & {
  title: string
  variant: 'submit' | 'delete' | 'edit'
  isLoading: boolean
}

export function Button({ title, variant, isLoading, ...rest }: Props) {
  const theme = useTheme()

  return (
    <Container {...rest} variant={variant}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={variant === 'edit' ? theme.colors.zinc800 : theme.colors.white}
        />
      ) : (
        <Title variant={variant}>{title}</Title>
      )}
    </Container>
  )
}
