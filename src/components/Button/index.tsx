import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { Container, Title } from './styles'

type Props = RectButtonProps & {
  title: string
  variant: 'submit' | 'delete' | 'edit'
}

export function Button({ title, variant, ...rest }: Props) {
  return (
    <Container {...rest} variant={variant}>
      <Title>{title}</Title>
    </Container>
  )
}
