import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../styles/colors';
import { CardButtonTxt, CartButtonContainer } from './styles';

const CartButton = ({ onCartPress }) => {
  return (
    <CartButtonContainer onPress={onCartPress}>
      <CardButtonTxt>Adicionar</CardButtonTxt>
      <Icon name="shopping-cart" size={24} color={colors.white} />
    </CartButtonContainer>
  );
};

export default CartButton;
