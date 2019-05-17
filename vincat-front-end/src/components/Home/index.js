//Dependencies
import React, {Component} from 'react';
import Showcase from './Showcase';

class Home extends Component{
  render(){
    return(
      <div className="Home">
        <div>
          <Showcase/>
        </div>
      </div>
    );
  }
}

export default Home;
