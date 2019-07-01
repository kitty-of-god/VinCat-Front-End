import React, { Component } from 'react';
import {Button, ButtonToolbar, Card, Col, Form, Row, Container} from "react-bootstrap";

import ScoreByMountUser from '../statistics/ScoreByMountUser';
import '../../styles/App.css';

class Statistics extends Component {
    render() {
        return (
            <Container style={{ justifyContent:'center', alignItems:'center'}}>
                <Col>
                    <Row >
                        <Col>
                            <Card style={{ display: 'flex', justifyContent:'center', alignItems:'center'}}>
                                
                                <Card.Title as="h5">
                                    <h2>Hola</h2>
                                </Card.Title>
                                <Card.Body>
                                    <ScoreByMountUser/>
                                </Card.Body>  
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <br/>
                    </Row>
                    <Row >
                        <Col>
                            <Card style={{ justifyContent:'center', alignItems:'center'}}>
                                
                                <Card.Title as="h5">
                                    <h2>Hola</h2>
                                </Card.Title>
                                <Card.Body>
                                    <ScoreByMountUser/>
                                </Card.Body>  
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Container>
        );
    }
}

export default Statistics;
