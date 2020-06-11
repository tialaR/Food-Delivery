import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { aditionalFoods } from '../../utils/mocks';
import { AditionnalFoodContainer, AditionnalFoodTxt, Container, FoodImage } from './styles';

const AditionalFoodsList = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  function handleSelectItem(id) {
    const alreadySelected = selectedItems.findIndex((item) => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item) => item !== id);
      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  }

  function renderAditionalFood({ item }) {
    return (
      <Container>
        <AditionnalFoodContainer
          selected={selectedItems.includes(item.id)}
          onPress={() => handleSelectItem(item.id)}>
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
