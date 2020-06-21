import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../styles/colors';
import {
  TotalBuyFoodsBuyButton,
  TotalBuyFoodsBuyButtonTxt,
  TotalBuyFoodsContainer,
  TotalBuyFoodsDescribeContainer,
  TotalBuyFoodsDescribeTxt,
  TotalBuyFoodsDescribeValueTxt,
  TotalBuyFoodsTotalContainer,
  TotalBuyFoodsTotalPrice,
  TotalBuyFoodsTotalPriceContainer,
  TotalBuyFoodsTotalPriceDesc
} from './styles';

const TotalBuyFoods = () => {
  return (
    <TotalBuyFoodsContainer>
      <TotalBuyFoodsDescribeContainer>
        <TotalBuyFoodsDescribeTxt>Subtotal:</TotalBuyFoodsDescribeTxt>
        <TotalBuyFoodsDescribeValueTxt>R$ 100,09</TotalBuyFoodsDescribeValueTxt>
      </TotalBuyFoodsDescribeContainer>
      <TotalBuyFoodsDescribeContainer>
        <TotalBuyFoodsDescribeTxt>Taxa:</TotalBuyFoodsDescribeTxt>
        <TotalBuyFoodsDescribeValueTxt>R$ 13,09</TotalBuyFoodsDescribeValueTxt>
      </TotalBuyFoodsDescribeContainer>
      <TotalBuyFoodsTotalContainer>
        <TotalBuyFoodsTotalPriceContainer>
          <TotalBuyFoodsTotalPriceDesc>Total:</TotalBuyFoodsTotalPriceDesc>
          <TotalBuyFoodsTotalPrice>R$ 112,78</TotalBuyFoodsTotalPrice>
        </TotalBuyFoodsTotalPriceContainer>
        <TotalBuyFoodsBuyButton>
          <Icon name="attach-money" size={24} color={colors.white} />
          <TotalBuyFoodsBuyButtonTxt>Comprar</TotalBuyFoodsBuyButtonTxt>
        </TotalBuyFoodsBuyButton>
      </TotalBuyFoodsTotalContainer>
    </TotalBuyFoodsContainer>
  );
};

export default TotalBuyFoods;
