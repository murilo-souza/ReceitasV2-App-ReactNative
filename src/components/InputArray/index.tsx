import React, { ReactNode } from 'react'
import {
  ButtonAdd,
  Container,
  InputWrapper,
  RecipeInputText,
  Title,
  TitleButtonAdd,
} from './styles'
import { TextInputProps } from 'react-native'

type Props = TextInputProps & {
  title: string
  children: ReactNode
}

export function InputArray({ title, children, ...rest }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
      <InputWrapper>
        <RecipeInputText {...rest} />
        <ButtonAdd>
          <TitleButtonAdd>Adicionar</TitleButtonAdd>
        </ButtonAdd>
      </InputWrapper>
    </Container>
  )
}
