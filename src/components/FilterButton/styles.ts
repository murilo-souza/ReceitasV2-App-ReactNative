import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

interface TypeProps {
  isActive: boolean
}

export const Container = styled.View<TypeProps>`
  display: flex;
  flex-direction: row;
  width: 47%;

  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.zinc700};

  padding: 5px;

  border-radius: 5px;

  ${({ isActive }) =>
    isActive &&
    css`
      border: 1px solid ${(props) => props.theme.colors.indigo400};
    `}
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
