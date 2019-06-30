import React, { Component } from 'react';
import {Card,Button, Row, Container, Form,Col} from "react-bootstrap";
import '../../styles/App.css'
import UploadFiles from "../Sell/UploadFiles";


class UpdateProfilePicture extends Component {
    render() {
        return (
            <div>
                <Container style={{ display: 'flex', justifyContent:'center', alignItems:'center', height: '80vh'}}>
                    <Col>
                    <Card>
                        <Row className="justify-content-md-center">
                            <h4> 1.Select new photo.</h4>
                        </Row>
                        <Row className="justify-content-md-center">
                            <hr className="style1"/>
                        </Row>
                        <Row className="justify-content-md-center">
                            <UploadFiles/>   
                        </Row>
                        <Row className="justify-content-md-center">
                            <hr className="style1"/>
                        </Row>
                        <Row className="justify-content-md-center">
                            <h4> 2.Update photo</h4>
                        </Row>
                        <Row className="justify-content-md-center">
                            <hr className="style1"/>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Button variant="primary">Submmit</Button>  
                        </Row>
                        </Card>
                    </Col>
                </Container> 
            </div> 
        );
    }
}

export default UpdateProfilePicture;
