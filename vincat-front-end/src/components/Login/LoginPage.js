//Dependencies
import React, { Component } from 'react';
import {Button, ButtonToolbar, Card, Col, Form, Row, Container} from "react-bootstrap";
import { connect } from 'react-redux';
import { storeLoginAccountInfo } from '../../actions';
import axios from "axios";

class LoginPage extends Component {
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
        const infoKey = {
            accountInfo:res.data.email,
            key:res.data.authentication_token,
            id:res.data.id
        };
        this.props.storeLoginAccountInfo(infoKey);
      })
   }

    render() {
        return (
            <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>
                <Row className="justify-content-md-center">
                <Col md="auto">
                <Card className="text-center"  >

                    <Card.Header>
                        <h1>Start shopping @VinCat </h1>
                        <ButtonToolbar  className="justify-content-md-center">
                        <Button variant="outline-dark">Log in with Google</Button>
                        </ButtonToolbar>
                    </Card.Header>

                    <Card.Body >
                        <Form
                        className="justify-content-md-center"
                        onSubmit={this.handleFormSubmit}
                        >
                            <Form.Group as={Row} controlId="formHorizontalEmail" className="justify-content-md-center">

                                <Col sm={5}>
                                    <Form.Control
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    onChange={this.handleChange}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPassword" className="justify-content-md-center">

                                <Col sm={5}>
                                    <Form.Control
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={this.handleChange}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="justify-content-md-center">
                                <Col sm={5}>

                                    <Card.Link href="/forgot">Forgot Password?</Card.Link>


                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="justify-content-md-center">

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
                                    <Button
                                    type="submit"

                                    >
                                      Login
                                    </Button>
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

const mapStateToProps = (state) => {
    return state;
};


export default connect(mapStateToProps, {storeLoginAccountInfo})(LoginPage);
