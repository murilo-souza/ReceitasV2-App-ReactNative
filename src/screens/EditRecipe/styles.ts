import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  background-color: ${(props) => props.theme.colors.zinc900};

  padding: 20px 20px 0 20px;
`

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`

export const TypeButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`
