//Dependencies
import React, {Component,Fragment} from 'react';
import Showcase from './Showcase';
import Carrusel from './Carrusel';
import Browser from './Browser';
import LandingPage from './LandingPage';
import { connect } from 'react-redux';
import { logOut } from '../../actions';

//console.log("Hi there:", process.env.REACT_APP_backend_url);


class Home extends Component{
  render(){
    if(this.props.loginAccountInfo){
      return(
        <Fragment>
            <div>
            <Carrusel/>
            </div>
            <Browser />
        </Fragment>
      );
    }else{
      return(
        <Fragment>
          <LandingPage/>
        </Fragment>
      );
    }
  }
}

// Para conectar react con redux
const mapStateToProps = (state) => {
  return {loginAccountInfo: state.loginAccountInfo};
};

export default connect(mapStateToProps, { logOut })(Home);
