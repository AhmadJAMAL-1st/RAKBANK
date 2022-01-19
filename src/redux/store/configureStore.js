import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './../reducers/index';

const middlewares = [thunk];
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(...middlewares));
};

export default configureStore;