import React, { ElementType } from 'react'

import { RectButtonProps } from 'react-native-gesture-handler'
import { Container, Divider, Title } from './styles'
import { IconProps } from 'phosphor-react-native'

type Props = RectButtonProps & {
  title: string
  icon: ElementType<IconProps>
}

export function SignInButton({ icon: Icon, title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon size={30} />
      <Divider />
      <Title>{title}</Title>
    </Container>
  )
}
