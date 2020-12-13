//Dependencies
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
// require('dotenv').config()

//Styles
import './styles/index.css';

//Routes
import AppRoutes from './routes';
import reducers from './reducers';
import {loadState, saveState} from './components/LocalStorage'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialData = loadState();
const store = createStore(
  reducers, 
  initialData,
  composeEnhancers()
);  

store.subscribe(()=> {
  saveState(store.getState());
});


render(
  <Provider store = {store}>
    <Router>
      <AppRoutes/>
    </Router>
  </Provider>
  , document.getElementById('root'));
