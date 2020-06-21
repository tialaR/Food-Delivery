import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

const { width } = Dimensions.get('window');

export const TotalBuyFoodsContainer = styled.View`
  width: ${width}px;
  padding: 26px 32px 0 32px;
  border-top-left-radius: 50px;
  background-color: ${colors.grayMediumOpaque};
`;

export const TotalBuyFoodsDescribeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;

export const TotalBuyFoodsDescribeTxt = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.grayDark};
`;

export const TotalBuyFoodsDescribeValueTxt = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.grayMedium};
`;

export const TotalBuyFoodsTotalContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

export const TotalBuyFoodsTotalPriceContainer = styled.View`
  width: 120px;
`;

export const TotalBuyFoodsTotalPriceDesc = styled.Text`
  padding-bottom: 4px;
  font-size: 14px;
  color: ${colors.grayLight};
`;

export const TotalBuyFoodsTotalPrice = styled.Text`
  padding-bottom: 8px;
  font-size: 24px;
  font-weight: 700;
  color: ${colors.primaryDark};
`;

export const TotalBuyFoodsBuyButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${colors.black};
  box-shadow: 0px 5px 10px ${colors.shadow};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 50px;
  border-radius: 14px;
  flex: 1;
  margin-left: 10px;
`;

export const TotalBuyFoodsBuyButtonTxt = styled.Text`
  font-size: 14px;
  padding-left: 10px;
  color: ${colors.white};
`;
