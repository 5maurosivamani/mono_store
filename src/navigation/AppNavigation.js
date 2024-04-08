import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Import Screens
import Splash from '../screens/Splash';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AppNavigation;
