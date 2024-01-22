import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  background-color: ${(props) => props.theme.colors.zinc900};

  padding: 20px 20px 0 20px;
`

export const Title = styled.Text`
  margin-top: 10px;
  font-family: ${(props) => props.theme.fonts.semiBold};

  color: ${(props) => props.theme.colors.white};
  font-size: ${RFValue(16)}px;

  margin-bottom: 10px;
`

export const CardContainer = styled.View`
  flex: 1;

  background-color: ${(props) => props.theme.colors.zinc800};
  border: 2px solid ${(props) => props.theme.colors.indigo600};

  border-radius: 5px;

  margin-bottom: 10px;

  padding: 20px 20px 5px 20px;
`
