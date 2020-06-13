import React, { useEffect, useState } from 'react';
import { Animated, Easing } from 'react-native';
import { sizes } from '../../utils/mocks';
import PriceDescription from '../PriceDescription';
import { Container, FoodImageContainer, SizeButton, SizeButtonTxt, SizesButtonsRadioGroup, StyledAnimatedFoodImage } from './styles';

const FoodSizes = ({ prices, image }) => {
  const [selectedButton, setSelectedButton] = useState(sizes[0].key);
  const [foodPrices, setFoodPrices] = useState(prices.price_small);

  const rotateFood = new Animated.Value(0);
  const expandSizeFood = new Animated.Value(0.8);

  function animateRotateFood() {
    Animated.timing(rotateFood, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }

  function animatedExpandSizeFood(size) {
    Animated.spring(expandSizeFood, {
      toValue: size,
      friction: 8,
      useNativeDriver: true,
    }).start();
  }

  useEffect(() => {
    animateRotateFood();
    if (selectedButton === sizes[0].key) {
      animatedExpandSizeFood(0.9);
    } else if (selectedButton === sizes[1].key) {
      animatedExpandSizeFood(1);
    } else {
      animatedExpandSizeFood(1.1);
    }
  }, [foodPrices]);

  useEffect(() => {
    if (selectedButton === sizes[0].key) {
      setFoodPrices(prices.price_small);
    } else if (selectedButton === sizes[1].key) {
      setFoodPrices(prices.price_medium);
    } else {
      setFoodPrices(prices.price_large);
    }
  }, [selectedButton]);

  const rotate = rotateFood.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

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
      <PriceDescription price={foodPrices} />
      <SizesButtonsRadioGroup>
        {sizes.map((size, index) => (
          <SizeButton
            selectedSize={selectedButton === size.key}
            midle={index === 1}
            onPress={() => setSelectedButton(size.key)}>
            <SizeButtonTxt selectedSize={selectedButton === size.key}>
              {size.text}
            </SizeButtonTxt>
          </SizeButton>
        ))}
      </SizesButtonsRadioGroup>
    </Container>
  );
};

export default FoodSizes;
