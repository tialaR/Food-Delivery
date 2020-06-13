import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const Container = styled.View`
  margin-left: 10px;
  align-items: center;
  justify-content: center;
`;

export const AditionnalFoodContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  background-color: ${(props) =>
    props.selected ? colors.primaryOpaque : colors.white};
  border: ${(props) =>
    props.selected
      ? `2px solid ${colors.primary}`
      : `2px solid ${colors.white}`};
  padding: 8px 14px;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const AditionnalFoodPriceContainer = styled.View`
  position: absolute;
  left: 6;
  top: 4;
`;

export const AditionalFoodPrice = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: ${colors.primaryDark};
`;

export const FoodImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 60px;
  height: 60px;
  margin-top: 16px;
`;

export const AditionnalFoodTxt = styled.Text`
  font-size: 14px;
  color: ${colors.grayMedium};
  padding-top: 6px;
`;
