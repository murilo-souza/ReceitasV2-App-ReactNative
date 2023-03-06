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
import { LargeInputForm } from '../../components/InputForm/LargeInputForm'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { RootParamList } from '../../routes/app.routes'

type Props = StackNavigationProp<RootParamList, 'newRecipe'>
interface FormData {
  title: string
  description: string
  ingredients: string
  prepare: string
}

const schema = yup.object().shape({
  title: yup.string().required('Título é obrigatório'),
  description: yup.string().required('Descrição é obrigatória'),
  ingredients: yup.string().required('Ingredientes é obrigatória'),
  prepare: yup.string().required('Preparação é obrigatório'),
})

export function EditRecipePreload({ preload, recipeId }) {
  const navigation = useNavigation<Props>()
  const uid = auth().currentUser.uid
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
      ingredients: form.ingredients,
      prepare: form.prepare,
      type: recipeType,
    }

    await firestore()
      .collection('users')
      .doc(uid)
      .collection('receitas')
      .doc(recipeId)
      .update(NewRecipe)

    navigation.navigate('home')
    setLoading(false)
    reset()
  }

  const {
    control,
    handleSubmit,
    reset,
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

        <LargeInputForm
          name={'ingredients'}
          title="Ingredientes"
          placeholder="Digite os ingredientes da sua receita"
          control={control}
          error={errors.ingredients && errors.ingredients.message}
          multiline
        />

        <LargeInputForm
          name={'prepare'}
          title="Modo de preparo"
          placeholder="Como é feita sua receita?"
          control={control}
          error={errors.prepare && errors.prepare.message}
          multiline
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
        <Button
          isLoading={loading}
          enabled={!loading}
          title="Editar receita"
          variant="edit"
          onPress={handleSubmit(handleNewRecipe)}
        />
      </Form>
    </Container>
  )
}
