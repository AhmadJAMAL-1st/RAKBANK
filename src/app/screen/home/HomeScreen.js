import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Header from '../../components/header/Header';
import LoginButton from './../../components/button/LoginButton';
import styles from './Style';
import {useSelector} from 'react-redux';

const HomeScreen = ({navigation}) => {
  const {data} = useSelector(state => state.loginReducer);
  const loginTime = new Date(data.loginDate);
  const logout = () => {
    console.log('dsfsdf', data);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />
      <View style={{marginVertical: 20, padding: 10}}>
        <Text style={styles.userInfoText}>User ID: {data?.userID}</Text>

        <Text style={styles.userInfoText}>
          Public IP Address: {data?.PublicIPAddress}{' '}
        </Text>
        <Text style={styles.userInfoText}>
          Mac Address: {data?.MacAddress}{' '}
        </Text>
        <Text style={styles.userInfoText}>
          Last Login Time: {data?.loginDate}
        </Text>
        <Text style={styles.userInfoText}>Operating System: {data?.OS}</Text>
        <Text style={styles.userInfoText}>IMEI: {data?.IMEI} </Text>
        <Text style={styles.userInfoText}>
          GPS Location: {data?.GPSLocation}{' '}
        </Text>
      </View>
      <View>
        <LoginButton btnColor="#28282B" title="Log Out" onPress={logout} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
