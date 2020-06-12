import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../styles/colors';

const { width } = Dimensions.get('window');

const TopTabBar = ({ titles, children }) => {
  const [selectedItem, setSelectedItem] = useState(0);

  const renderTabItem = (title, key) => {
    return (
      <TouchableOpacity
        key={key}
        style={[
          styles.tabItemContainer,
          selectedItem === key
            ? styles.tabItemSelector
            : styles.tabItemNotSelector,
        ]}
        onPress={() => setSelectedItem(key)}>
        <Text
          style={[
            selectedItem === key
              ? { color: colors.black }
              : { color: colors.grayMedium },
            styles.tabItemText,
          ]}>
          {title.toUpperCase()}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={{ height: 46 }}>
        <ScrollView
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.container}>
          {titles.map((title, index) => (
            <>{renderTabItem(title, index)}</>
          ))}
        </ScrollView>
      </View>
      <View style={styles.containerScreen}>{children[selectedItem]}</View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexGrow: 1,
  },
  tabItemContainer: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItemSelector: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  tabItemNotSelector: {
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
  },
  tabItemText: {
    textAlign: 'center',
    fontSize: 0.04 * width,
  },
  containerScreen: {
    flex: 1,
  },
});

export default TopTabBar;
