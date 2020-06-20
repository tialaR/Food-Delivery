import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { aditionalFoods } from '../../utils/mocks';
import { numberToReal } from '../../utils/resources';
import {
  AditionalFoodPrice,
  AditionnalFoodContainer,
  AditionnalFoodPriceContainer,
  AditionnalFoodTxt,
  Container,
  FoodImage
} from './styles';

const AditionalFoodsList = ({ onPressAditionalFood }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  //Seleciona o item adicional e cria um array de itens adicionais
  function handleSelectItem(id) {
    const alreadySelected = selectedItems.findIndex((item) => item.id === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item) => item.id !== id);
      setSelectedItems(filteredItems);

      onPressAditionalFood(filteredItems);
    } else {
      setSelectedItems([...selectedItems, aditionalFoods[id]]);
      onPressAditionalFood([...selectedItems, aditionalFoods[id]]);
    }
  }

  function renderAditionalFood({ item }) {
    return (
      <Container>
        <AditionnalFoodContainer
          selected={selectedItems.includes(item)}
          onPress={() => handleSelectItem(item.id)}>
          <AditionnalFoodPriceContainer>
            <AditionalFoodPrice>{numberToReal(item.price)}</AditionalFoodPrice>
          </AditionnalFoodPriceContainer>
          <FoodImage source={{ uri: item.image }} />
        </AditionnalFoodContainer>
        <AditionnalFoodTxt>{item.text}</AditionnalFoodTxt>
      </Container>
    );
  }

  return (
    <FlatList
      contentContainerStyle={{
        paddingBottom: 24,
        paddingTop: 34,
        paddingHorizontal: 32,
      }}
      showsHorizontalScrollIndicator={false}
      data={aditionalFoods}
      horizontal={true}
      renderItem={renderAditionalFood}
      keyExtractor={(item) => item.id}
    />
  );
};

export default AditionalFoodsList;
