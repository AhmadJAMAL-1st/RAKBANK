import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../app/screen/login/LoginScreen';

const Login = createBottomTabNavigator();

export default function LoginRouting() {
  const EmptyScreen = () => {
    return null;
  };
  return (
    <Login.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard:true,
        tabBarOptions: {
          style: {
            backgroundColor: '#42a5f5',
          },
        },

        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Product') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Report') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          // return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: 'gray',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        showIcon: true,
      })}>
      <Login.Screen
        name="Home"
        component={LoginScreen}
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: () => (
            <Image
              style={{height: 25, width: 25}}
              source={require('./../assets/img/product.png')}
            />
          ),
        }}
      />

      <Login.Screen
        name="Live Chart"
        component={EmptyScreen}
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: () => (
            <Image
              style={{height: 25, width: 25}}
              source={require('./../assets/img/chat.png')}
            />
          ),
        }}
      />
      <Login.Screen
        name="RAKToken"
        component={EmptyScreen}
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: () => (
            <Image
              style={{height: 25, width: 25}}
              source={require('./../assets/img/token.png')}
            />
          ),
        }}
      />
      <Login.Screen
        name="Locate Us"
        component={EmptyScreen}
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: () => (
            <Image
              style={{height: 25, width: 25}}
              source={require('./../assets/img/locate.png')}
            />
          ),
        }}
      />
    </Login.Navigator>
  );
}
