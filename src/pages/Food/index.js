import React, { useEffect, useState } from 'react';
import AddButton from '../../components/AddButton';
import AditionalFoodsList from '../../components/AditionalFoodsList';
import AnimatedFoodSize from '../../components/AnimatedFoodSize';
import CartButton from '../../components/CartButton';
import FoodDescriptions from '../../components/FoodDescriptions';
import PriceDescription from '../../components/PriceDescription';
import SizeButtonsRadio from '../../components/SizeButtonsRadio';
import { sizes } from '../../utils/mocks';
import { CartAndPriceContainer, ContainerScroll } from './styles';

const Food = ({ route }) => {
  const { food } = route.params;

  const [selectedSizeFood, setSelectedSizeFood] = useState(sizes[0].key);
  const [quantFood, setQuantFood] = useState(1);
  const [foodPrice, setFoodPrice] = useState(0);
  const [aditionalItems, setAditionalItems] = useState([]);
  const [add, setAdd] = useState(true);
  const [aditionalFoodsPrice, setAditionalFoodsPrice] = useState(0);

  //Diminue ou aumenta o preço da comida
  function addOrDecrease(price) {
    if (add) {
      quantFood <= 50 && setFoodPrice(price * quantFood);
    } else {
      quantFood >= 1 && setFoodPrice(foodPrice - price);
    }
  }

  //Muda o preço da comida
  useEffect(() => {
    if (selectedSizeFood === sizes[0].key) {
      addOrDecrease(food.prices.price_small);
    } else if (selectedSizeFood === sizes[1].key) {
      addOrDecrease(food.prices.price_medium);
    } else {
      addOrDecrease(food.prices.price_large);
    }
  }, [selectedSizeFood, quantFood]);

  //Soma o preço dos itens adicionais
  useEffect(() => {
    let totalAditionalPrice = 0;
    for (let x = 0; x < aditionalItems.length; x++) {
      totalAditionalPrice = totalAditionalPrice + aditionalItems[x].price;
    }
    setAditionalFoodsPrice(totalAditionalPrice);
  }, [aditionalItems]);

  return (
    <ContainerScroll
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 40,
        paddingTop: 30,
      }}>
      <FoodDescriptions
        category={food.category}
        type={food.name}
        ingredients={food.ingredients}
      />
      <AnimatedFoodSize
        selectedFoodSize={selectedSizeFood}
        image={food.image}
      />
      <PriceDescription price={foodPrice + aditionalFoodsPrice} />
      <SizeButtonsRadio
        onChangeSize={(sizeFood) => {
          setSelectedSizeFood(sizeFood);
          setAdd(true);
        }}
      />
      {food.category !== 'Doce' && (
        <AditionalFoodsList
          onPressAditionalFood={(selectedItems) =>
            setAditionalItems(selectedItems)
          }
        />
      )}
      <CartAndPriceContainer>
        <AddButton
          onDecreasePress={(addDecrease) => {
            setQuantFood(addDecrease);
            setAdd(false);
          }}
          onAddPress={(addDecrease) => {
            setQuantFood(addDecrease);
            setAdd(true);
          }}
        />
        <CartButton
          onCartPress={() => console.log(foodPrice + aditionalFoodsPrice)}
        />
      </CartAndPriceContainer>
    </ContainerScroll>
  );
};

export default Food;
