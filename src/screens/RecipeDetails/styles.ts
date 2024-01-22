import styled from 'styled-components/native'
import { theme } from '../../styles/theme'
import { RFValue } from 'react-native-responsive-fontsize'

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

  background-color: ${theme.colors.indigo600};

  margin-bottom: 10px;

  border-radius: 5px;

  padding: 10px;
`

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${theme.fonts.regular};

  color: ${theme.colors.slate100};
`
