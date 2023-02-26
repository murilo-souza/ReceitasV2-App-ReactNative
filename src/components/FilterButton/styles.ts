import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  display: flex;
  flex-direction: row;

  align-items: center;
`

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.slate100};

  font-size: ${RFValue(14)}px;

  margin-left: ${RFValue(5)}px;
`
