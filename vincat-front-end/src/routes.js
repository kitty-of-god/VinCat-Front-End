//Dependencies
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Components
import App from './components/App';
import Login from './components/Login';
import Register from './components/Register';
import Home  from './components/Home';
import Cart from './components/Cart';
import Page404 from './components/Page404';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/cart" component={Cart} />
      <Route path="/home" component={Home} />
      <Route component={Page404}/>
    </Switch>
  </App>;

export default AppRoutes;
