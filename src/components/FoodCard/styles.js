import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const ContainerFood = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  padding: 20px 20px 26px 20px;
  border-radius: 14px;
  background-color: ${colors.grayLight};
  justify-content: center;
  align-items: center;
`;

export const FoodImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 120px;
  height: 120px;
`;

export const FoodDescriptionsContainer = styled.View`
  padding-top: 14px;
  width: 120px;
`;

export const FoodNameTxt = styled.Text`
  font-size: 16px;
  color: ${colors.black};
`;

export const FoodIngredientsTxt = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 12px;
  color: ${colors.grayMedium};
  padding-top: 4px;
`;

export const FoodPriceTxt = styled.Text`
  font-size: 16px;
  color: ${colors.black};
  padding-top: 8px;
`;
