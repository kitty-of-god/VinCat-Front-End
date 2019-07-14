import React, {Component} from 'react';
import {Navbar, Nav, Button, FormControl, Form, Container} from 'react-bootstrap';
import catPlaceholder from "../assets/catPlaceholder.jpg";
import { NavLink, Link } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import { connect } from 'react-redux';
import { logOut } from '../actions';

class NavigationBar extends Component{
  render(){
    if(this.props.loginAccountInfo){
      if(this.props.loginAccountInfo.role == "admin")
      {
        return(
            <Navbar bg="dark" variant="dark">
              <LinkContainer to="/home">
                <Navbar.Brand>
                  <img
                      src= {catPlaceholder}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt="VinCat logo"
                  />
                  {'VinCat'}
                </Navbar.Brand>
              </LinkContainer>
              <Nav className="mr-auto">
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <LinkContainer to="/query">
                    <Button variant="outline-info">
                      Search
                    </Button>
                  </LinkContainer>
                </Form>
              </Nav>
              <Nav className="justify-content-end">
                <LinkContainer to="/profile"><Nav.Link>Mi cuenta</Nav.Link></LinkContainer>
                <LinkContainer to="/reports"><Nav.Link>Reportes</Nav.Link></LinkContainer>
                <LinkContainer to="/home"><Nav.Link onClick={this.props.logOut}> Logout</Nav.Link></LinkContainer>
              </Nav>
            </Navbar>
        );
      }
      return(
        <Navbar bg="dark" variant="dark">
        <LinkContainer to="/home">
          <Navbar.Brand>
            <img
            src= {catPlaceholder}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="VinCat logo"
            />
            {'VinCat'}
          </Navbar.Brand>
        </LinkContainer>
          <Nav className="mr-auto">
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <LinkContainer to="/query">
                <Button variant="outline-info">
                  Search
                </Button>
              </LinkContainer>
            </Form>
          </Nav>
          <Nav className="justify-content-end">
            <LinkContainer to="cart"><Nav.Link>Carrito de compras</Nav.Link></LinkContainer>
            <LinkContainer to="/profile"><Nav.Link>Mi cuenta</Nav.Link></LinkContainer>
            <LinkContainer to="/sell"><Nav.Link>Vender producto</Nav.Link></LinkContainer>
            <LinkContainer to="/home"><Nav.Link onClick={this.props.logOut}> Logout</Nav.Link></LinkContainer>
          </Nav>
        </Navbar>
      );
    }else{
      return(
        <Navbar bg="dark" variant="dark">
          <LinkContainer to="/home">
            <Navbar.Brand>
              <img
              src= {catPlaceholder}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="VinCat logo"
              />
              {'VinCat'}
            </Navbar.Brand>
          </LinkContainer>
            <Nav className="ml-auto">
              <LinkContainer to="/register"><Nav.Link>Sign Up</Nav.Link></LinkContainer>
              <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer>
            </Nav>
        </Navbar>
      );
    }
  }
};

// Para conectar react con redux
const mapStateToProps = (state) => {
  return {loginAccountInfo: state.loginAccountInfo};
};

export default connect(mapStateToProps, { logOut })(NavigationBar);
