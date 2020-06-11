import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CategoryTitle = styled.Text`
  font-size: 28px;
  color: ${colors.black};
`;

export const FoodName = styled.Text`
  font-size: 14px;
  color: ${colors.grayMedium};
  padding-top: 6px;
`;
