import React from 'react';
import { formatArrayOfStrings, numberToReal } from '../../utils/resources';
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
        <FoodIngredientsTxt>
          {formatArrayOfStrings(foodIngredients)}
        </FoodIngredientsTxt>
        <FoodPriceTxt>{numberToReal(foodMinPrice)}</FoodPriceTxt>
      </FoodDescriptionsContainer>
    </ContainerFood>
  );
};

export default FoodCard;
