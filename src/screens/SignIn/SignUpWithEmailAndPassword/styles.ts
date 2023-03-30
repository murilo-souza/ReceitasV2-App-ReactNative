import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  display: flex;

  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.zinc900};
  padding: 20px;
`

export const Scroll = styled.ScrollView`
  flex: 1;
  width: 100%;
`

export const InputWrapper = styled.View`
  width: 100%;
  margin-top: 30px;
`

export const LogoContainer = styled.View`
  margin-top: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
`
