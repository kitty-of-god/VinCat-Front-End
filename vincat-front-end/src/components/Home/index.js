//Dependencies
import React, {Component} from 'react';
import Showcase from './Showcase';
import Browser from './Browser';
import Mybutton from '../MyButton';

class Home extends Component{
  render(){
    return(
      <div className="Home">
          <Showcase/>
          <Browser />
      </div>
    );
  }
}

export default Home;
