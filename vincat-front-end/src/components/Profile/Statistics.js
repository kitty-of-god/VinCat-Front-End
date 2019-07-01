import React, { Component } from 'react';
import {Button, ButtonToolbar, Card, Col, Form, Row, Container} from "react-bootstrap";

import ScoreByMountUser from '../statistics/ScoreByMountUser';
import ProductReputation from '../statistics/ProductsReputation';
import MyRaiting from '../statistics/MyRaiting';
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
                                    <h2>Behavior sales two last months</h2>
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
                                    <h2>TOP 5 Most Popular Products</h2>
                                </Card.Title>
                                <Card.Body>
                                    <ProductReputation/>
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
                                    <h2>My Raiting</h2>
                                </Card.Title>
                                <Card.Body>
                                    <MyRaiting/>
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
