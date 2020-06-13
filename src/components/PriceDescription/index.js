import React from 'react';
import { numberToReal } from '../../utils/resources';
import { PriceContainer, PriceTitleTxt, PriceValueTxt } from './styles';

const PriceDescription = ({ price }) => {
  return (
    <PriceContainer>
      <PriceTitleTxt>Valor</PriceTitleTxt>
      <PriceValueTxt>{numberToReal(price)}</PriceValueTxt>
    </PriceContainer>
  );
};

export default PriceDescription;
