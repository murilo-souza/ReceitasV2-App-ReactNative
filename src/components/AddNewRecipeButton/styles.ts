import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  height: ${RFValue(50)}px;
  width: ${RFValue(50)}px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background-color: ${(props) => props.theme.colors.indigo600};
`
