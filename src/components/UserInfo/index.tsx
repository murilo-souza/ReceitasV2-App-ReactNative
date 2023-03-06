import React, { useEffect, useState } from 'react'
import { Photo, User, UserDescription, UserContainer, UserName } from './styles'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootParamList } from '../../routes/app.routes'
import { useNavigation } from '@react-navigation/native'

type Props = StackNavigationProp<RootParamList, 'profile'>

export function UserInfo() {
  const uid = auth().currentUser.uid
  const [name, setName] = useState<any>('')

  const navigation = useNavigation<Props>()

  function handleGoToProfileScreen() {
    navigation.navigate('profile')
  }

  useEffect(() => {
    firestore()
      .collection('users')
      .doc(uid)
      .onSnapshot((snapshot) => {
        const name = snapshot.get('Name')

        setName(name)
      })
  }, [uid])

  return (
    <UserContainer onPress={handleGoToProfileScreen}>
      <Photo source={{ uri: 'https://github.com/murilo-souza.png' }} />
      <User>
        <UserName>Olá, {name}</UserName>
        <UserDescription></UserDescription>
      </User>
    </UserContainer>
  )
}
