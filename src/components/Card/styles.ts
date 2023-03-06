import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled(RectButton)`
  width: 100%;

  display: flex;
  flex-direction: row;

  align-items: center;

  padding: 10px;

  border-radius: 5px;

  background-color: ${(props) => props.theme.colors.zinc700};

  margin-bottom: 30px;
`

export const TextWrapper = styled.View`
  margin-left: ${RFValue(10)}px;
`

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${(props) => props.theme.fonts.semiBold};
  color: ${(props) => props.theme.colors.white};
`

export const Description = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.white};
`
