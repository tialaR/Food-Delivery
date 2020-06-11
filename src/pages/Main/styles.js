import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const ContainerScroll = styled.ScrollView`
  flex-grow: 1;
  background-color: ${colors.background};
`;

export const CartAndPriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 32px 0 32px;
`;
