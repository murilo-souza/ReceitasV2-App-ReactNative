import React from 'react'
import { Container, Form, TypeButtonWrapper } from './styles'
import { Header } from '../../components/Header'
import { InputSmall } from '../../components/InputSmall'
import { InputLarge } from '../../components/InputLarge'
import { Button } from '../../components/Button'
import { TypeButton } from '../../components/TypeButton'
import { Cookie, CookingPot } from 'phosphor-react-native'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  title: yup.string().required('Título é obrigatório'),
  description: yup.string().required('Descrição é obrigatória'),
  ingredients: yup.string().required('Ingredientes é obrigatória'),
  prepare: yup.string().required('Preparação é obrigatório'),
})

export function NewRecipe() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  return (
    <Container>
      <Header title="Criar receita" />
      <Form>
        <InputSmall
          title="Título"
          placeholder="Digite o titulo da sua receita"
        />
        <InputSmall
          title="Descrição"
          placeholder="De uma descrição para sua receita"
        />
        <InputLarge
          title="Ingredientes"
          placeholder="Digite os ingredientes da sua receita"
        />
        <InputLarge
          title="Modo de preparo"
          placeholder="Como é feita sua receita?"
        />
        <TypeButtonWrapper>
          <TypeButton title="Salgado" icon={CookingPot} />
          <TypeButton title="Sobremesa" icon={Cookie} />
        </TypeButtonWrapper>
        <Button title="Salvar receita" variant="submit" />
      </Form>
    </Container>
  )
}
