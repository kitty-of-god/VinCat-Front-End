//Dependencies
import React, { Component } from 'react';
import {Button, ButtonToolbar, Card, Col, Form, Row, Container} from "react-bootstrap";
import { connect } from 'react-redux';
import { storeLoginAccountInfo } from '../../actions';
import axios from "axios";

import FacebookLogin from 'react-facebook-login';

const emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const MIN_PASS_LENGTH = 6 ;

class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state= {
      email: "",
      password: "",
      valid: "undefined",
        userToken:false,
        facebookLog: false,
        isLoading: false

    }

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(e){

    {/*Email format and password length validation*/}
    let condition;
    console.log(this.state.password.length);
    if(e.target.name=="email"){
      if(emailRegex.test(e.target.value) && this.state.password.length >= MIN_PASS_LENGTH){
        condition= "valid";
        if(e.target.value.length == 0 && this.state.password.length == 0)condition = "undefined";
      }else{
        condition = "invalid";
      }
    }else{
      if(emailRegex.test(this.state.email) && e.target.value.length >= MIN_PASS_LENGTH){
        condition = "valid";
      }else{
        condition = "invalid";
      }
    }

    this.setState({
      [e.target.name]: e.target.value,
      valid: condition,
    });
  }


  handleFormSubmit(e){
    e.preventDefault();
     console.log(this.state);
     this.setState({ isLoading: true });
    axios.post(process.env.REACT_APP_backend_url+'/sessions', {
    email: this.state.email,
    password: this.state.password,
    })
    .then(res => {
      {/*Makeshift way to handle non-existant user*/}
        if(res.status > 299) throw "nan";
        console.log(res.data)
        const infoKey = {
            accountInfo:res.data.email,
            key:res.data.authentication_token,
            id:res.data.id,
            role:res.data.role
        };

        this.props.storeLoginAccountInfo(infoKey);
      }).catch(e =>{this.setState({valid: "nan", isLoading: false})})
   }

    responseFacebook = (response) => {
      console.log(response);
        this.setState({
                email: response.email,
                facebookLog: true,
                userToken: response.accessToken
            }
        );
        console.log(this.state);
        axios.post(process.env.REACT_APP_backend_url+'/sessions', {
            email: this.state.email,
            userToken: this.state.userToken,
            facebook: this.state.facebookLog
        })
            .then(res => {
                {/*Makeshift way to handle non-existant user*/}
                if(res.status > 299) throw "nan";
                const infoKey = {
                    accountInfo:res.data.email,
                    key:res.data.authentication_token,
                    id:res.data.id
                };
                this.props.storeLoginAccountInfo(infoKey);
            }).catch(e =>{this.setState({valid: "nan"})})

    }

    render() {


        const userValidation = this.state.valid;
        const  isLoading  = this.state.isLoading;
        console.log(isLoading);
        let message, fbContent;
        fbContent = ( <FacebookLogin
            name="user"
            type="user"
            appId="403885650204857" //APP ID NOT CREATED YET
            fields="name,email,picture,username"
            callback={this.responseFacebook}
            icon="fa-facebook"
        />);


        switch(userValidation){
          case "undefined":
            message = <Form.Label>Enter your email and password</Form.Label>;
            break;
          case "valid":
            message = <Form.Label>Valid email and password</Form.Label>;
            break;
          case "invalid":
            message = <Form.Label>Invalid email or password</Form.Label>;
            break;
          case "nan":
            message = <Form.Label> The user does not exists</Form.Label>;
            break;
          default:
            message = <Form.Label>Default message</Form.Label>;
            break;

        }

        return (
            <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>
                <Row className="justify-content-md-center">
                <Col md="auto">
                <Card className="text-center"  >

                    <Card.Header>
                        <h1>Empieza a comprar con @VinCat </h1>
                        <ButtonToolbar  className="justify-content-md-center">
                            {fbContent}
                        </ButtonToolbar>

                    </Card.Header>

                    <Card.Body >
                        <Form
                        className="justify-content-md-center"
                        onSubmit={this.handleFormSubmit}
                        >
                            <Form.Group as={Row} controlId="formHorizontalEmail" className="justify-content-md-center">

                                <Col sm={5}>
                                    {message}
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
                                    <Form.Label>Password must be at least 6 characters long</Form.Label>
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
                                    <Button type="submit" disabled={isLoading}>
                                        {isLoading ? 'Loading…' : 'Submit'}
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

/*
const mapStateToProps = (state) => {
    return state;
};
*/

export default connect(null, {storeLoginAccountInfo})(LoginPage);
