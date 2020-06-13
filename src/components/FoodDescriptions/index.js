import React from 'react';
import { CategoryTitle, Container, FoodIngredients, FoodName } from './styles';

const FoodDescriptions = ({ category, type, ingredients }) => {
  return (
    <Container>
      <CategoryTitle>{category}</CategoryTitle>
      <FoodName>Pizza de {type}</FoodName>
      <FoodIngredients>{ingredients.join(', ')}</FoodIngredients>
    </Container>
  );
};

export default FoodDescriptions;
