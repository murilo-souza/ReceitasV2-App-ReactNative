import React, { useState } from 'react'
import { CardContainer, Container, Title } from './styles'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { IngredientsProps } from '../IngredientesStep'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootParamList } from '../../../routes/app.routes'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Header } from '../../../components/Header'
import { FlatList, Modal } from 'react-native'
import { FormCard } from '../../../components/FormCard'
import { InputArray } from '../../../components/InputArray'
import { Button } from '../../../components/Button'
import { AlertDialog } from '../../../components/AlertDialog'

export interface StepsProps {
  id: string
  step: string
}

type RouteParams = {
  newRecipe: {
    title: string
    description: string
    type: string
    ingredients: IngredientsProps[]
  }
}

type Props = StackNavigationProp<RootParamList, 'prepareStep'>

export function PrepareStep() {
  const [steps, setSteps] = useState<StepsProps[]>([])
  const [step, setStep] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigation<Props>()
  const route = useRoute()
  const { newRecipe } = route.params as RouteParams
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

    const NewRecipe = {
      title: newRecipe.title,
      description: newRecipe.description,
      type: newRecipe.type,
      ingredients: newRecipe.ingredients,
      prepare: steps,
      created_at: firestore.FieldValue.serverTimestamp(),
    }

    setIsLoading(true)
    await firestore()
      .collection('users')
      .doc(uid)
      .collection('receitas')
      .doc()
      .set(NewRecipe)

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
        title="Salvar"
        isLoading={isLoading}
        variant="submit"
        onPress={handleAddNewRecipe}
      />
    </Container>
  )
}
