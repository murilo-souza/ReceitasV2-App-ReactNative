import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes'
import { PublicRoutes } from './public.routes'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'

export function Routes() {
  const [user, setUser] = useState<FirebaseAuthTypes.User>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((response) => {
      setUser(response)
      setIsLoading(false)
    })

    return subscriber
  }, [])

  if (isLoading) {
    return <ActivityIndicator size="large" />
  }

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  )
}
