import { IconProps } from 'phosphor-react-native'
import React, { ElementType } from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components/native'
import { Container, Stroke, Title } from './styles'

type Props = RectButtonProps & {
  title: string
  icon: ElementType<IconProps>
}

export function TypeButton({ title, icon: Icon, ...rest }: Props) {
  const theme = useTheme()

  return (
    <Stroke>
      <Container {...rest}>
        <Icon size={30} color={theme.colors.indigo400} />
        <Title>{title}</Title>
      </Container>
    </Stroke>
  )
}
