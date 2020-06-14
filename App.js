import React from 'react';
import { StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Routes from './src/routes';

const statusBarHeight = getStatusBarHeight(true);

Icon.loadFont();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </>
  );
};

export default App;
