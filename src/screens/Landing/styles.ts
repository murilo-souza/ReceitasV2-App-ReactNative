import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.zinc900};
  padding: 30px;
`

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(32)}px;

  color: ${(props) => props.theme.colors.slate100};

  text-align: center;

  margin-bottom: 24px;
`

export const Description = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(12)}px;

  color: ${(props) => props.theme.colors.slate100};

  text-align: center;

  margin-bottom: 24px;
`

export const AccessText = styled.Text`
  font-family: ${(props) => props.theme.fonts.semiBold};
  font-size: ${RFValue(13)}px;

  color: ${(props) => props.theme.colors.slate100};

  text-align: center;

  margin-bottom: 45px;
`
