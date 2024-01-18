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
  onPress: () => void
}

export function InputArray({ title, children, onPress, ...rest }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
      <InputWrapper>
        <RecipeInputText {...rest} />
        <ButtonAdd onPress={onPress}>
          <TitleButtonAdd>Adicionar</TitleButtonAdd>
        </ButtonAdd>
      </InputWrapper>
    </Container>
  )
}
