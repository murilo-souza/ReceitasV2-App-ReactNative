import { Camera, User } from 'phosphor-react-native'
import React, { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { InputProfile } from '../../components/InputProfile'
import {
  Container,
  PhotoButton,
  PhotoUser,
  PhotoWrapper,
  Wrapper,
} from './styles'
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootParamList } from '../../routes/app.routes'
import { useNavigation } from '@react-navigation/native'
import { Loading } from '../../components/Loading'
import { useTheme } from 'styled-components/native'
import * as ImagePicker from 'expo-image-picker'

type Props = StackNavigationProp<RootParamList, 'home'>

export function Profile() {
  const [loading, setLoading] = useState(false)
  const [loadingScreen, setLoadingScreen] = useState(false)
  const navigation = useNavigation<Props>()
  const theme = useTheme()

  const [name, setName] = useState<FirebaseFirestoreTypes.DocumentFieldType>('')
  const [photo, setPhoto] =
    useState<FirebaseFirestoreTypes.DocumentFieldType>('')
  const uid = auth().currentUser.uid

  useEffect(() => {
    setLoadingScreen(true)
    firestore()
      .collection('users')
      .doc(uid)
      .onSnapshot((snapshot) => {
        const name = snapshot.get('Name')
        const photo = snapshot.get('Photo')
        setName(name)
        setPhoto(photo)
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

  function handleSignOut() {
    setLoading(true)
    auth().signOut()
  }

  async function handleGetAvatarUser() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    })

    if (result.canceled) {
      return
    }

    if (result.assets) {
      // eslint-disable-next-line array-callback-return
      result.assets.map((asset) => {
        firestore().collection('users').doc(uid).update({
          Photo: asset.uri,
        })
      })
    }
  }

  return (
    <>
      {loadingScreen ? (
        <Loading />
      ) : (
        <Container>
          <Header title="Detalhes de perfil" />
          <Wrapper>
            <PhotoWrapper>
              <PhotoUser
                source={{
                  uri:
                    photo === ''
                      ? 'https://static.vecteezy.com/ti/vetor-gratis/t2/6994468-icone-de-de-chapeu-de-chef-vetor.jpg'
                      : photo,
                }}
              />
              <PhotoButton onPress={handleGetAvatarUser}>
                <Camera color={theme.colors.white} size={30} weight="light" />
              </PhotoButton>
            </PhotoWrapper>
            <InputProfile
              icon={User}
              onChangeText={setName}
              value={String(name)}
            />
            <Button
              title="Editar perfil"
              variant="submit"
              isLoading={loading}
              disabled={loading}
              onPress={handleUpdateUser}
            />
            <Button
              title="Sair"
              variant="delete"
              isLoading={loading}
              disabled={loading}
              onPress={handleSignOut}
            />
          </Wrapper>
        </Container>
      )}
    </>
  )
}
