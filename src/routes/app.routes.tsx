import { createStackNavigator } from '@react-navigation/stack'
import { Landing } from '../screens/Landing'
import { SignInWithEmailAndPassword } from '../screens/SignIn/SignInWithEmailAndPassword'
import { SignUpWithEmailAndPassword } from '../screens/SignIn/SignUpWithEmailAndPassword'
import { Home } from '../screens/Home'
import { NewRecipe } from '../screens/NewRecipe'
import { RecipeDetails } from '../screens/RecipeDetails'

export type RootParamList = {
  landing: undefined
  signInWithEmailAndPassword: undefined
  signUpWithEmailAndPassword: undefined
  home: undefined
  newRecipe: undefined
  recipeDetails: undefined
}
const { Navigator, Screen } = createStackNavigator<RootParamList>()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="landing" component={Landing} />
      <Screen
        name="signInWithEmailAndPassword"
        component={SignInWithEmailAndPassword}
      />
      <Screen
        name="signUpWithEmailAndPassword"
        component={SignUpWithEmailAndPassword}
      />
      <Screen name="home" component={Home} />
      <Screen name="newRecipe" component={NewRecipe} />
      <Screen name="recipeDetails" component={RecipeDetails} />
    </Navigator>
  )
}
