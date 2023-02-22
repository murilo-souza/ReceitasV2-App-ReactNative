import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.zinc900};
  padding: 30px;
`

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 32px;

  color: ${(props) => props.theme.colors.slate100};

  text-align: center;

  margin-bottom: 24px;
`

export const Description = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 13px;

  color: ${(props) => props.theme.colors.slate100};

  text-align: center;

  margin-bottom: 24px;
`

export const AccessText = styled.Text`
  font-family: ${(props) => props.theme.fonts.semiBold};
  font-size: 13px;

  color: ${(props) => props.theme.colors.slate100};

  text-align: center;

  margin-bottom: 45px;
`
