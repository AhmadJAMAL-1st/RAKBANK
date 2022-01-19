import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../app/screen/home/HomeScreen';

const stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </stack.Navigator>
  );
};
export default HomeStack;
