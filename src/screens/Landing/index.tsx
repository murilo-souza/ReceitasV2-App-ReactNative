import { SignInButton } from '../../components/SignInButton'
import { AccessText, Container, Description, Title } from './styles'
import GoogleSVG from '../../assets/googleIcon.svg'
import { Envelope } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootParamListPublic } from '../../routes/public.routes'

type Props = StackNavigationProp<
  RootParamListPublic,
  'signInWithEmailAndPassword'
>

export function Landing() {
  const navigation = useNavigation<Props>()

  function handleSignInWithEmailAndPassword() {
    navigation.navigate('signInWithEmailAndPassword')
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
      <SignInButton icon={GoogleSVG} title="Entrar com Google" />
      <SignInButton
        icon={Envelope}
        title="Entrar com Email e senha"
        onPress={handleSignInWithEmailAndPassword}
      />
    </Container>
  )
}
