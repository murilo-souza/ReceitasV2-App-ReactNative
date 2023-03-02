import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens/Home'
import { NewRecipe } from '../screens/NewRecipe'
import { RecipeDetails } from '../screens/RecipeDetails'

export type RootParamList = {
  home: undefined
  newRecipe: undefined
  recipeDetails: undefined
}
const { Navigator, Screen } = createStackNavigator<RootParamList>()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="newRecipe" component={NewRecipe} />
      <Screen name="recipeDetails" component={RecipeDetails} />
    </Navigator>
  )
}
