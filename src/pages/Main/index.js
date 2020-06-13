import React from 'react';
import { FlatList, View } from 'react-native';
import FoodCard from '../../components/FoodCard';
import SectionTitle from '../../components/SectionTitle';
import { RowSpace } from '../../styles/styles';
import { pizzas } from '../../utils/mocks';
import { ContainerScroll } from './styles';

const Main = ({ navigation }) => {
  function renderFood({ item }) {
    return (
      <FoodCard
        foodImage={item.image}
        foodName={item.name}
        foodIngredients={item.ingredients}
        foodMinPrice={item.prices.price_small}
        onPress={() => navigation.navigate('FoodScreen', { food: item })}
      />
    );
  }

  return (
    <ContainerScroll>
      {pizzas.map((_, index) => (
        <>
          <SectionTitle title={pizzas[index].category} />
          <FlatList
            contentContainerStyle={{
              paddingHorizontal: 32,
              paddingTop: 14,
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={pizzas[index].options}
            renderItem={renderFood}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ width: 14 }} />}
          />
          <RowSpace />
          <RowSpace />
        </>
      ))}
    </ContainerScroll>
  );
};

export default Main;
