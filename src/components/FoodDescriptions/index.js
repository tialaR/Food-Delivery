import React from 'react';
import { formatArrayOfStrings } from '../../utils/resources';
import { CategoryTitle, Container, FoodIngredients, FoodName } from './styles';

const FoodDescriptions = ({ category, type, ingredients }) => {
  return (
    <Container>
      <CategoryTitle>{category}</CategoryTitle>
      <FoodName>Pizza - {type}</FoodName>
      <FoodIngredients>{formatArrayOfStrings(ingredients)}</FoodIngredients>
    </Container>
  );
};

export default FoodDescriptions;
