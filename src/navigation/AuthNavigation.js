import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Import Screens
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
