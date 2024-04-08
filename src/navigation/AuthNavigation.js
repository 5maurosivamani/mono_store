import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Import Screens
import Login from '../screens/Login';
import Splash from '../screens/Splash';

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
