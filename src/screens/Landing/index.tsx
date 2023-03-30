import { SignInButton } from '../../components/SignInButton'
import { AccessText, Container, Description, Title } from './styles'
import GoogleSVG from '../../assets/googleIcon.svg'
import { Envelope } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootParamListPublic } from '../../routes/public.routes'
import React, { useEffect, useState } from 'react'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

type Props = StackNavigationProp<
  RootParamListPublic,
  'signInWithEmailAndPassword'
>

export function Landing() {
  const navigation = useNavigation<Props>()
  const [loading, setLoading] = useState(false)

  function handleSignInWithEmailAndPassword() {
    navigation.navigate('signInWithEmailAndPassword')
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '985080108657-4g73um7h4l49kkbj9t3euj3kun98mbdi.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    })
  }, [])

  async function handleSigninWithGoogle() {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
      // google services are available
    } catch (err) {
      console.error('play services are not available')
    }
    setLoading(true)
    await GoogleSignin.hasPlayServices()
    const { idToken, user } = await GoogleSignin.signIn()
    const googleCredential = auth.GoogleAuthProvider.credential(idToken)
    auth()
      .signInWithCredential(googleCredential)
      .then((userData) => {
        const uid = userData.user?.uid
        const users = firestore().collection('users')
        users.doc(uid).set({
          Email: user.email,
          Name: user.givenName,
          Photo: user.photo,
        })
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
      })
  }

  return (
    <Container>
      <Title>
        Salve{`\n`}
        suas Receitas{`\n`}
        de{`\n`}
        Família
      </Title>
      <Description>
        Salve receitas criadas pela sua família em um banco de dados e nunca as
        perca
      </Description>
      <AccessText>Acesse agora</AccessText>
      {/* <SignInButton
        icon={GoogleSVG}
        title="Entrar com Google"
        onPress={handleSigninWithGoogle}
        isLoading={loading}
        enabled={!loading}
      /> */}
      <SignInButton
        icon={Envelope}
        title="Entrar com Email e senha"
        onPress={handleSignInWithEmailAndPassword}
        enabled={!loading}
      />
    </Container>
  )
}
