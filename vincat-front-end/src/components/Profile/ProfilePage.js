import React,{Component} from 'react';
import {Container} from "react-bootstrap";
import axios from 'axios';
import {Button, ButtonToolbar, Card, Col, Form, Row} from "react-bootstrap";




class ProfilePage extends Component{

    state = {
        person: []
    }

    componentDidMount() {
        axios.get(`https://vincat-dangulos.c9users.io/users/current?user_email=test@test.com&user_token=3yQ8Qan8wWPARWNLYVtd`)
            .then(res => {
                const person = res.data;
                this.setState({ person });
            })
    }
    render(){
        return(
            <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>

                <Row className="justify-content-md-center">
                    <Col md="auto">

                                <Card className="text-center"  >

                                    <Card.Header>
                                        <Row>
                                        <div className="profile-img">
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" style={{width: 200, height: 200, borderRadius: 200/ 2}} />
                                        </div>

                                                <div className="profile-head">
                                                    <h5>
                                                        {this.state.person.name}
                                                    </h5>
                                                    <p className="proile-rating">RANKINGS : <span>8/10</span></p>

                                                </div>

                                        </Row>
                                    </Card.Header>

                                    <Card.Body >


                                    </Card.Body>






                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Username</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{this.state.person.username}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{this.state.person.name}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{this.state.person.email}</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Description</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{this.state.person.description}</p>
                                            </div>
                                        </div>

                                      </Card>
                                       </Col>
                                        </Row>
            </Container>
        );
    }
}

export default ProfilePage;
