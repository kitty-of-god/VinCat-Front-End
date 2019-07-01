//Dependencies
import React, {Component} from 'react';
import LoginPage from './LoginPage';
//import { storeLoginAccountInfo } from '../../actions';
import { connect } from 'react-redux';
import {Button, ButtonToolbar, Card, Col, Container, Form, Row} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";


/*Everything from the login page should be rendered
here in order to centralize all components.*/

class Login extends Component{
  render(){
    if (this.props.loginAccountInfo){
      console.log(this.props.loginAccountInfo);
      return (


          <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>
          <Row className="justify-content-md-center">
          <Col md="auto">
          <Card className="text-center"  >
          <Card.Header>
          <h1>Empieza a comprar con @VinCat </h1>
      </Card.Header>
      <Card.Body >
            <Col>
              <h1>Estas logeado {this.props.loginAccountInfo.accountInfo} </h1>
              <LinkContainer to="/home" ><Button size="sm">Empieza a comprar.</Button></LinkContainer>
            </Col>
      </Card.Body>
      </Card>
    </Col>
    </Row>
    </Container>
      )
    }

    return(
      <React.Fragment>
        {console.log(this.props.loginAccountInfo)}
        <LoginPage/>
      </React.Fragment>
    );
  }
}


// Para conectar react con redux
const mapStateToProps = (state) => {
  
    return {loginAccountInfo: state.loginAccountInfo};
};

export default connect(mapStateToProps)(Login);
