import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../styles/colors';
import { HeaderCartButtonContainer } from './styles';

const HeaderCartButton = ({ onCartPress }) => {
  return (
    <HeaderCartButtonContainer onPress={onCartPress}>
      <Icon name="shopping-cart" size={24} color={colors.black} />
    </HeaderCartButtonContainer>
  );
};

export default HeaderCartButton;
