import React from 'react'
import { Photo, User, UserDescription, UserContainer, UserName } from './styles'

import { StackNavigationProp } from '@react-navigation/stack'
import { RootParamList } from '../../routes/app.routes'
import { useNavigation } from '@react-navigation/native'
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

type Props = StackNavigationProp<RootParamList, 'profile'>

type UserNameProps = {
  username: FirebaseFirestoreTypes.DocumentFieldType
  photo: FirebaseFirestoreTypes.DocumentFieldType
}

export function UserInfo({ username, photo }: UserNameProps) {
  const navigation = useNavigation<Props>()

  function handleGoToProfileScreen() {
    navigation.navigate('profile')
  }

  return (
    <UserContainer onPress={handleGoToProfileScreen}>
      <Photo
        source={{
          uri: photo,
        }}
      />
      <User>
        <UserName>Olá, {username}</UserName>
        <UserDescription></UserDescription>
      </User>
    </UserContainer>
  )
}
