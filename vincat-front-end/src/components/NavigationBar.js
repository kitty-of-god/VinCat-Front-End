import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from "react-bootstrap/Form";
import catPlaceholder from "../assets/catPlaceholder.jpg";
import { Link } from 'react-router-dom';

class NavigationBar extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to ="/home">
            <img
            src= {catPlaceholder}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="VinCat logo"
            />
            {'VinCat'}
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button href="/query" variant="outline-info"><Link to="/query">Search</Link></Button>
          </Form>
        </Nav>
        <Nav className="justify-content-end">
          <Link to="/cart">Shopping Cart</Link>
          <Link to="/register">Sign Up</Link>
          <Link to="/login">Login</Link>
        </Nav>
      </Navbar>
    );
  }
};

export default NavigationBar;
