import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;

  padding: 20px;

  background-color: ${(props) => props.theme.colors.zinc700};

  border: 1px solid ${(props) => props.theme.colors.indigo400};
  border-radius: 5px;

  margin-top: 35px;
`

export const Header = styled.View`
  display: flex;
  flex-direction: row;

  align-items: center;
  margin-bottom: 10px;
`

export const Title = styled.Text`
  text-transform: uppercase;

  color: ${(props) => props.theme.colors.white};

  font-size: ${RFValue(15)}px;
  font-family: ${(props) => props.theme.fonts.regular};

  margin-left: 10px;
`

export const Content = styled.Text`
  color: ${(props) => props.theme.colors.white};

  font-size: ${RFValue(14)}px;
  font-family: ${(props) => props.theme.fonts.regular};

  line-height: 25px;
`
