import React from 'react';
import { FlatList, View } from 'react-native';
import CartFoodCard from '../../components/CartFoodCard';
import TotalBuyFoods from '../../components/TotalBuyFoods';
import { colors } from '../../styles/colors';
import { Container } from './styles';

const Cart = () => {
  function renderCartFood({ item }) {
    return <CartFoodCard />;
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
