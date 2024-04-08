import React from 'react';
import RootLayout from './src/layout/RootLayout';
import MainNavigation from './src/navigation/MainNavigation';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FCD240',
    secondary: '#000',
    background: '#F9FAFB'
  },
};

const App = () => {
  return (
    <RootLayout>
      <PaperProvider theme={theme}>
        <MainNavigation />
      </PaperProvider>
    </RootLayout>
  );
};

export default App;
