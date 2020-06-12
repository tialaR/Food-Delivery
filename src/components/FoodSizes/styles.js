import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const Container = styled.View``;

export const FoodImageContainer = styled.View`
  padding-top: 40px;
  align-items: center;
  justify-content: center;
`;

const FoodImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 260px;
  height: 260px;
`;
export const StyledAnimatedFoodImage = Animated.createAnimatedComponent(
  FoodImage,
);

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
    props.selectedSize ? colors.primary : colors.grayLight};
`;

export const SizeButtonTxt = styled.Text`
  font-size: 16px;
  color: ${(props) => (props.selectedSize ? colors.black : colors.grayMedium)};
  font-weight: ${(props) => (props.selectedSize ? '600' : '500')};
`;
