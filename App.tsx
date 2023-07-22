import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';

const RootStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{ title: 'ホーム' }}
        />
        <RootStack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={({ route }) => ({
            title: '🌈 ' + route.params.paletteName + ' 🌈',
          })}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
