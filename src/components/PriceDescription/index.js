import React from 'react';
import { PriceContainer, PriceTitleTxt, PriceValueTxt } from './styles';

const PriceDescription = ({ price }) => {
  return (
    <PriceContainer>
      <PriceTitleTxt>Valor</PriceTitleTxt>
      <PriceValueTxt>${price}</PriceValueTxt>
    </PriceContainer>
  );
};

export default PriceDescription;
