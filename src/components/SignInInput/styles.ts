import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
`

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.semiBold};

  color: ${(props) => props.theme.colors.white};
  font-size: 14px;

  margin-bottom: 5px;
`

export const SignInInputText = styled.TextInput`
  width: 100%;
  height: 40px;

  border-radius: 5px;

  background-color: ${(props) => props.theme.colors.white};

  padding: 7px;

  margin-bottom: 30px;
`
