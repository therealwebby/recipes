import React, { Component } from 'react';
import configureStore from '../../configureStore';

import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import AppContainer from '../app-container/app-container';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
};