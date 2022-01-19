import * as Types from '../constants/loginConst';
const initialState = {
  data: {},
  loading: false,
  error: null,
};

export const loginReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case Types.USER_LOGIN_REQUEST:
      return {...state, loading: true};
    case Types.USER_LOGIN_SUCCESS:
      return {...state, loading: false, data: payload};
    case Types.USER_LOGIN_ERROR:
      return {...state, loading: false, error: payload};
    default:
      return state;
  }
};
