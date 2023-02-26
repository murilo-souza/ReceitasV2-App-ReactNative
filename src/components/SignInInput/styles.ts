import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  width: 100%;
`

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.semiBold};

  color: ${(props) => props.theme.colors.white};
  font-size: ${RFValue(14)}px;

  margin-bottom: 5px;
`

export const SignInInputText = styled.TextInput`
  width: 100%;
  height: ${RFValue(40)}px;

  border-radius: 5px;

  background-color: ${(props) => props.theme.colors.white};

  padding: 10px;

  margin-bottom: 30px;
`
