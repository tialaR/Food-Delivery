import React from 'react';
import { FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../styles/colors';
import {
  CartCardContainer,
  CartCardContainerDescriptions,
  CartCardContainerImage,
  CartCardContainerTrash,
  CartCardFoodName,
  CartCardFoodPrice,
  CartCardFoodQuant,
  CartCardImage
} from './styles';

const Cart = () => {
  function renderCartFood({ item }) {
    return (
      <CartCardContainer>
        <CartCardContainerImage>
          <CartCardImage
            source={{
              uri:
                'https://alcapizza.com.br/wp-content/uploads/2018/02/Atum.png',
            }}
          />
        </CartCardContainerImage>
        <CartCardContainerDescriptions>
          <CartCardFoodName>Pizza de Mussarela</CartCardFoodName>
          <CartCardFoodQuant>2x</CartCardFoodQuant>
          <CartCardFoodPrice>R$ 5,80</CartCardFoodPrice>
        </CartCardContainerDescriptions>
        <CartCardContainerTrash>
          <Icon name="remove-shopping-cart" size={26} color={colors.black} />
        </CartCardContainerTrash>
      </CartCardContainer>
    );
  }

  return (
    <FlatList
      contentContainerStyle={{
        paddingHorizontal: 32,
        paddingTop: 14,
        backgronundColor: colors.background,
      }}
      showsVerticalScrollIndicator={false}
      data={[0, 1, 2]}
      renderItem={renderCartFood}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
    />
  );
};

export default Cart;
