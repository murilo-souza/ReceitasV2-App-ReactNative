import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;

  background-color: ${(props) => props.theme.colors.zinc900};

  padding: 20px;
`

export const Form = styled.View`
  margin-top: 20px;

  margin-bottom: 40px;
`

export const TypeButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`
