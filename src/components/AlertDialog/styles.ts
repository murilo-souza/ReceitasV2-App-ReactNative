import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { theme } from '../../styles/theme'

export const ConteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`

export const DeleteAlert = styled.View`
  width: 85%;
  height: ${RFValue(150)}px;

  border-radius: 10px;

  background-color: ${theme.colors.zinc600};

  padding: 20px;

  border: 1px solid ${theme.colors.red600};
`

export const AlertText = styled.Text`
  font-family: ${theme.fonts.semiBold};
  font-size: ${RFValue(16)}px;

  color: ${theme.colors.slate100};
`

export const AlertDescription = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${theme.colors.slate100};
`

export const ActionWrapper = styled.View`
  margin-top: 20px;

  align-items: center;
  justify-content: flex-end;

  flex-direction: row;
`

export const NotStayButton = styled.TouchableOpacity`
  background-color: ${theme.colors.red600};

  align-items: center;
  justify-content: center;

  height: 30px;
  width: 80px;

  border-radius: 5px;
`

export const NotStayText = styled.Text`
  font-family: ${theme.fonts.regular};

  color: ${theme.colors.slate100};
`

export const StayButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  height: 30px;
  width: 80px;

  border-radius: 5px;

  margin-right: 10px;

  background-color: ${theme.colors.slate100};
`
export const StayText = styled.Text`
  font-family: ${theme.fonts.regular};

  color: ${theme.colors.zinc800};
`
