import React,{Component} from 'react';
import '../../styles/App.css';
import {Button, ButtonToolbar, Card, Col, Form, Row, Container} from "react-bootstrap";

class RegisterPage extends Component{

  render(){
    return(
      <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>


          <Row className="justify-content-md-center">
            <Col md="auto">



          <Card className="text-center"  >
              <Card.Header>

                  <h1>Register @VinCat </h1>
                  <ButtonToolbar  className="justify-content-md-center">
                  <Button variant="outline-dark">Sign up with Google</Button>
                  </ButtonToolbar>
              </Card.Header>

              <Card.Body >
                  <Form className="justify-content-md-center">
                      <Form.Group as={Row} controlId="formHorizontalEmail" className="justify-content-md-center">

                          <Col sm={7}>
                              <Form.Control type="email" placeholder="Email*" />
                          </Col>
                      </Form.Group>

                      <Form.Group as={Row} controlId="formHorizontalUsername" className="justify-content-md-center">

                          <Col sm={7}>
                              <Form.Control type="username" placeholder="Username*" />
                          </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formHorizontalPassword" className="justify-content-md-center">

                          <Col sm={7}>
                              <Form.Control type="password" placeholder="Password*" />
                          </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formHorizontalPassword" className="justify-content-md-center">

                          <Col sm={7}>
                              <Form.Control type="password" placeholder="Re-type Password*" />
                          </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="justify-content-md-center">
                          <Col sm={7}>
                              <p>We will send the activation code to your e-mail.</p>
                              <Button type="submit">Register</Button>
                          </Col>

                      </Form.Group>


                  </Form>
              </Card.Body>

          </Card>

              </Col>
          </Row>
      </Container>
    );
  }


}

export default RegisterPage;
