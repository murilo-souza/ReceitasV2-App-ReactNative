import React, { useState } from 'react'
import { CardContainer, Container, Title } from './styles'
import { Header } from '../../../components/Header'
import { InputArray } from '../../../components/InputArray'
import { FlatList, Modal } from 'react-native'
import { FormCard } from '../../../components/FormCard'
import { Button } from '../../../components/Button'
import { useNavigation, useRoute } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootParamList } from '../../../routes/app.routes'
import { AlertDialog } from '../../../components/AlertDialog'
export interface IngredientsProps {
  id: string
  ingredient: string
}

type RouteParams = {
  recipe: {
    title: string
    description: string
    type: string
  }
}

type Props = StackNavigationProp<RootParamList, 'ingredientStep'>

export function IngredientesStep() {
  const [ingredients, setIngredients] = useState<IngredientsProps[]>([])
  const [modalVisible, setModalVisible] = useState(false)
  const [ingredient, setIngredient] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigation<Props>()
  const route = useRoute()
  const { recipe } = route.params as RouteParams

  function handleAddNewIngredient() {
    if (!ingredient) {
      return setModalVisible(true)
    }

    setIngredients([{ id: String(Math.random()), ingredient }, ...ingredients])
    setIngredient('')
  }

  function handleDeleteIngredient(id: string) {
    const filteredIngredients = ingredients.filter(
      (ingredient) => ingredient.id !== id,
    )
    setIngredients(filteredIngredients)
  }

  function handleNextStep() {
    if (ingredients.length === 0) {
      return setModalVisible(true)
    }

    setIsLoading(true)

    const newRecipe = {
      title: recipe.title,
      description: recipe.description,
      type: recipe.type,
      ingredients,
    }

    navigation.navigate('prepareStep', { newRecipe })

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
          description="Nessário adicionar pelo menos um ingrediente"
          stay={() => setModalVisible(false)}
          stayText="Ok"
          onlyStay={true}
        />
      </Modal>
      <Title>Ingredientes</Title>
      <CardContainer>
        <FlatList
          data={ingredients}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FormCard
              title={item.ingredient}
              onPress={() => handleDeleteIngredient(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </CardContainer>
      <InputArray
        onPress={handleAddNewIngredient}
        onChangeText={setIngredient}
        value={ingredient}
      />
      <Button
        title="Próximo"
        isLoading={isLoading}
        variant="submit"
        onPress={handleNextStep}
      />
    </Container>
  )
}
