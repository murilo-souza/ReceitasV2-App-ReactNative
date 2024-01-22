import { IconProps } from 'phosphor-react-native'
import React, { ElementType, ReactNode } from 'react'
import { useTheme } from 'styled-components/native'
import { Container, Content, Header, Title } from './styles'

type Props = {
  title: string
  content?: string
  icon: ElementType<IconProps>
  children?: ReactNode
}

export function CardDetails({ title, content, icon: Icon, children }: Props) {
  const theme = useTheme()

  return (
    <Container>
      <Header>
        <Icon size={25} color={theme.colors.indigo400} weight="fill" />
        <Title>{title}</Title>
      </Header>
      {content && <Content>{content}</Content>}
      {children}
    </Container>
  )
}
