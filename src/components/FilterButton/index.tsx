import { IconProps } from 'phosphor-react-native'
import React, { ElementType } from 'react'
import { useTheme } from 'styled-components/native'
import { Container, Title } from './styles'

interface Props {
  title: string
  icon: ElementType<IconProps>
  isActive: boolean
}

export function FilterButton({ title, icon: Icon, isActive }: Props) {
  const theme = useTheme()

  return (
    <Container isActive={isActive}>
      <Icon
        size={25}
        color={isActive ? theme.colors.indigo400 : theme.colors.slate100}
      />
      <Title isActive={isActive}>{title}</Title>
    </Container>
  )
}
