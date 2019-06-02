//Dependencies
import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'


class TestShowcase extends Component{
  render(){
    return(
      <Container>
        <Card>
          <Row>
            <Col><p>henlo</p></Col>
            <Col><p>Owo</p></Col>
          </Row>
        </Card>
      </Container>
    );
  }
}

export default TestShowcase;
