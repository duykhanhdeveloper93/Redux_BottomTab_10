/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Main from './appFolder/mainScreen/Main';

import Store1 from './appFolder/reduxFolder/store/Store';

import { Provider } from 'react-redux';

const store = Store1()

const RNRedux = () => (
  <Provider store = { store }>
    <Main />
  </Provider>
)


AppRegistry.registerComponent(appName, () => RNRedux);