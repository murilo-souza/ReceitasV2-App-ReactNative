import React, { useState } from 'react'
import { CardContainer, Container, Title } from './styles'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootParamList } from '../../../routes/app.routes'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Header } from '../../../components/Header'
import { FlatList, Modal } from 'react-native'
import { FormCard } from '../../../components/FormCard'
import { InputArray } from '../../../components/InputArray'
import { Button } from '../../../components/Button'
import { IngredientsProps } from '../../NewRecipe/IngredientesStep'
import { StepsProps } from '../../NewRecipe/PrepareStep'
import { AlertDialog } from '../../../components/AlertDialog'

type RouteParams = {
  recipeId: string
  editRecipe: {
    title: string
    description: string
    type: string
    ingredients: IngredientsProps[]
    prepare: StepsProps[]
  }
}

type Props = StackNavigationProp<RootParamList, 'editPrepareStep'>

export function EditPrepareStep() {
  const [step, setStep] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const navigation = useNavigation<Props>()
  const route = useRoute()
  const { editRecipe, recipeId } = route.params as RouteParams
  const [steps, setSteps] = useState<StepsProps[]>(editRecipe.prepare)
  const uid = auth().currentUser.uid

  function handleAddNewStep() {
    if (!step) {
      return setModalVisible(true)
    }

    setSteps([...steps, { id: String(Math.random()), step }])
    setStep('')
  }

  function handleDeleteStep(id: string) {
    const filteredSteps = steps.filter((step) => step.id !== id)
    setSteps(filteredSteps)
  }

  async function handleAddNewRecipe() {
    if (steps.length === 0) {
      return setModalVisible(true)
    }

    const editedRecipe = {
      title: editRecipe.title,
      description: editRecipe.description,
      type: editRecipe.type,
      ingredients: editRecipe.ingredients,
      prepare: steps,
      updated_at: firestore.FieldValue.serverTimestamp(),
    }

    setIsLoading(true)
    await firestore()
      .collection('users')
      .doc(uid)
      .collection('receitas')
      .doc(recipeId)
      .update(editedRecipe)

    navigation.navigate('home')
    setIsLoading(false)
  }

  return (
    <Container>
      <Header title="Criar receita" />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <AlertDialog
          alert="Erro"
          description="Nessário adicionar pelo menos uma etapa de preparo"
          stay={() => setModalVisible(false)}
          stayText="Ok"
          onlyStay={true}
        />
      </Modal>
      <Title>Preparo</Title>
      <CardContainer>
        <FlatList
          data={steps}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FormCard
              title={item.step}
              onPress={() => handleDeleteStep(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </CardContainer>
      <InputArray
        onPress={handleAddNewStep}
        onChangeText={setStep}
        value={step}
      />
      <Button
        title="Editar receita"
        isLoading={isLoading}
        variant="edit"
        onPress={handleAddNewRecipe}
      />
    </Container>
  )
}
