import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

interface TypeProps {
  isActive: boolean
}

export const Stroke = styled.View<TypeProps>`
  ${({ isActive }) =>
    isActive &&
    css`
      border: 1px solid ${(props) => props.theme.colors.indigo400};
      border-radius: 5px;
    `}
`

export const Container = styled.TouchableOpacity<TypeProps>`
  display: flex;
  flex-direction: row;
  width: ${RFValue(140)}px;

  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.zinc700};

  padding: 5px;

  border-radius: 5px;
`

export const Title = styled.Text<TypeProps>`
  ${({ isActive }) =>
    isActive &&
    css`
      color: ${(props) => props.theme.colors.indigo400};
    `}

  ${({ isActive }) =>
    !isActive &&
    css`
      color: ${(props) => props.theme.colors.slate100};
    `}

  font-size: ${RFValue(14)}px;

  margin-left: ${RFValue(5)}px;
`
