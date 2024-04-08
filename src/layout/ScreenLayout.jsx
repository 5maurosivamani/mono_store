import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

const ScreenLayout = ({customClass, children}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      className={`flex-1 p-8 bg-white ${customClass}`}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default ScreenLayout;

const styles = StyleSheet.create({});
