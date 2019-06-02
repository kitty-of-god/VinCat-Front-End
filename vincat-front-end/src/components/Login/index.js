//Dependencies
import React, {Component} from 'react';
import LoginPage from './LoginPage';
//import { storeLoginAccountInfo } from '../../actions';
import { connect } from 'react-redux';

/*Everything from the login page should be rendered
here in order to centralize all components.*/

class Login extends Component{
  render(){
    if (this.props.loginAccountInfo){
      console.log(this.props.loginAccountInfo);
      return (
          <h1>Estas Logueado {this.props.loginAccountInfo.accountInfo}</h1>
      )
    }

    return(
      <React.Fragment>
        {console.log(this.props.loginAccountInfo)}
        <LoginPage/>
      </React.Fragment>
    );
  }
}


// Para conectar react con redux
const mapStateToProps = (state) => {
    return {loginAccountInfo: state.loginAccountInfo};
};

export default connect(mapStateToProps)(Login);
