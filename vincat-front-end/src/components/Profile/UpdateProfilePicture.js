import React, { Component } from 'react';
import {Card, Button, Row, Container, Form, Col, Modal} from "react-bootstrap";
import '../../styles/App.css'
import UploadFiles from "../Sell/UploadFiles";
import axios from "axios";
import { connect } from 'react-redux';
import {LinkContainer} from "react-router-bootstrap";

class UpdateProfilePicture extends Component {

    constructor (props) {
        super(props)
        this.state = {
            isLoading: false,
            valid: "undefined",
            validUpdate: false,

        }
        axios.defaults.headers.common["Authorization"] = this.props.loginAccountInfo.key; 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleClick(id){


        if(id ==1)
        {

            this.setState({ show: id });
        }




    }
    handleClose(id) {
        this.setState({ show: 'false' });
    }
    handleSubmit(){
        console.log(this.props.file.photo.length)
        if(this.props.file.photo.length < 100000) {
            axios.post(process.env.REACT_APP_backend_url+"/images", {
                images: {
                    name: this.props.file.name,
                    imageable_id: this.props.loginAccountInfo.id,
                    imageable_type: "User",
                    photo: this.props.file.photo
                }
            }).then(res => {
                console.log(res, "RESPUESTA_ALMACENAMIENTO_IMAGEN");
                this.setState({validUpdate: true})
            }).catch(e => {
                console.log(e, "ERROR");
            });
        }
        else
        {
            this.handleClick('1');

        }
    }

    render() {
        if(this.state.validUpdate) {
            return (

                <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>


                    <Row className="justify-content-md-center">
                        <Col md="auto">


                            <Card className="text-center">
                                <Card.Header>

                                    <h1>Actualizar tu perfil @VinCat </h1>
                                </Card.Header>

                                <Card.Body>


                                    <Col sm={7}>
                                        <h3>Tu perfil ha sido actualizado.</h3>
                                        <LinkContainer to="/home"><Button size="md">Continuar comprando.</Button></LinkContainer>
                                    </Col>


                                </Card.Body>

                            </Card>

                        </Col>
                    </Row>
                </Container>
            );
        }
        return (
            <div>
                <Container style={{ display: 'flex', justifyContent:'center', alignItems:'center', height: '80vh'}}>
                    <Modal show={this.state.show == '1'} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Imagen</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Tu imagen es muy pesada.</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>Cerrar</Button>

                        </Modal.Footer>
                    </Modal>
                    <Col>
                    <Card>
                        <Row className="justify-content-md-center">
                            <h4 style={{ textAlign:'left'}}> 1.Select new photo.</h4>
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
                            <Button variant="primary" onClick={this.handleSubmit}>Submmit</Button>  
                        </Row>
                        </Card>
                    </Col>
                </Container> 
            </div> 
        );
    }
}

const mapStateToProps = (state) => {
    return {
        file: state.fileToSend,
        loginAccountInfo: state.loginAccountInfo
    };
};

export default connect(mapStateToProps)(UpdateProfilePicture);
