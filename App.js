

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { createStore ,applyMiddleware ,compose}from 'redux'
import Router from './src/Screens/Router'
import Reducer from './src/Reducers/index'

import ReduxThunk from 'redux-thunk'


export default class App extends Component {
 
  render() {
    let composeInahancers = compose
    if(__DEV__){
      composeInahancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose
    }
    const store = createStore(Reducer,composeInahancers(),applyMiddleware(ReduxThunk ))
    return (
      <Provider store ={store}>
      <Router/>
     </Provider>
    );
  }
}

