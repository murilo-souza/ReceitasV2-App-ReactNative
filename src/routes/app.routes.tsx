import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { EditRecipe } from '../screens/EditRecipe'
import { Home } from '../screens/Home'
import { NewRecipe } from '../screens/NewRecipe'
import { Profile } from '../screens/Profile'
import { RecipeDetails } from '../screens/RecipeDetails'
import {
  IngredientesStep,
  IngredientsProps,
} from '../screens/NewRecipe/IngredientesStep'
import { PrepareStep } from '../screens/NewRecipe/PrepareStep'

export type RootParamList = {
  home: undefined
  newRecipe: undefined
  ingredientStep: {
    recipe: {
      title: string
      description: string
      type: string
    }
  }
  prepareStep: {
    newRecipe: {
      title: string
      description: string
      type: string
      ingredients: IngredientsProps[]
    }
  }
  recipeDetails: { recipeId: string }
  editRecipe: { recipeId: string }
  profile: undefined
}
const { Navigator, Screen } = createStackNavigator<RootParamList>()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="newRecipe" component={NewRecipe} />
      <Screen name="ingredientStep" component={IngredientesStep} />
      <Screen name="prepareStep" component={PrepareStep} />
      <Screen name="recipeDetails" component={RecipeDetails} />
      <Screen name="editRecipe" component={EditRecipe} />
      <Screen name="profile" component={Profile} />
    </Navigator>
  )
}
