import { Button } from '../../../components/Button'
import { SignInInput } from '../../../components/SignInInput'
import { Container, InputWrapper } from './styles'
import LogoSvg from '../../../assets/Recipe.svg'

export function SignUpWithEmailAndPassword() {
  return (
    <Container>
      <LogoSvg />
      <InputWrapper>
        <SignInInput title="Nome" placeholder="Digite seu nome" />
        <SignInInput title="E-mail" placeholder="Digite seu E-mail" />
        <SignInInput title="Senha" placeholder="Digite sua senha" />
        <SignInInput title="Confirmar senha" placeholder="Confirme sua senha" />
        <Button title="Entrar" variant="submit" />
      </InputWrapper>
    </Container>
  )
}
