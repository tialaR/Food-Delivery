import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const SizesButtonsRadioGroup = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: 20px;
`;

export const SizeButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  margin-left: ${(props) => (props.midle ? 12 : 0)}px;
  margin-right: ${(props) => (props.midle ? 12 : 0)}px;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 50px;
  border-radius: 24px;
  background-color: ${(props) =>
    props.selectedSize ? colors.primary : colors.grayMediumOpaque};
`;

export const SizeButtonTxt = styled.Text`
  font-size: 16px;
  color: ${(props) =>
    props.selectedSize ? colors.grayDark : colors.grayLight};
  font-weight: ${(props) => (props.selectedSize ? '600' : '500')};
`;
