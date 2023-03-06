import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const UserContainer = styled(RectButton)`
  display: flex;
  flex-direction: row;

  align-items: center;
`

export const Photo = styled.Image`
  height: ${RFValue(50)}px;
  width: ${RFValue(50)}px;
  border-radius: 10px;

  margin-right: 10px;
`

export const User = styled.View``

export const UserName = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${(props) => props.theme.fonts.regular};

  color: ${(props) => props.theme.colors.slate100};
`

export const UserDescription = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${(props) => props.theme.fonts.regular};

  color: ${(props) => props.theme.colors.slate100};
`
