import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import Food from './pages/Food';
import Main from './pages/Main';
import { colors } from './styles/colors';

const Stack = createStackNavigator();

// function LogoTitle() {
//   return (
//     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//       <HeaderImage />
//       <HeaderTitle>song box</HeaderTitle>
//     </View>
//   );
// }

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: colors.black,
          headerBackTitle: ' ',
          headerStyle: {
            elevation: 10,
            borderBottomWidth: 0,
            backgroundColor: colors.background,
            shadowColor: colors.shadow,
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
          },
          // headerTitle: () => <LogoTitle />,
        }}>
        <Stack.Screen
          name="MainScreen"
          options={{
            title: 'Food Delivery',
          }}
          component={Main}
        />
        <Stack.Screen
          name="FoodScreen"
          options={{
            title: 'Food Delivery',
          }}
          component={Food}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
