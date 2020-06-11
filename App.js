import React from 'react';
import { View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Main from './src/pages/Main';
import { colors } from './src/styles/colors';
import Routes from './src/routes';

const statusBarHeight = getStatusBarHeight(true);

Icon.loadFont();

const App = () => {
  return (
    <>
      <Routes />
    </>
  );
};

export default App;
