//Dependencies
import React, {Component} from 'react';
import LoginPage from './LoginPage';

/*Everything from the login page should be rendered
here in order to centralize all components.*/

class Login extends Component{
  render(){
    return(
      <React.Fragment>
        <LoginPage/>
      </React.Fragment>
    );
  }
}

export default Login;
