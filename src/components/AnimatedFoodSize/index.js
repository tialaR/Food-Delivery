import React, { memo, useEffect, useState } from 'react';
import { Animated, Easing } from 'react-native';
import { sizes } from '../../utils/mocks';
import {
  Container,
  FoodImageContainer,
  StyledAnimatedFoodImage
} from './styles';

const AnimatedFoodSize = ({ image, selectedFoodSize }) => {
  const [animateExpand, setAnimateExpand] = useState(0);

  const rotateFood = new Animated.Value(0);
  const expandSizeFood = new Animated.Value(0.8);

  //Animação de rotação
  function animateRotateFood() {
    Animated.timing(rotateFood, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }

  //Animação de expansão
  function animatedExpandSizeFood(size) {
    Animated.spring(expandSizeFood, {
      toValue: size,
      friction: 8,
      useNativeDriver: true,
    }).start();
  }

  //Animação rotação e expansão
  useEffect(() => {
    animateRotateFood();
    if (selectedFoodSize === sizes[0].key) {
      animatedExpandSizeFood(0.9);
    } else if (selectedFoodSize === sizes[1].key) {
      animatedExpandSizeFood(1);
    } else {
      animatedExpandSizeFood(1.1);
    }
  }, [animateExpand]);

  //Dispara o preço e tamanho da comida
  useEffect(() => {
    if (selectedFoodSize === sizes[0].key) {
      setAnimateExpand(0);
    } else if (selectedFoodSize === sizes[1].key) {
      setAnimateExpand(1);
    } else {
      setAnimateExpand(2);
    }
  }, [selectedFoodSize]);

  //Rotação
  const rotate = rotateFood.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  //Expansão
  const expand = expandSizeFood.interpolate({
    inputRange: [0, 1],
    outputRange: [260, 400],
  });

  return (
    <Container>
      <FoodImageContainer>
        <StyledAnimatedFoodImage
          source={{ uri: image }}
          style={{
            transform: [{ rotate: rotate }, { scale: expandSizeFood }],
          }}
        />
      </FoodImageContainer>
    </Container>
  );
};

export default memo(AnimatedFoodSize);
