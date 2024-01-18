import React, { ReactNode } from 'react'
import { Container, Error } from './styles'
import { Control, Controller } from 'react-hook-form'
import { TextInputProps } from 'react-native'
import { InputArray } from '../../InputArray'

interface Props extends TextInputProps {
  control: Control
  name: string
  error: any
  title: string
  children: ReactNode
  onPress: () => void
}

export function ArrayInputForm({
  control,
  name,
  error,
  title,
  children,
  onPress,
  ...rest
}: Props) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputArray
            title={title}
            onChangeText={onChange}
            value={value}
            onPress={onPress}
            {...rest}
          >
            {children}
          </InputArray>
        )}
        name={name}
      />

      {error && <Error>{error}</Error>}
    </Container>
  )
}
