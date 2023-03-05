import { IconProps } from 'phosphor-react-native'
import React, { ElementType } from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components/native'
import { Container, Stroke, Title } from './styles'

type Props = RectButtonProps & {
  title: string
  icon: ElementType<IconProps>
  isActive: boolean
}

export function TypeButton({ title, icon: Icon, isActive, ...rest }: Props) {
  const theme = useTheme()

  return (
    <Stroke isActive={isActive}>
      <Container {...rest}>
        <Icon size={30} color={theme.colors.white} />
        <Title>{title}</Title>
      </Container>
    </Stroke>
  )
}
