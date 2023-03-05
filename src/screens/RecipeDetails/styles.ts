import styled from 'styled-components/native'

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
