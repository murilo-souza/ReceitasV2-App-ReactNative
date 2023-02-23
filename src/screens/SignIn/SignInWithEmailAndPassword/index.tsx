import { Button } from '../../../components/Button'
import { SignInInput } from '../../../components/SignInInput'
import { Container, InputWrapper } from './styles'
import LogoSvg from '../../../assets/Recipe.svg'

export function SignInWithEmailAndPassword() {
  return (
    <Container>
      <LogoSvg />
      <InputWrapper>
        <SignInInput title="E-mail" placeholder="Digite seu E-mail" />
        <SignInInput title="Senha" placeholder="Digite sua senha" />
        <Button title="Entrar" variant="submit" />
      </InputWrapper>
    </Container>
  )
}
