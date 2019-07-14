//Dependencies
import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

var style = {
    backgroundColor: "#343a40",
    height: "150px",
    bottom:"0px",
    color:"white",
}

class Footer extends Component {
  render(){
    return (
      <Container fluid={true} style={style} className="justify-content-center">
        <Row>
          <Col>
            <p>Front End:</p>
            <p>Ivan Delgado</p>
            <p>Marcelo Escamilla</p>
          </Col>
          <Col>
            <p>Fullstack:</p>
            <p>Nicolas Casas</p>
          </Col>
          <Col>
            <p>back End:</p>
            <p>Danniel Angulo</p>
            <p>Gabriel Aguirre</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Kitty of god, 2019</p>
          </Col>
        </Row>
      </Container>
    );
  };
}

export default Footer;
