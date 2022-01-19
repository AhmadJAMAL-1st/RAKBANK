import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
const InputField = ({
  labelname,
  value,
  secureText,
  keyboardType,
  errorMsg,
  editable,
  autoFocus,
  onTextChange,
}) => {
  const fieldBorderColor = errorMsg ? '#FF0000' : '#F2F2F2';
  return (
    <View>
      <View style={[styles.inputContainer, {borderColor: fieldBorderColor}]}>
        <Text style={styles.label}>{labelname}</Text>
        <TextInput
          style={styles.inputField}
          value={value}
          autoFocus={autoFocus}
          underlineColorAndroid="#FFBF00"
          secureTextEntry={secureText}
          editable={editable}
          keyboardType={keyboardType}
          onChangeText={onTextChange}
        />
      </View>
      <Text style={styles.errorBox}>{errorMsg}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    color: 'black',
    alignSelf: 'center',
    width: '90%',
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    height: 70,
  },
  label: {
    color: '#28282B',
    fontSize: 14,
    height: 20,
    fontWeight: '700',
    paddingTop: 2,
    
    // marginVertical: 5,
  },
  inputField: {
    color: '#4A4B4D',
    fontSize: 14,
  },
  errorBox: {
    marginTop: 3,
    marginLeft: 20,
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default InputField;
