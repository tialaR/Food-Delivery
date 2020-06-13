import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CategoryTitle = styled.Text`
  font-size: 28px;
  text-align: center;
  padding: 0 32px;
  color: ${colors.black};
`;

export const FoodName = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${colors.grayMedium};
  padding: 12px 32px 0 32px;
`;

export const FoodIngredients = styled.Text`
  font-size: 12px;
  text-align: center;
  color: ${colors.grayLight};
  padding: 6px 32px 0 32px;
`;
