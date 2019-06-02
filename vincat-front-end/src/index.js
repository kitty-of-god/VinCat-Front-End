//Dependencies
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//Styles
import './styles/index.css';

//Routes
import AppRoutes from './routes';
import reducers from './reducers';

const store = createStore(reducers);

render(
  <Provider store = {store}>
    <Router>
      <AppRoutes/>
    </Router>
  </Provider>
  , document.getElementById('root'));
