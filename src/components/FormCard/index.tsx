import React from 'react'
import { Container, DeleteButton, Title } from './styles'
import { Trash } from 'phosphor-react-native'
import { theme } from '../../styles/theme'

type FormCardProps = {
  title: string
  onPress: () => void
}

export function FormCard({ title, onPress }: FormCardProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <DeleteButton onPress={onPress}>
        <Trash color={theme.colors.red600} size={20} />
      </DeleteButton>
    </Container>
  )
}
