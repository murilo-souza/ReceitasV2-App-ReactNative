import { ForkKnife } from 'phosphor-react-native'
import React from 'react'
import { useTheme } from 'styled-components/native'
import { Container, Description, TextWrapper, Title } from './styles'
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
  title: string
  description: string
}

export function Card({ title, description, ...rest }: Props) {
  const theme = useTheme()
  return (
    <Container {...rest}>
      <ForkKnife size={45} color={theme.colors.indigo400} />
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextWrapper>
    </Container>
  )
}
