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
import { RootParamList } from '../../../routes/app.routes'
import { useNavigation } from '@react-navigation/native'

type Props = StackNavigationProp<RootParamList, 'signUpWithEmailAndPassword'>

export function SignInWithEmailAndPassword() {
  const navigation = useNavigation<Props>()

  function handleSignUpWithEmailAndPassword() {
    navigation.navigate('signUpWithEmailAndPassword')
  }

  function handleHome() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <LogoSvg />
      <InputWrapper>
        <SignInInput title="E-mail" placeholder="Digite seu E-mail" />
        <SignInInput title="Senha" placeholder="Digite sua senha" />
        <Button title="Entrar" variant="submit" onPress={handleHome} />
        <Footer>
          <TextHighlight>Não tem uma conta?</TextHighlight>
          <BorderlessButton onPress={handleSignUpWithEmailAndPassword}>
            <CreateAccountButtonTitle>Cadastrar</CreateAccountButtonTitle>
          </BorderlessButton>
        </Footer>
      </InputWrapper>
    </Container>
  )
}
