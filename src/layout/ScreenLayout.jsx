import {StyleSheet, View} from 'react-native';
import React from 'react';

const ScreenLayout = ({children}) => {
  return <View className="flex-1 p-8">{children}</View>;
};

export default ScreenLayout;

const styles = StyleSheet.create({});
