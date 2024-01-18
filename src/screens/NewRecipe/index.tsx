import React, { useState } from 'react'
import {
  Card,
  Container,
  DeleteButton,
  Form,
  ListContainer,
  ListContainerSecond,
  Title,
  TypeButtonWrapper,
} from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { TypeButton } from '../../components/TypeButton'
import { Cookie, CookingPot, Trash } from 'phosphor-react-native'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Alert, ActivityIndicator } from 'react-native'
import { SmallInputForm } from '../../components/InputForm/SmallInputForm'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { RootParamList } from '../../routes/app.routes'
import { useTheme } from 'styled-components/native'
import { InputArray } from '../../components/InputArray'

type Props = StackNavigationProp<RootParamList, 'newRecipe'>
interface IngredientsProps {
  id: string
  ingredient: string
}

interface StepsProps {
  id: string
  step: string
}
interface FormData {
  title: string
  description: string
  ingredients: IngredientsProps[]
  prepare: StepsProps[]
}

const schema = yup.object().shape({
  title: yup.string().required('Título é obrigatório').max(20),
  description: yup.string().required('Descrição é obrigatória'),
  ingredients: yup.array().min(1).required('Ingredientes é obrigatória'),
  prepare: yup.array().min(1).required('Preparação é obrigatório'),
})

export function NewRecipe() {
  const [recipeType, setRecipeType] = useState('')

  const [ingredients, setIngredients] = useState<IngredientsProps[]>([])
  const [ingredient, setIngredient] = useState('')

  const [steps, setSteps] = useState<StepsProps[]>([])
  const [step, setStep] = useState('')

  const navigation = useNavigation<Props>()
  const [loading, setLoading] = useState(false)
  const theme = useTheme()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  function handleRecipeType(type: 'salty' | 'sweet') {
    setRecipeType(type)
  }

  function handleAddNewIngredient() {
    setIngredients([{ id: String(Math.random()), ingredient }, ...ingredients])
    setIngredient('')
  }

  function handleDeleteIngredient(id: string) {
    const filteredIngredients = ingredients.filter(
      (ingredient) => ingredient.id !== id,
    )
    setIngredients(filteredIngredients)
  }

  function handleAddNewStep() {
    setSteps([...steps, { id: String(Math.random()), step }])
    setStep('')
  }

  function handleDeleteStep(id: string) {
    const filteredSteps = steps.filter((step) => step.id !== id)
    setSteps(filteredSteps)
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
      created_at: firestore.FieldValue.serverTimestamp(),
    }

    const uid = auth().currentUser.uid

    await firestore()
      .collection('users')
      .doc(uid)
      .collection('receitas')
      .doc()
      .set(NewRecipe)

    navigation.navigate('home')
    setLoading(false)
    reset()
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

        <InputArray
          title="Ingredientes"
          placeholder="Adicione um ingrediente"
          onChangeText={setIngredient}
          value={ingredient}
          onPress={handleAddNewIngredient}
        >
          <ListContainer>
            {ingredients.map((item) => (
              <Card key={item.id}>
                <Title>{item.ingredient}</Title>
                <DeleteButton onPress={() => handleDeleteIngredient(item.id)}>
                  <Trash color={theme.colors.red600} size={20} />
                </DeleteButton>
              </Card>
            ))}
          </ListContainer>
        </InputArray>

        <InputArray
          title="Modo de preparo"
          placeholder="Como é feita sua receita?"
          onChangeText={setStep}
          value={step}
          onPress={handleAddNewStep}
        >
          <ListContainerSecond>
            {steps.map((item) => (
              <Card key={item.id}>
                <Title>{item.step}</Title>
                <DeleteButton onPress={() => handleDeleteStep(item.id)}>
                  <Trash color={theme.colors.red600} size={20} />
                </DeleteButton>
              </Card>
            ))}
          </ListContainerSecond>
        </InputArray>

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
          title="Salvar receita"
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
      </Form>
    </Container>
  )
}
