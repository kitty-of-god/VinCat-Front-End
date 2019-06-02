import React,{Component} from 'react';
import '../../styles/App.css';
import {Button, ButtonToolbar, Card, Col, Form, Row, Container} from "react-bootstrap";
import axios from "axios";




class RegisterPage extends Component{
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

        const users = {
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
            username: this.state.username,
            role:"natural",
            name: this.state.name
        };
        axios.post('https://vincat-dangulos.c9users.io/users', {users}

            )
            .then(res => {
                console.log(res);
                console.log(res.data);
            }).catch(error => {

            console.log(error.response.data.name)
            console.log(error.response.data.email)
            console.log(error.response.data.password)
            console.log(error.response.data.password_confirmation)
            console.log(error.response.data.username)


        });

        console.log(users);
    }
  render(){
      console.log(this.state);
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
                  <Form className="justify-content-md-center" onSubmit={this.handleFormSubmit}>
                      <Form.Group as={Row} controlId="formHorizontalEmail" className="justify-content-md-center">

                          <Col sm={7}>
                              <Form.Control onChange={this.handleChange} type="email" placeholder="Email*" name="email"/>
                          </Col>
                      </Form.Group>

                      <Form.Group as={Row} controlId="formHorizontalUsername" className="justify-content-md-center">

                          <Col sm={7}>
                              <Form.Control onChange={this.handleChange} type="username" placeholder="Username*" name="username" />
                          </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formHorizontalUsername" className="justify-content-md-center">

                          <Col sm={7}>
                              <Form.Control onChange={this.handleChange} type="name" placeholder="Name*" name="name" />
                          </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formHorizontalPassword" className="justify-content-md-center">

                          <Col sm={7}>
                              <Form.Control onChange={this.handleChange} type="password" placeholder="Password*" name="password"/>
                          </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formHorizontalPassword" className="justify-content-md-center">

                          <Col sm={7}>
                              <Form.Control onChange={this.handleChange} type="password" placeholder="Re-type Password*" name="password_confirmation"/>
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
