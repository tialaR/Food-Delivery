import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const PriceContainer = styled.View`
  padding-left: 32px;
`;

export const PriceTitleTxt = styled.Text`
  font-size: 12px;
  color: ${colors.grayMedium};
`;

export const PriceValueTxt = styled.Text`
  font-size: 24px;
  color: ${colors.black};
  padding-top: 8px;
`;
