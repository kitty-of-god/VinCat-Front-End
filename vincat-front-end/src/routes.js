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
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route component={Page404}/>
    </Switch>
  </App>;

export default AppRoutes;
