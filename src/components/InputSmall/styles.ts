import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { theme } from '../../styles/theme'

export const Container = styled.View`
  width: 100%;
`

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.semiBold};

  color: ${(props) => props.theme.colors.white};
  font-size: ${RFValue(14)}px;

  margin-bottom: 5px;
`

export const RecipeInputText = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.zinc400,
})`
  width: 100%;
  height: ${RFValue(40)}px;

  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.indigo400};

  background-color: ${(props) => props.theme.colors.zinc700};
  color: ${(props) => props.theme.colors.slate100};

  padding: 10px;

  margin-bottom: 30px;
`
