import { IconProps } from 'phosphor-react-native'
import React, { ElementType } from 'react'
import { useTheme } from 'styled-components/native'
import { Container, Stroke, Title } from './styles'
import { TouchableOpacityProps } from 'react-native'

interface Props extends TouchableOpacityProps {
  title: string
  icon: ElementType<IconProps>
  isActive: boolean
}

export function FilterButton({ title, icon: Icon, isActive, ...rest }: Props) {
  const theme = useTheme()

  return (
    <Stroke isActive={isActive}>
      <Container isActive={isActive} {...rest}>
        <Icon
          size={25}
          color={isActive ? theme.colors.indigo400 : theme.colors.slate100}
        />
        <Title isActive={isActive}>{title}</Title>
      </Container>
    </Stroke>
  )
}
