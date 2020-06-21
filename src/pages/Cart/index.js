import React from 'react';
import { FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TotalBuyFoods from '../../components/TotalBuyFoods';
import { colors } from '../../styles/colors';
import {
  CartCardContainer,
  CartCardContainerDescriptions,
  CartCardContainerImage,
  CartCardContainerTrash,
  CartCardFoodAditionalItems,
  CartCardFoodName,
  CartCardFoodPrice,
  CartCardImage,
  Container
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
  }

  return (
    <Container>
      <FlatList
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 32,
          paddingVertical: 20,
          backgronundColor: colors.background,
        }}
        showsVerticalScrollIndicator={false}
        data={[0, 1, 2, 3, 4]}
        renderItem={renderCartFood}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
      <TotalBuyFoods />
    </Container>
  );
};

export default Cart;
