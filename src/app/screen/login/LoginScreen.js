import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  Platform,
  ImageBackground,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import RegisterButton from '../../components/button/RegisterButton';
import LoginButton from './../../components/button/LoginButton';
import InputField from './../../components/input/Input';
import Loader from './../../components/loader/loader';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../../redux/actions/login';
import styles from './Style';
import DeviceInfo from 'react-native-device-info';
import Geolocation from '@react-native-community/geolocation';

const LoginScreen = ({navigation}) => {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [userIDError, setUserIDError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [beforeAnimation, setBeforeAnimation] = useState(true);
  const [MacAddress, setMacAddress] = useState('Andoird');
  const [os, setOS] = useState('Andoird');
  const [autoFocus, setautoFocus] = useState(false);
  const [PublicIPAddress, setPublicIPAddress] = useState('213.123.123');
  const [GPSLocation, setGPSLocation] = useState('2.231223123');
  const animation = useRef(new Animated.Value(0)).current;

  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.loginReducer);

  const onBack = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 400,
    }).start(() => {
      setBeforeAnimation(true);
    });
    setBeforeAnimation(true);
  };

  const onLogin = () => {
    setautoFocus(true);
    Animated.timing(animation, {
      toValue: -220,
      duration: 500,
    }).start(() => {
      setBeforeAnimation(false);
      // this.state.animation.setValue(0);
      //If you remove above line then it will stop the animation at toValue point
    });
  };

  const onSubmit = () => {
    if (userID == '') {
      setUserIDError('This field is requied');
      return;
    } else if (password == '') {
      setPasswordError('This field is requied');
      return;
    } else {
      setPasswordError('');
      setUserIDError('');
      const data = {
        userID: userID,
        password: password,
        OS: os,
        MacAddress: MacAddress,
        IMEI: 'AABBBBBBCCCCCCD',
        GPSLocation: GPSLocation,
        PublicIPAddress: PublicIPAddress,
      };
      dispatch(loginUser(data, navigation));
    }
  };

  useEffect(() => {
    setOS(Platform.OS);

    DeviceInfo.getIpAddress().then(ip => {
      console.log('ip', ip);
      setPublicIPAddress(ip);
    });

    DeviceInfo.getMacAddress().then(mac => {
      setMacAddress(mac);
    });

    Geolocation.getCurrentPosition(info => {
      const {latitude, longitude} = info.coords;
      console.log('latitude', latitude);
      setGPSLocation(latitude, longitude);
      console.log(info);
    });
  }, []);

  const transformStyle = {
    transform: [
      {
        translateY: animation,
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <Loader loaderS={loading} />
      <ImageBackground
        source={require('../../../assets/img/purBG.png')}
        style={styles.imageBackground}
        resizeMode="cover">
        <View style={styles.header}>
          <View style={{width: 60, padding: 20}}>
            {!beforeAnimation ? (
              <TouchableOpacity onPress={onBack}>
                <Image
                  source={require('../../../assets/img/backArrow.png')}
                  style={styles.backArrowImg}
                />
              </TouchableOpacity>
            ) : (
              <></>
            )}
          </View>
          <View style={{width: 120, padding: 5}}>
            <RegisterButton title="Register" />
          </View>
        </View>

        {beforeAnimation ? (
          <View style={styles.container}>
            <Animated.View style={[styles.textView, transformStyle]}>
              <Text style={styles.heading}>RAKBANK </Text>
              <Text style={styles.subHeading}>
                Everything you love about{'\n'}Digital Banking in a smarter,
                {'\n'}simpler design{' '}
              </Text>
            </Animated.View>
            <View style={styles.loginBtnView}>
              <LoginButton
                btnColor="#28282B"
                title="Login with User ID"
                onPress={onLogin}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../assets/img/fingerPrint.png')}
                  style={styles.fingerPrintImg}
                />
                <Text style={styles.quickBalanceText}>Quick Balance</Text>
              </View>
            </View>
          </View>
        ) : (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
            style={[styles.container, {marginTop: 30}]}>
            <View>
              <View>
                <InputField
                  autoFocus={autoFocus}
                  labelname="User ID"
                  placeholder="User ID"
                  keyboardType="default"
                  value={userID}
                  errorMsg={userIDError}
                  secureText={false}
                  onTextChange={userIDValue => {
                    setUserID(userIDValue);
                    setUserIDError('');
                  }}
                />

                <InputField
                  labelname="Password"
                  placeholder="Password"
                  keyboardType="default"
                  value={password}
                  errorMsg={passwordError}
                  secureText={true}
                  onTextChange={passwordValue => {
                    setPassword(passwordValue);
                    setPasswordError('');
                  }}
                />
              </View>

              <LoginButton
                title="Submit"
                btnColor="#888888"
                disabled={true}
                onPress={onSubmit}
              />
              <View>
                <Text style={styles.forgotText}>
                  Forgot User ID | Forgot Password{'\n'}Enable User ID
                </Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginScreen;
