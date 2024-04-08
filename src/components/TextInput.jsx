import {StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';

const CustomTextInput = ({text, setText, ...props}) => {
  return (
    <TextInput
      value={text}
      onChangeText={text => setText(setText)}
      mode="outlined"
      outlineColor="transparent"
      style={{backgroundColor:"red"}}
      {...props}
    />
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({});
