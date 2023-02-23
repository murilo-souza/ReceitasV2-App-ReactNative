import { RectButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'

interface ButtonProps {
  variant: 'submit' | 'delete' | 'edit'
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;

  ${({ variant }) =>
    variant === 'submit' &&
    css`
      background-color: ${(props) => props.theme.colors.indigo600};
    `}

  ${({ variant }) =>
    variant === 'delete' &&
    css`
      background-color: ${(props) => props.theme.colors.red600};
    `}

  ${({ variant }) =>
    variant === 'edit' &&
    css`
      background-color: ${(props) => props.theme.colors.white};
    `}
`

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.semiBold};

  color: ${(props) => props.theme.colors.white};

  font-size: 16px;
`
