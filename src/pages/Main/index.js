import React from 'react';
import AddButton from '../../components/AddButton';
import AditionalFoodsList from '../../components/AditionalFoodsList';
import CartButton from '../../components/CartButton';
import CategoryTypeFood from '../../components/CategoryTypeFood';
import FoodSize from '../../components/FoodSizes';
import { CartAndPriceContainer, ContainerScroll } from './styles';

const Main = () => {
  return (
    <ContainerScroll
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 40,
      }}>
      <CategoryTypeFood category="Clássica" type="Marguerita" />
      <FoodSize />
      <AditionalFoodsList />
      <CartAndPriceContainer>
        <AddButton />
        <CartButton onCartPress={() => {}} />
      </CartAndPriceContainer>
    </ContainerScroll>
  );
};

export default Main;
