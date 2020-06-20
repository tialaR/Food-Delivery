import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const FoodImageContainer = styled.View`
  padding-top: 20px;
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
