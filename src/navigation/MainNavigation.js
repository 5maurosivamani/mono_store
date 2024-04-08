import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';


const MainNavigation = () => {
  return (
    <NavigationContainer>
      {/* <AppNavigation/> */}
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default MainNavigation
