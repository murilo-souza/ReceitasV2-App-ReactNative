import styled from 'styled-components/native'
import { theme } from '../../styles/theme'
import { RFValue } from 'react-native-responsive-fontsize'
import { BorderlessButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(40)}px;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  background-color: ${theme.colors.indigo600};

  margin-bottom: 20px;

  border-radius: 5px;

  padding: 10px;
`
export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${theme.fonts.regular};

  color: ${theme.colors.slate100};
`

export const DeleteButton = styled(BorderlessButton)`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;

  align-items: center;
  justify-content: center;
`
