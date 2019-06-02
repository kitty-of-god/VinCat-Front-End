//Dependencies
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';

//Styles
import './styles/index.css';

//Routes
import AppRoutes from './routes';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers());

render(
  <Provider store = {store}>
    <Router>
      <AppRoutes/>
    </Router>
  </Provider>
  , document.getElementById('root'));
