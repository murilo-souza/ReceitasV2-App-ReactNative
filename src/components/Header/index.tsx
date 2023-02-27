import { ArrowLeft } from 'phosphor-react-native'
import React from 'react'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components/native'
import { Container, Title } from './styles'
import { useNavigation } from '@react-navigation/native'

type Props = {
  title: string
}

export function Header({ title }: Props) {
  const theme = useTheme()
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Container>
      <BorderlessButton onPress={handleGoBack}>
        <ArrowLeft size={30} color={theme.colors.white} />
      </BorderlessButton>
      <Title>{title}</Title>
    </Container>
  )
}
