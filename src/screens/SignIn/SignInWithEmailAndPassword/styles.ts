import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  display: flex;

  justify-content: center;

  background-color: ${(props) => props.theme.colors.zinc900};
  padding: 20px;
`
