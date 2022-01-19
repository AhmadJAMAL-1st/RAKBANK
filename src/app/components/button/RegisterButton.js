import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const RegisterButton = ({title, disabled, onPress}) => {
  return (
    <View style={styles.container}>
      <Pressable disable={disabled} onPress={() => onPress()}>
        <View style={styles.regButton}>
          <Text style={styles.regButtonText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    marginVertical: 5,
  },

  regButton: {
    backgroundColor: 'rgba(52, 52, 52, 0.1)',
    height: 45,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ffffff',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  regButtonText: {
    fontSize: 14,
    fontWeight: '200',
    color: '#ffffff',
  },
});

export default RegisterButton;
