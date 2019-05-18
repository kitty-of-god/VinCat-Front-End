//Dependencies
import React, {Component} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class Browser extends Component{
  render(){
    return(
      <div>
      <Tabs defaultActiveKey="Shirts" id="browser">
        <Tab eventKey="Shirts" title="Shirts">
          <p>kashdfjkashfklakjlsdfhkjaskdjfhkashf</p>
        </Tab>
        <Tab eventKey="Pants" title="Pants">
          <p>kashdfjkashfklakjlsdfhkjaskdjfhkashf</p>
        </Tab>
        <Tab eventKey="Shoes" title="Shoes">
          <p>kashdfjkashfklakjlsdfhkjaskdjfhkashf</p>
        </Tab>
        <Tab eventKey="Jackets" title="Jackets">
          <p>kashdfjkashfklakjlsdfhkjaskdjfhkashf</p>
        </Tab>
        <Tab eventKey="Scarfs" title="Scarfs">
          <p>kashdfjkashfklakjlsdfhkjaskdjfhkashf</p>
        </Tab>
      </Tabs>
      </div>
    );

  }
}

export default Browser;
