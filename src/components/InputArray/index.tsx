import React from 'react'
import {
  ButtonAdd,
  Container,
  InputWrapper,
  RecipeInputText,
  TitleButtonAdd,
} from './styles'
import { TextInputProps } from 'react-native'

type Props = TextInputProps & {
  onPress: () => void
}

export function InputArray({ onPress, ...rest }: Props) {
  return (
    <Container>
      <InputWrapper>
        <RecipeInputText {...rest} />
        <ButtonAdd onPress={onPress}>
          <TitleButtonAdd>Adicionar</TitleButtonAdd>
        </ButtonAdd>
      </InputWrapper>
    </Container>
  )
}
