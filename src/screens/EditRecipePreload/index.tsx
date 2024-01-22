import React, { useState } from 'react'
import { Container, Form, TypeButtonWrapper } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { TypeButton } from '../../components/TypeButton'
import { Cookie, CookingPot } from 'phosphor-react-native'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Alert } from 'react-native'
import { SmallInputForm } from '../../components/InputForm/SmallInputForm'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { RootParamList } from '../../routes/app.routes'

type Props = StackNavigationProp<RootParamList, 'editRecipe'>
interface FormData {
  title: string
  description: string
}

const schema = yup.object().shape({
  title: yup.string().required('Título é obrigatório'),
  description: yup.string().required('Descrição é obrigatória'),
})

export function EditRecipePreload({ preload, recipeId }) {
  const navigation = useNavigation<Props>()
  const [loading, setLoading] = useState(false)

  const [recipeType, setRecipeType] = useState(preload.type)

  function handleRecipeType(type: 'salty' | 'sweet') {
    setRecipeType(type)
  }

  async function handleNewRecipe(form: FormData) {
    if (!recipeType) {
      return Alert.alert('Selecione o tipo da receita')
    }

    setLoading(true)

    const NewRecipe = {
      title: form.title,
      description: form.description,
      type: recipeType,
      ingredients: preload.ingredients,
      prepare: preload.prepare,
    }

    navigation.navigate('editIngredientStep', { recipe: NewRecipe, recipeId })
    setLoading(false)
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: preload,
  })

  return (
    <Container>
      <Header title="Editar receita" />

      <Form>
        <SmallInputForm
          name={'title'}
          title="Título"
          placeholder="Digite o titulo da sua receita"
          control={control}
          error={errors.title && errors.title.message}
        />

        <SmallInputForm
          name={'description'}
          title="Descrição"
          placeholder="De uma descrição para sua receita"
          control={control}
          error={errors.description && errors.description.message}
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
        disabled={loading}
        title="Próximo"
        variant="edit"
        onPress={handleSubmit(handleNewRecipe)}
      />
    </Container>
  )
}
