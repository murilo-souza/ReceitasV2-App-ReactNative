import { Button } from '../../../components/Button'
import { SignInInput } from '../../../components/SignInInput'
import { Container, InputWrapper } from './styles'
import LogoSvg from '../../../assets/Recipe.svg'
import { useState } from 'react'
import { Alert } from 'react-native'

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

export function SignUpWithEmailAndPassword() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmePassword, setConfirmePassword] = useState('')
  const [loading, setLoading] = useState(false)

  function handleHome() {
    if (!name || !email || !password || !confirmePassword) {
      return Alert.alert('Entrar', 'Preencha todos os campos')
    }

    if (password !== confirmePassword) {
      return Alert.alert('Entrar', 'As senhas precisam ser iguais')
    }

    setLoading(true)
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userData) => {
        const uid = userData.user?.uid
        const users = firestore().collection('users')
        users.doc(uid).set({
          Email: email,
          Name: name,
          Photo: '',
        })
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        if (error.code === 'auth/invalid-email') {
          return Alert.alert('Entrar', 'E-mail inválido')
        }

        return Alert.alert('Entrar', 'Não foi possível acessar')
      })
  }

  return (
    <Container>
      <LogoSvg />
      <InputWrapper>
        <SignInInput
          title="Nome"
          placeholder="Digite seu nome"
          onChangeText={setName}
          value={name}
        />
        <SignInInput
          title="E-mail"
          placeholder="Digite seu E-mail"
          onChangeText={setEmail}
          value={email}
        />
        <SignInInput
          title="Senha"
          placeholder="Digite sua senha"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
          autoCapitalize="none"
        />
        <SignInInput
          title="Confirmar senha"
          placeholder="Confirme sua senha"
          secureTextEntry={true}
          onChangeText={setConfirmePassword}
          value={confirmePassword}
          autoCapitalize="none"
        />
        <Button
          title="Cadastrar"
          variant="submit"
          onPress={handleHome}
          isLoading={loading}
          enabled={!loading}
        />
      </InputWrapper>
    </Container>
  )
}
