import * as Types from '../constants/loginConst';

export const loginUser = (body, navigation) => async dispatch => {
  dispatch({type: Types.USER_LOGIN_REQUEST});

  let postData = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  fetch('https://mojoz.herokuapp.com/api/mock/userinfo', postData)
    .then(response => response.json())
    .then(data => {
      const date = new Date().getTime();
      console.log('date', date);
      const dataStore = {
        userID: data.response.userID,
        password: data.response.password,
        OS: data.response.OS,
        MacAddress: data.response.MacAddress,
        IMEI: 'AABBBBBBCCCCCCD',
        GPSLocation: data.response.GPSLocation,
        PublicIPAddress: data.response.PublicIPAddress,
        loginDate: date,
      };
      dispatch({
        type: Types.USER_LOGIN_SUCCESS,
        payload: dataStore,
      });
      navigation.navigate('Dashboard');
    })
    .catch(error => {
      console.log('error', error);
      const message = 'Server Error';
      dispatch({type: Types.USER_LOGIN_ERROR, payload: message});
    });
};
