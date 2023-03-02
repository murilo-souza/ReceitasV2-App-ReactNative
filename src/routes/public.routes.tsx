import { createStackNavigator } from '@react-navigation/stack'
import { Landing } from '../screens/Landing'
import { SignInWithEmailAndPassword } from '../screens/SignIn/SignInWithEmailAndPassword'
import { SignUpWithEmailAndPassword } from '../screens/SignIn/SignUpWithEmailAndPassword'

export type RootParamListPublic = {
  landing: undefined
  signInWithEmailAndPassword: undefined
  signUpWithEmailAndPassword: undefined
}
const { Navigator, Screen } = createStackNavigator<RootParamListPublic>()

export function PublicRoutes() {
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
    </Navigator>
  )
}
