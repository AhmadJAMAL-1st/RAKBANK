import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const LoginButton = ({title, disabled, btnColor, onPress}) => {
  return (
    <View style={styles.container}>
      <Pressable disable={disabled} onPress={() => onPress()}>
        <View style={[styles.submitButton, {backgroundColor: btnColor}]}>
          <Text style={styles.submitButtonText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 5,
  },

  submitButton: {
    backgroundColor: '#28282B',
    height: 56,
    borderRadius: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#ffffff',
  },
});

export default LoginButton;
