import React, { Component } from 'react';
import {Card,Button, Row, Container, Form,Col} from "react-bootstrap";
import '../../styles/App.css'
import UploadFiles from "../Sell/UploadFiles";
import axios from "axios";
import { connect } from 'react-redux';

class UpdateProfilePicture extends Component {

    constructor (props) {
        super(props)
        this.state = {
            isLoading: false,
            valid: "undefined"
        }
        axios.defaults.headers.common["Authorization"] = this.props.loginAccountInfo.key; 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        axios.post("https://vnct01.herokuapp.com/images", {
            images: {
                name: this.props.file.name,
                imageable_id: this.props.loginAccountInfo.id,
                imageable_type: "User",
                photo: this.props.file.photo
            }
        }).then(res => {
            console.log(res, "RESPUESTA_ALMACENAMIENTO_IMAGEN");
        }).catch(e => {
            console.log(e, "ERROR");
        });
    }

    render() {
        return (
            <div>
                <Container style={{ display: 'flex', justifyContent:'center', alignItems:'center', height: '80vh'}}>
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
