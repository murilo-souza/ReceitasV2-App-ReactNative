import { Container, SignInInputText, Title } from './styles'
import { TextInputProps } from 'react-native'

type Props = TextInputProps & {
  title: string
}

export function SignInInput({ title, ...rest }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <SignInInputText {...rest} />
    </Container>
  )
}
