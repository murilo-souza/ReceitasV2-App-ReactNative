import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: ${RFValue(40)}px;

  background-color: ${(props) => props.theme.colors.white};

  border-radius: 5px;

  margin-top: 30px;

  margin-bottom: 30px;
`

export const IconContainer = styled.View`
  align-items: center;
  justify-content: center;

  padding: 10px;
`

export const Divider = styled.View`
  width: 2px;
  height: ${RFValue(40)}px;

  background-color: ${(props) => props.theme.colors.zinc400};
`

export const Input = styled.TextInput`
  padding: 10px;
  width: 100%;
`
