import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
interface ButtonProps {
  variant: 'submit' | 'delete' | 'edit'
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  height: ${RFValue(50)}px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;

  margin-bottom: 31px;

  ${({ variant }) =>
    variant === 'submit' &&
    css`
      background-color: ${(props) => props.theme.colors.indigo600};
      opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    `}

  ${({ variant }) =>
    variant === 'delete' &&
    css`
      background-color: ${(props) => props.theme.colors.red600};
      opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    `}

  ${({ variant }) =>
    variant === 'edit' &&
    css`
      background-color: ${(props) => props.theme.colors.white};
      opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    `}
`

export const Title = styled.Text<ButtonProps>`
  font-family: ${(props) => props.theme.fonts.semiBold};

  ${({ variant }) =>
    variant === 'edit' &&
    css`
      color: ${(props) => props.theme.colors.zinc800};
    `}

  ${({ variant }) =>
    variant === 'submit' &&
    css`
      color: ${(props) => props.theme.colors.white};
    `}

  ${({ variant }) =>
    variant === 'delete' &&
    css`
      color: ${(props) => props.theme.colors.white};
    `}

  font-size: ${RFValue(16)}px;
`
