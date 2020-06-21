import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../styles/colors';
import {
  CartCardContainer,
  CartCardContainerDescriptions,
  CartCardContainerImage,
  CartCardContainerTrash,
  CartCardFoodAditionalItems,
  CartCardFoodName,
  CartCardFoodPrice,
  CartCardImage
} from './styles';

const CartFoodCard = () => {
  return (
    <CartCardContainer>
      <CartCardContainerImage>
        <CartCardImage
          source={{
            uri: 'https://alcapizza.com.br/wp-content/uploads/2018/02/Atum.png',
          }}
        />
      </CartCardContainerImage>
      <CartCardContainerDescriptions>
        <CartCardFoodName>Pizza de Atum</CartCardFoodName>
        <CartCardFoodAditionalItems>
          Gorgonzola, presunto, mussarela e shitak
        </CartCardFoodAditionalItems>
        {/* <CartCardFoodQuant>2x</CartCardFoodQuant> */}
        <CartCardFoodPrice>R$ 40,80</CartCardFoodPrice>
      </CartCardContainerDescriptions>
      <CartCardContainerTrash>
        <Icon name="remove-shopping-cart" size={26} color={colors.black} />
      </CartCardContainerTrash>
    </CartCardContainer>
  );
};

export default CartFoodCard;
