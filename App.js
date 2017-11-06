import React, { Component } from 'react';
import {
  ActivityIndicator,
} from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';

import Login from './src/Login';
import configureStore from './src/store';
const { persistor, store } = configureStore();

const onBeforeLift = () => {
  // take some action before the gate lifts
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate 
          loading={<ActivityIndicator />}
          onBeforeLift={onBeforeLift}
          persistor={persistor}>
          <Login/>
        </PersistGate>
    </Provider>
    );
  }
}
