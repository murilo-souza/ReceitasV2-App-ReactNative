import { Button } from '../../../components/Button'
import { SignInInput } from '../../../components/SignInInput'
import { Container, InputWrapper } from './styles'
import LogoSvg from '../../../assets/Recipe.svg'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootParamList } from '../../../routes/app.routes'

type Props = StackNavigationProp<RootParamList, 'home'>

export function SignUpWithEmailAndPassword() {
  const navigation = useNavigation<Props>()

  function handleHome() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <LogoSvg />
      <InputWrapper>
        <SignInInput title="Nome" placeholder="Digite seu nome" />
        <SignInInput title="E-mail" placeholder="Digite seu E-mail" />
        <SignInInput title="Senha" placeholder="Digite sua senha" />
        <SignInInput title="Confirmar senha" placeholder="Confirme sua senha" />
        <Button title="Cadastrar" variant="submit" onPress={handleHome} />
      </InputWrapper>
    </Container>
  )
}
