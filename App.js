

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { createStore ,applyMiddleware }from 'redux'
import Router from './src/Screens/Router'
import Reducer from './src/Reducers/index'

import ReduxThunk from 'redux-thunk'


export default class App extends Component {
 
  render() {
    const store = createStore(Reducer,{},applyMiddleware(ReduxThunk ))
    return (
      <Provider store ={store}>
      <Router/>
     </Provider>
    );
  }
}

