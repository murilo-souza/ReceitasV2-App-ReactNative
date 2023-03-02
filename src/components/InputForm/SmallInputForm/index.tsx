import React from 'react'
import { Container, Error } from './styles'
import { Control, Controller } from 'react-hook-form'
import { TextInputProps } from 'react-native'
import { InputSmall } from '../../InputSmall'

interface Props extends TextInputProps {
  control: Control
  name: string
  error: string
  title: string
  inputType: 'signin' | 'small' | 'large'
}

export function InputForm({
  control,
  name,
  error,
  title,
  inputType,
  ...rest
}: Props) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputSmall
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
