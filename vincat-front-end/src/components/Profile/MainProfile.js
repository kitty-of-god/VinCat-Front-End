import React,{Component} from 'react';
import {Container} from "react-bootstrap";
import axios from 'axios';
import {Button, ButtonToolbar, Card, Col, Form, Row} from "react-bootstrap";
import { connect } from 'react-redux';
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap";
import stars from '../../assets/stars.png';
import CommentPro from "../Product/CommentPro";




class MainProfile extends Component{

    state = {
        person: [],
        rating: 0,
        image: 'null'
    }

    componentDidMount() {

        axios.get(`https://vnct01.herokuapp.com/users/current?user_email=${this.props.loginAccountInfo.accountInfo}&user_token=${this.props.loginAccountInfo.key}`)
            .then(res => {
                const person = res.data;
                console.log(person)
                this.setState({ person });
                axios.get(`https://vnct01.herokuapp.com/users/userRating?id=${this.props.loginAccountInfo.id}`)
                    .then(res => {
                        const rating = res.data;
                        if(rating == null)
                        {
                            return;
                        }
                        this.setState({rating});
                    })

            })
    }
    render(){
        if(this.state.person.images != undefined)
        {
            if(this.state.person.images.length != 0)
            {
                console.log(this.state.person.images)
                this.state.image = this.state.person.images[0].photo;
            }

        }
        return(
            <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>

                <Row className="justify-content-md-center">
                    <Col>

                                <Card className="text-center"  style={{ width: '20rem' }}>

                                    <Card.Header>
                                        <Row>
                                        <div className="profile-img">
                                            <img
                                                src={this.state.image} alt="" style={{width: 200, height: 200, borderRadius: 200/ 2}} />
                                        </div>

                                                <div className="profile-head">
                                                    <h5>
                                                        {this.state.person.name}
                                                    </h5>
                                                    <p className="proile-rating"><img src={stars}/> <span>{this.state.rating}/5</span></p>
                                                </div>
                                        </Row>
                                    </Card.Header>
                                    <Card.Body >
                                    </Card.Body>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Usuario</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{this.state.person.username}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Nombre</label>
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
                                                <label>Descripcion</label>
                                            </div>
                                        </div>

                                      </Card>
                                       </Col>
                                        </Row>
            </Container>
        );
    }
}
const mapStateToProps = (state) => {
    return {loginAccountInfo: state.loginAccountInfo};
};
export default connect(mapStateToProps)(MainProfile);
