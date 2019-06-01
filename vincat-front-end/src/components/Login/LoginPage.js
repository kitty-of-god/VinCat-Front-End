//Dependencies
import React,{Component} from 'react';
import {Button, ButtonToolbar, Card, Col, Form, Row, Container} from "react-bootstrap";
import axios from 'axios';

class LoginPage extends Component{

  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleFormSubmit(e){
    e.preventDefault();

    axios.post('https://vincat-dangulos.c9users.io/sessions', {
    email: this.state.email,
    password: this.state.password, })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

    console.log("hello");

   }

  render(){
    console.log(this.state);
    return(
      <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Card className="text-center">

              {/*Login component header*/}
              <Card.Header>
                  <h1>Start shopping @ VinCat </h1>
                  <ButtonToolbar  className="justify-content-md-center">
                  <Button variant="outline-dark">Log in with Google</Button>
                  </ButtonToolbar>
              </Card.Header>

              {/*Login component body*/}
              <Card.Body>
                <Form
                onSubmit={this.handleFormSubmit}
                className="justify-content-md-center"
                >

                  {/*email field*/}
                  <Form.Group as={Row}
                  controlId="formHorizontalEmail"
                  className="justify-content-md-center"
                  >
                    <Col sm={5}>
                      <Form.Control
                      onChange={this.handleChange}
                      name="email"
                      type="email"
                      placeholder="Email"
                      />
                    </Col>
                  </Form.Group>

                  {/*password field*/}
                  <Form.Group as={Row}
                  controlId="formHorizontalPassword"
                  className="justify-content-md-center"
                  >
                    <Col sm={5}>
                      <Form.Control
                      onChange={this.handleChange}
                      name="password"
                      type="password"
                      placeholder="Password"
                      />
                    </Col>
                  </Form.Group>

                  {/*Forgot Password link*/}
                  <Form.Group as={Row}
                    className="justify-content-md-center"
                  >
                    <Col sm={5}>
                      <Card.Link href="/forgot">Forgot Password?</Card.Link>
                    </Col>
                  </Form.Group>

                  {/*Register link*/}
                  <Form.Group as={Row}
                  className="justify-content-md-center"
                  >
                    <Col sm={8}>
                      <Card.Link href="/register">Don't have and account? Register</Card.Link>
                    </Col>
                  </Form.Group>
                      <Form.Group as={Row} controlId="formHorizontalCheck" className="justify-content-md-center">
                          <Col sm={5}>
                              <Form.Check label="Remember me" />
                          </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="justify-content-md-center">
                          <Col sm={5}>
                              <Button type="submit">Login</Button>
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

export default LoginPage;
