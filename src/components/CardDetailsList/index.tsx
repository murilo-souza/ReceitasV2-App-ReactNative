import { IconProps } from 'phosphor-react-native'
import React, { ElementType } from 'react'
import { useTheme } from 'styled-components/native'
import { Container, Content, Header, Title } from './styles'

type Props = {
  title: string
  content: string[]
  icon: ElementType<IconProps>
}

export function CardDetailsList({ title, content, icon: Icon }: Props) {
  const theme = useTheme()

  return (
    <Container>
      <Header>
        <Icon size={25} color={theme.colors.indigo400} weight="fill" />
        <Title>{title}</Title>
      </Header>
    </Container>
  )
}
