import React from 'react'
import { Container, Error } from './styles'
import { Control, Controller } from 'react-hook-form'
import { TextInputProps } from 'react-native'
import { InputLarge } from '../../InputLarge'

interface Props extends TextInputProps {
  control: Control
  name: string
  error: any
  title: string
}

export function LargeInputForm({
  control,
  name,
  error,
  title,
  ...rest
}: Props) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputLarge
            title={title}
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />

      {error && <Error>{error}</Error>}
    </Container>
  )
}
