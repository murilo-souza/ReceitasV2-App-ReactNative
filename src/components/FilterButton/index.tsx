import { IconProps } from 'phosphor-react-native'
import React, { ElementType } from 'react'
import { useTheme } from 'styled-components/native'
import { Container, Title } from './styles'

interface Props {
  title: string
  icon: ElementType<IconProps>
}

export function FilterButton({ title, icon: Icon }: Props) {
  const theme = useTheme()

  return (
    <Container>
      <Icon size={25} color={theme.colors.slate100} />
      <Title>{title}</Title>
    </Container>
  )
}
