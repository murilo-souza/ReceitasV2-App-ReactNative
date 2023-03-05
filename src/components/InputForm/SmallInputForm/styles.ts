import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  margin-bottom: 30px;
`

export const Error = styled.Text`
  color: ${(props) => props.theme.colors.red600};
  font-size: ${RFValue(14)}px;
  font-family: ${(props) => props.theme.fonts.regular};
  margin: 7px 0;
`
