import { User } from 'phosphor-react-native'
import React, { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { InputProfile } from '../../components/InputProfile'
import { Container, PhotoUser, PhotoWrapper, Wrapper } from './styles'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootParamList } from '../../routes/app.routes'
import { useNavigation } from '@react-navigation/native'

type Props = StackNavigationProp<RootParamList, 'home'>

export function Profile() {
  const [loading, setLoading] = useState(false)
  const [loadingScreen, setLoadingScreen] = useState(false)
  const navigation = useNavigation<Props>()

  const [name, setName] = useState<any>('')
  const uid = auth().currentUser.uid

  useEffect(() => {
    setLoadingScreen(true)
    firestore()
      .collection('users')
      .doc(uid)
      .onSnapshot((snapshot) => {
        const name = snapshot.get('Name')
        setName(name)
        setLoadingScreen(false)
      })
  }, [uid])

  function handleUpdateUser() {
    setLoading(true)
    firestore().collection('users').doc(uid).update({
      Name: name,
    })
    navigation.navigate('home')
    setLoading(false)
  }

  return (
    <Container>
      <Header title="Detalhes de perfil" />
      <Wrapper>
        <PhotoWrapper>
          <PhotoUser source={{ uri: 'https://github.com/murilo-souza.png' }} />
        </PhotoWrapper>
        <InputProfile icon={User} onChangeText={setName} value={name} />
        <Button
          title="Editar perfil"
          variant="submit"
          isLoading={loading}
          enabled={!loading}
          onPress={handleUpdateUser}
        />
      </Wrapper>
    </Container>
  )
}