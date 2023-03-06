import { createStackNavigator } from '@react-navigation/stack'
import { EditRecipe } from '../screens/EditRecipe'
import { Home } from '../screens/Home'
import { NewRecipe } from '../screens/NewRecipe'
import { RecipeDetails } from '../screens/RecipeDetails'

export type RootParamList = {
  home: undefined
  newRecipe: undefined
  recipeDetails: { recipeId: string }
  editRecipe: { recipeId: string }
}
const { Navigator, Screen } = createStackNavigator<RootParamList>()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="newRecipe" component={NewRecipe} />
      <Screen name="recipeDetails" component={RecipeDetails} />
      <Screen name="editRecipe" component={EditRecipe} />
    </Navigator>
  )
}
