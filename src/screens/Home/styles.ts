import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;

  padding: 20px;

  background-color: ${(props) => props.theme.colors.zinc900};
`

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${getStatusBarHeight() + RFValue(10)}px;
`

export const HeaderListWrapper = styled.View`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  margin-top: ${RFValue(16)}px;
`

export const ListTitle = styled.Text`
  color: ${(props) => props.theme.colors.white};

  font-family: ${(props) => props.theme.fonts.semiBold};
  font-size: ${RFValue(16)}px;
`

export const Quantity = styled.Text`
  color: ${(props) => props.theme.colors.white};

  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`

export const FilterWrapper = styled.View`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  margin-top: ${RFValue(10)}px;

  margin-bottom: ${RFValue(40)}px;
`
