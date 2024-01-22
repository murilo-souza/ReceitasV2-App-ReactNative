import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${getStatusBarHeight() + RFValue(5)}px;

  padding-bottom: 10px;
`

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.white};

  font-size: ${RFValue(14)}px;
  font-family: ${(props) => props.theme.fonts.semiBold};
`
