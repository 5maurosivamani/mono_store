import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SplashImage} from '../global/Constants';

const Splash = () => {
  const {reset} = useNavigation(null);

  // Hide the splash Screen
  useEffect(() => {
    setTimeout(() => {
      reset({index: 0, routes: [{name: 'Home'}]});
    }, 5000);
  }, []);

  return (
    <View className="flex-1">
      <Image source={SplashImage} className="h-full w-full" />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
