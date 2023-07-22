import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'ホーム 🏠' }}
        />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={{ title: '🌈 色パーレット 🌈' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
