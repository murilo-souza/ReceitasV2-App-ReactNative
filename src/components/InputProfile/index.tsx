import React, { ElementType } from 'react'
import { Container, Divider, IconContainer, Input } from './styles'
import { TextInputProps } from 'react-native'
import { IconProps } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

type Props = TextInputProps & {
  icon: ElementType<IconProps>
}

export function InputProfile({ icon: Icon, ...rest }: Props) {
  const theme = useTheme()

  return (
    <Container>
      <IconContainer>
        <Icon size={30} color={theme.colors.indigo600} />
      </IconContainer>
      <Divider />
      <Input {...rest} />
    </Container>
  )
}
