import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled(RectButton)`
  width: 100%;
  height: ${RFValue(50)}px;

  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 5px;
  border: 1px solid #94a3b8;

  background-color: ${(props) => props.theme.colors.white};
  padding: 0 15px;

  margin-bottom: 30px;
`

export const Divider = styled.View`
  width: 1px;
  height: ${RFValue(50)}px;
  background-color: #94a3b8;
  margin: 0 10px;
`

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.zinc800};

  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(15)}px;
`
