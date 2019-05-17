import React,{Component} from 'react';
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import '../styles/App.css';


export const navigationBar = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">VinCat</Navbar.Brand>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
        </Form>
        <Nav className="ml-auto">
            <Nav.Link href="/">Sell</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Sign up</Nav.Link>
        </Nav>

    </Navbar>

)



