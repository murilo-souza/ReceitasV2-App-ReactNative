import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  background-color: ${(props) => props.theme.colors.zinc900};

  padding: 20px 20px 0 20px;
`

export const Wrapper = styled.View`
  display: flex;
  align-items: center;

  margin-top: 95px;
`

export const PhotoWrapper = styled.View`
  width: ${RFValue(175)}px;
  height: ${RFValue(175)}px;
  border-radius: 999px;

  background-color: ${(props) => props.theme.colors.indigo400};

  margin-bottom: 20px;
`

export const PhotoUser = styled.Image`
  border-radius: 999px;
  width: ${RFValue(175)}px;
  height: ${RFValue(175)}px;
`
