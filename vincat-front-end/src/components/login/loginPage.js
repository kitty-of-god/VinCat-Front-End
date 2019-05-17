import React,{Component} from 'react';
import '../../styles/App.css';
import {Button, ButtonToolbar, Card, Col, Form, Row} from "react-bootstrap";

export const loginPage = () => (

<container style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>


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
            <Form className="justify-content-md-center">
                <Form.Group as={Row} controlId="formHorizontalEmail" className="justify-content-md-center">

                    <Col sm={5}>
                        <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword" className="justify-content-md-center">

                    <Col sm={5}>
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="justify-content-md-center">
                    <Col sm={5}>

                        <Card.Link href="/">Forgot Password?</Card.Link>


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
                        <Button type="submit">Sign in</Button>
                    </Col>
                </Form.Group>


            </Form>
        </Card.Body>

    </Card>

        </Col>
    </Row>
</container>





)


export default loginPage;
