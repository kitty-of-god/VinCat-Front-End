//Dependencies
import React, {Component} from 'react';
import Showcase from './Showcase';
import Browser from './Browser';
import Mybutton from '../MyButton';
import TestShowcase from './TestShowcase';

class Home extends Component{
  render(){
    return(
      <React.Fragment>
          <Showcase/>
          <Browser />
      </React.Fragment>
    );
  }
}

export default Home;
