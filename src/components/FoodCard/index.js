import React from 'react';
import { ContainerFood, FoodDescriptionsContainer, FoodImage, FoodIngredientsTxt, FoodNameTxt, FoodPriceTxt } from './styles';

const FoodCard = ({
  onPress,
  foodName,
  foodIngredients,
  foodMinPrice,
  foodImage,
}) => {
  return (
    <ContainerFood onPress={onPress}>
      <FoodImage source={{ uri: foodImage }} />
      <FoodDescriptionsContainer>
        <FoodNameTxt>{foodName}</FoodNameTxt>
        <FoodIngredientsTxt>{foodIngredients.join(', ')}</FoodIngredientsTxt>
        <FoodPriceTxt>{foodMinPrice}</FoodPriceTxt>
      </FoodDescriptionsContainer>
    </ContainerFood>
  );
};

export default FoodCard;
