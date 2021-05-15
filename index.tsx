import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

import './style.css';
import App from './App';

import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer/reducer';

import { Provider } from 'react-redux';
import { getData } from './sagas/saga';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(getData)

ReactDOM.render(
  <Provider>
  <App />
  </Provider>, 
document.getElementById('root'));
