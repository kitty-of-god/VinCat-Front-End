//Dependencies
import React, {Component} from 'react';
import {Container} from 'react-bootstrap';

var style = {
    backgroundColor: "#343a40",
    height: "200px",
    bottom:"0px",
    color:"white",
}

class Footer extends Component {
  render(){
    return (
      <Container fluid={true} style={style} className="d-flex justify-content-center">
              <p> copyright Kitty of god</p>
      </Container>
    );
  };
}

export default Footer;
