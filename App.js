import React from 'react';
import MainRouting from './src/routing/MainRouting';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store/configureStore';

const App = () => {
  return (
    <Provider store={configureStore()}>
      <MainRouting />
    </Provider>
  );
}

export default App;