import React from 'react'
import { Photo, User, UserDescription, UserContainer, UserName } from './styles'

import { StackNavigationProp } from '@react-navigation/stack'
import { RootParamList } from '../../routes/app.routes'
import { useNavigation } from '@react-navigation/native'

type Props = StackNavigationProp<RootParamList, 'profile'>

type UserNameProps = {
  username: string
  photo: string
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
          uri:
            photo === ''
              ? 'https://i.pinimg.com/originals/59/fb/a6/59fba610c9a40c61c9f26f0a1e5db912.jpg'
              : photo,
        }}
      />
      <User>
        <UserName>Olá, {username}</UserName>
        <UserDescription></UserDescription>
      </User>
    </UserContainer>
  )
}
