import { Text } from 'react-native-svg'
import { SignInInput } from '../../../components/SignInInput'
import { Container } from './styles'

export function SignInWithEmailAndPassword() {
  return (
    <Container>
      <SignInInput title="E-mail" placeholder="Digite seu E-mail" />
      <SignInInput title="Senha" placeholder="Digite sua senha" />
      <Text>hcuhuchuheuy</Text>
    </Container>
  )
}
