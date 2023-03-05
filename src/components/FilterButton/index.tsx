import { IconProps } from 'phosphor-react-native'
import React, { ElementType } from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components/native'
import { Container, Stroke, Title } from './styles'

interface Props extends RectButtonProps {
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
