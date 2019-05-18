import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from "react-bootstrap/Form";
import catPlaceholder from "../assets/catPlaceholder.jpg";

class NavigationBar extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Navbar bg="dark" variant="dark" >
        <Navbar.Brand href="/home">
          <img
          src= {catPlaceholder}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="VinCat logo"
          />
          {'VinCat'}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link href="/cart">Shopping Cart</Nav.Link>
          <Nav.Link href="/register">Sign Up</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
};

export default NavigationBar;
