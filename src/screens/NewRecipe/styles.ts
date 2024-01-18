import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { theme } from '../../styles/theme'
import { BorderlessButton } from 'react-native-gesture-handler'

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

export const Card = styled.View`
  width: 100%;
  min-height: ${RFValue(40)}px;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  background-color: ${theme.colors.indigo600};

  margin-bottom: 20px;

  border-radius: 5px;

  padding: 10px;
`
export const Title = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${theme.fonts.regular};

  color: ${theme.colors.slate100};

  max-width: 90%;
`

export const DeleteButton = styled(BorderlessButton)`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;

  align-items: center;
  justify-content: center;
`

export const ListContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  max-height: ${RFValue(180)}px;

  padding: 0 10px;
`

export const ListContainerSecond = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  max-height: ${RFValue(180)}px;

  padding: 0 10px;
`
