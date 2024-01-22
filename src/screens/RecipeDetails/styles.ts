import styled, { css } from 'styled-components/native'
import { theme } from '../../styles/theme'
import { RFValue } from 'react-native-responsive-fontsize'

interface IsChecked {
  checked: boolean
}

export const Container = styled.View`
  flex: 1;

  padding: 20px 20px 0 20px;
  background-color: ${(props) => props.theme.colors.zinc900};
`

export const RecipeScroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``

export const DetailsWrapper = styled.View`
  margin-bottom: 31px;
`

export const ListOptions = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;

  align-items: center;

  border-radius: 5px;

  padding: 10px;
`

export const Title = styled.Text<IsChecked>`
  font-size: ${RFValue(14)}px;
  font-family: ${theme.fonts.regular};

  margin-left: 10px;

  ${({ checked }) =>
    checked === true &&
    css`
      text-decoration: line-through;
      color: ${theme.colors.zinc400};
    `}

  ${({ checked }) =>
    checked === false &&
    css`
      color: ${theme.colors.slate100};
    `}
`
