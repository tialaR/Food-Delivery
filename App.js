import React from 'react';
import { View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Main from './src/pages/Main';
import { colors } from './src/styles/colors';

const statusBarHeight = getStatusBarHeight(true);

Icon.loadFont();

const App = () => {
  return (
    <View
      style={{
        paddingTop: statusBarHeight + 40,
        felx: 1,
        backgroundColor: colors.background,
      }}>
      <Main />
    </View>
  );
};

export default App;
