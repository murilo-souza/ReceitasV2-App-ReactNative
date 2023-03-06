import React, { useEffect, useState } from 'react'
import { Photo, User, UserDescription, UserContainer, UserName } from './styles'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

export function UserInfo() {
  const uid = auth().currentUser.uid
  const [name, setName] = useState<any>('')

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
    <UserContainer>
      <Photo source={{ uri: 'https://github.com/murilo-souza.png' }} />
      <User>
        <UserName>Olá, {name}</UserName>
        <UserDescription>Masterchef</UserDescription>
      </User>
    </UserContainer>
  )
}
