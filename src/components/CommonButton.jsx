import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CommonButton = ({title}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="h-14 bg-primary justify-center items-center rounded-lg">
      <Text className="text-black font-poppins-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({});
