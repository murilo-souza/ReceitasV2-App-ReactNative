import React, { ElementType } from 'react'
import { ActivityIndicator } from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler'
import { Container, Divider, Title } from './styles'
import { IconProps } from 'phosphor-react-native'
import { SvgProps } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

type Props = RectButtonProps & {
  title: string
  icon: ElementType<IconProps> | React.FC<SvgProps>
  isLoading?: boolean
}

export function SignInButton({ icon: Icon, title, isLoading, ...rest }: Props) {
  const theme = useTheme()

  return (
    <Container {...rest}>
      <Icon size={30} />
      <Divider />

      {isLoading ? (
        <ActivityIndicator size="large" color={theme.colors.zinc800} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  )
}
