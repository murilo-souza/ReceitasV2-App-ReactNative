import { Button } from '../../../components/Button'
import { SignInInput } from '../../../components/SignInInput'
import {
  Container,
  CreateAccountButtonTitle,
  Footer,
  InputWrapper,
  TextHighlight,
} from './styles'
import LogoSvg from '../../../assets/Recipe.svg'
import { BorderlessButton } from 'react-native-gesture-handler'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Alert, ActivityIndicator } from 'react-native'
import auth from '@react-native-firebase/auth'
import { useTheme } from 'styled-components/native'
import { RootParamListPublic } from '../../../routes/public.routes'

type Props = StackNavigationProp<
  RootParamListPublic,
  'signUpWithEmailAndPassword'
>

export function SignInWithEmailAndPassword() {
  const theme = useTheme()

  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation<Props>()

  function handleSignUpWithEmailAndPassword() {
    navigation.navigate('signUpWithEmailAndPassword')
  }

  function handleHome() {
    if (!email || !password) {
      return Alert.alert('Entrar', 'Informe e-mail e senha')
    }

    setIsLoading(true)

    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.error(error)
        setIsLoading(false)

        if (
          error.code === 'auth/invalid-email' ||
          error.code === 'auth/wrong-password'
        ) {
          return Alert.alert('Entrar', 'E-mail ou senha inválida.')
        }

        if (error.code === 'auth/user-not-found') {
          return Alert.alert('Entrar', 'E-mail ou senha inválida.')
        }

        return Alert.alert('Entrar', 'Não foi possível acessar')
      })
  }

  return (
    <Container>
      <LogoSvg />
      <InputWrapper>
        <SignInInput
          title="E-mail"
          placeholder="Digite seu E-mail"
          onChangeText={setEmail}
          value={email}
        />
        <SignInInput
          title="Senha"
          placeholder="Digite sua senha"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
        <Button
          isLoading={isLoading}
          title="Entrar"
          variant="submit"
          onPress={handleHome}
          enabled={!isLoading}
        />
        {isLoading && (
          <ActivityIndicator
            color={theme.colors.indigo600}
            size="large"
            style={{ marginBottom: 15 }}
          />
        )}
        <Footer>
          <TextHighlight>Não tem uma conta?</TextHighlight>
          <BorderlessButton
            onPress={handleSignUpWithEmailAndPassword}
            enabled={!isLoading}
          >
            <CreateAccountButtonTitle>Cadastrar</CreateAccountButtonTitle>
          </BorderlessButton>
        </Footer>
      </InputWrapper>
    </Container>
  )
}
