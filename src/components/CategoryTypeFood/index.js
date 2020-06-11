import React from 'react';
import { CategoryTitle, Container, FoodName } from './styles';

const CategoryTypeFood = ({ category, type }) => {
  return (
    <Container>
      <CategoryTitle>{category}</CategoryTitle>
      <FoodName>Pizza de {type}</FoodName>
    </Container>
  );
};

export default CategoryTypeFood;
