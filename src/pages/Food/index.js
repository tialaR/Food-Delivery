import React, { useEffect } from 'react';
import AddButton from '../../components/AddButton';
import AditionalFoodsList from '../../components/AditionalFoodsList';
import CartButton from '../../components/CartButton';
import CategoryTypeFood from '../../components/CategoryTypeFood';
import FoodSize from '../../components/FoodSizes';
import { CartAndPriceContainer, ContainerScroll } from './styles';

const Food = ({ route }) => {
  const { food } = route.params;

  useEffect(() => {
    console.warn(food);
  }, []);

  return (
    <ContainerScroll
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 40,
        paddingTop: 30,
      }}>
      <CategoryTypeFood category={food.category} type={food.name} />
      <FoodSize prices={food.prices} image={food.image} />
      <AditionalFoodsList />
      <CartAndPriceContainer>
        <AddButton />
        <CartButton onCartPress={() => {}} />
      </CartAndPriceContainer>
    </ContainerScroll>
  );
};

export default Food;
