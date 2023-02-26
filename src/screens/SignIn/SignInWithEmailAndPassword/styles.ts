import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  display: flex;

  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.zinc900};
  padding: 20px;
`

export const InputWrapper = styled.View`
  width: 100%;
  margin-top: 57px;
`

export const Footer = styled.View`
  display: flex;
  flex-direction: row;

  justify-content: center;

  margin-top: 30px;
`

export const TextHighlight = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.white};

  margin-right: 4px;
`

export const CreateAccountButtonTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${(props) => props.theme.colors.indigo400};
`
