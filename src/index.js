import React from 'react'
import { Component } from 'react-native';
import { Provider } from 'react-redux';

import { tab } from './modules'

import createStore from './createStore'

const store = createStore()

const Enactus = () => {
  return (
    <Provider store={store}>
      <tab.Tab />
    </Provider>
  )
}

export default Enactus
//<app.App />은 app/App.js를 실행 하는 것
