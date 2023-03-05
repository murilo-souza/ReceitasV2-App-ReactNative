import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

interface ContainerProps {
  isActive: boolean
}

export const Stroke = styled.View<ContainerProps>`
  border: 1px solid ${(props) => props.theme.colors.indigo400};
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.zinc700};

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${(props) => props.theme.colors.indigo400};
    `}
`
export const Container = styled(RectButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: ${RFValue(150)}px;
  height: ${RFValue(50)}px;
  border-radius: 5px;
`

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.white};

  font-size: ${RFValue(14)}px;
  font-family: ${(props) => props.theme.fonts.regular};

  margin-left: 10px;
`
