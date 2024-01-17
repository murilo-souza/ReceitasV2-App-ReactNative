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
  width: 70%;
  height: ${RFValue(35)}px;

  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.indigo400};

  background-color: ${(props) => props.theme.colors.zinc700};
  color: ${(props) => props.theme.colors.slate100};

  padding: 10px;
`

export const ButtonAdd = styled.TouchableOpacity`
  width: ${RFValue(80)}px;
  height: ${RFValue(35)}px;

  background-color: ${theme.colors.indigo600};

  align-items: center;
  justify-content: center;

  border-radius: 5px;

  margin-left: 10px;
`

export const TitleButtonAdd = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${(props) => props.theme.colors.white};
`

export const InputWrapper = styled.View`
  display: flex;
  flex-direction: row;

  justify-content: center;
`
