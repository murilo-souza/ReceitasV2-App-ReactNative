import React, { useState } from 'react'
import { Container, Form, TypeButtonWrapper } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { TypeButton } from '../../components/TypeButton'
import { Cookie, CookingPot } from 'phosphor-react-native'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Alert, ActivityIndicator } from 'react-native'
import { SmallInputForm } from '../../components/InputForm/SmallInputForm'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { RootParamList } from '../../routes/app.routes'
import { useTheme } from 'styled-components/native'

type Props = StackNavigationProp<RootParamList, 'newRecipe'>

interface FormData {
  title: string
  description: string
}

const schema = yup.object().shape({
  title: yup.string().required('Título é obrigatório').max(20),
  description: yup.string().required('Descrição é obrigatória'),
})

export function NewRecipe() {
  const [recipeType, setRecipeType] = useState('')

  const navigation = useNavigation<Props>()
  const [loading, setLoading] = useState(false)
  const theme = useTheme()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  function handleRecipeType(type: 'salty' | 'sweet') {
    setRecipeType(type)
  }

  async function handleNewRecipe(form: FormData) {
    if (!recipeType) {
      return Alert.alert('Selecione o tipo da receita')
    }

    setLoading(true)
    const recipe = {
      title: form.title,
      description: form.description,
      type: recipeType,
    }

    navigation.navigate('ingredientStep', { recipe })

    setLoading(false)
  }

  return (
    <Container>
      <Header title="Criar receita" />
      <Form>
        <SmallInputForm
          name={'title'}
          title="Título"
          placeholder="Digite o titulo da sua receita"
          control={control}
          error={errors.title && errors.title.message}
          maxLength={30}
        />

        <SmallInputForm
          name={'description'}
          title="Descrição"
          placeholder="De uma descrição para sua receita"
          control={control}
          error={errors.description && errors.description.message}
          maxLength={50}
        />

        <TypeButtonWrapper>
          <TypeButton
            title="Salgado"
            icon={CookingPot}
            isActive={recipeType === 'salty'}
            onPress={() => handleRecipeType('salty')}
          />
          <TypeButton
            title="Sobremesa"
            icon={Cookie}
            isActive={recipeType === 'sweet'}
            onPress={() => handleRecipeType('sweet')}
          />
        </TypeButtonWrapper>
      </Form>
      <Button
        isLoading={loading}
        title="Próximo"
        variant="submit"
        onPress={handleSubmit(handleNewRecipe)}
        disabled={loading}
      />
      {loading && (
        <ActivityIndicator
          size="large"
          color={theme.colors.indigo600}
          style={{ marginBottom: 20 }}
        />
      )}
    </Container>
  )
}
