import { createStackNavigator } from '@react-navigation/stack'
import { SignInWithEmailAndPassword } from '../screens/SignIn/SignInWithEmailAndPassword'
import { Landing } from '../screens/Landing'

export type RootParamList = {
  landing: undefined
  signInWithEmailAndPassword: undefined
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
    </Navigator>
  )
}
