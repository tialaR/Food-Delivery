import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const CartCardContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CartCardContainerImage = styled.View``;

export const CartCardImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100px;
  height: 100px;
`;

export const CartCardContainerDescriptions = styled.View`
  padding-left: 20px;
  flex: 1;
`;

export const CartCardFoodName = styled.Text`
  font-size: 16px;
  color: ${colors.grayDark};
  padding-bottom: 6px;
`;

export const CartCardFoodAditionalItems = styled.Text`
  font-size: 12px;
  color: ${colors.grayLight};
  padding-bottom: 8px;
`;

export const CartCardFoodQuant = styled.Text`
  font-size: 14px;
  color: ${colors.grayLight};
`;

export const CartCardFoodPrice = styled.Text`
  font-size: 16px;
  color: ${colors.primaryDark};
  font-weight: 500;
`;

export const CartCardContainerTrash = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;
