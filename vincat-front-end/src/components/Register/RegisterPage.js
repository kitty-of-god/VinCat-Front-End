import React,{Component} from 'react';
import '../../styles/App.css';
import {Button, ButtonToolbar, Card, Col, Form, Row, Container} from "react-bootstrap";
import axios from "axios";
import FacebookLogin from 'react-facebook-login';

const emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const MIN_PASS_LENGTH = 6 ;

class RegisterPage extends Component{
    constructor(props){
    super(props);

    {/*this.state = {
        isLoading: false,
        valid: "undefined"
    }
    
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

        {/*let valid;

        if(emailRegex.test(this.state.email) &&
        this.state.password == this.state.password_confirmation &&
        this.state.password.length >= MIN_PASS_LENGTH){
          valid = "valid";
        }else{
          valid = "invalid";
        }

        this.setState({valid});  */}

        const users = {
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
            username: this.state.username,
            role:"natural",
            name: this.state.name
        };
        axios.post('https://vincat-dangulos.c9users.io/users', {users}
        axios.post('https://vnct01.herokuapp.com/users', {users}

            )
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({valid: "nan", isLoading: false})
            }).catch(error => {
            this.setState({valid: error.response.data , isLoading: false})

            //console.log(...error.response.data.name)
            console.log(error.response.data.name)
            console.log(error.response.data.email)
            console.log(error.response.data.password)
            console.log(error.response.data.password_confirmation)
            console.log(error.response.data.username)

        });

        console.log(users);
    }
    responseFacebook = (response) => {
        const user = {
                email: response.email,
                facebookLog: true,
                userToken: response.accessToken,
                name: response.name,
               username: response.userID,
            role:"natural",
            };

        console.log(this.state);
        axios.post('https://vnct01.herokuapp.com/users', {
            user
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
  render(){
      console.log(this.state);
      const  isLoading  = this.state.isLoading;
      const userValidation = this.state.valid;
      let fbContent, message;
            console.log(userValidation)
      fbContent = ( <FacebookLogin
          name="user"
          type="user"
          appId="403885650204857" //APP ID NOT CREATED YET
          fields="name,email,picture"
          callback={this.responseFacebook}
          icon="fa-facebook"
      />);


      if (userValidation.name !== undefined)
      {
          console.log(userValidation.name)

            message = <Form.Label>El nombre del usuario no es valido</Form.Label>;
      }

      if (userValidation.email !== undefined)
      {


          message = <Form.Label>El email no es valido</Form.Label>;
      }
      if (userValidation.password !== undefined)
      {


          message = <Form.Label>La contraseña no es valida</Form.Label>;
      }
      if (userValidation.password_confirmation !== undefined)
      {


          message = <Form.Label>Las contraseñas no corresponden</Form.Label>;
      }
      if (userValidation.username !== undefined)
      {


          message = <Form.Label>El username no es valido</Form.Label>;
      }


    return(

      <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>


          <Row className="justify-content-md-center">
            <Col md="auto">



          <Card className="text-center"  >
              <Card.Header>

                  <h1>Register @VinCat </h1>
                  <ButtonToolbar  className="justify-content-md-center">
                      {fbContent}
                  </ButtonToolbar>
              </Card.Header>

              <Card.Body >
                  <Form className="justify-content-md-center" onSubmit={this.handleFormSubmit}>
                      <Form.Group as={Row} controlId="formHorizontalEmail" className="justify-content-md-center">

                          <Col sm={7}>
                               {message}
                              <Form.Control onChange={this.handleChange} type="email" placeholder="Email*" name="email"/>
                          </Col>
                      </Form.Group>

                      <Form.Group as={Row} controlId="formHorizontalUsername" className="justify-content-md-center">

                          <Col sm={7}>
                              <Form.Control onChange={this.handleChange} type="username" placeholder="Username*" name="username" />
                          </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formHorizontalName" className="justify-content-md-center">

                          <Col sm={7}>
                              <Form.Control onChange={this.handleChange} type="name" placeholder="Name*" name="name" />
                          </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formHorizontalPassword" className="justify-content-md-center">

                          <Col sm={7}>
                              <Form.Control onChange={this.handleChange} type="password" placeholder="Password*" name="password"/>
                          </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formHorizontalPasswordConfirmation" className="justify-content-md-center">

                          <Col sm={7}>
                              <Form.Control onChange={this.handleChange} type="password" placeholder="Re-type Password*" name="password_confirmation"/>
                          </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="justify-content-md-center">
                          <Col sm={7}>
                              <p>We will send the activation code to your e-mail.</p>
                              <Button type="submit" disabled={isLoading}>{isLoading ? 'Loading…' : 'Register'}</Button>
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
