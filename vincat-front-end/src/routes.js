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
import Forgot from './components/Forgot';
import Query from './components/Query';
import Product from './components/Product';
import Profile  from './components/Profile';
import Sell from './components/Sell';
import UpdateProfile from "./components/Profile/UpdateProfile";
import ReportsUser from "./components/Profile/ReportsUser";
import Viewer from './test/Viewer';
import ProductUser from "./components/Product/ProductUser";

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/forgot" component={Forgot}/>
      <Route exact path="/query" component={Query}/>
      <Route exact path="/product" component={Product}/>
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/sell" component={Sell} />
      <Route exact path="/update" component={UpdateProfile} />
      <Route exact path="/reports" component={ReportsUser} />
      <Route exact path="/user" component={ProductUser} />
      {/*Test route, please ignore*/}
      <Route exact path="/viewer" component={Viewer}/>

      <Route path="/" component={Home} />
      <Route component={Page404}/>

    </Switch>
  </App>;

export default AppRoutes;
