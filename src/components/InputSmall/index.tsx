import React from 'react'
import { Container, RecipeInputText, Title } from './styles'
import { TextInputProps } from 'react-native'

type Props = TextInputProps & {
  title: string
}

export function InputSmall({ title, ...rest }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <RecipeInputText {...rest} />
    </Container>
  )
}
