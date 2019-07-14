import React,{Component} from 'react';
import {Container} from "react-bootstrap";
import axios from 'axios';
import {Button, ButtonToolbar, Card, Col, Form, Row} from "react-bootstrap";
import { connect } from 'react-redux';
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap";
import stars from '../../assets/stars.png';
import CommentPro from "../Product/CommentPro";
import { storeProductInfo, storeUserInfo} from "../../actions";
import Report from "./Report";




class ReportsUser extends Component{

    state = {
        reports: []
    }

    componentDidMount() {

        axios.get(`https://vnct01.herokuapp.com/reports?user_email=${this.props.loginAccountInfo.accountInfo}&user_token=${this.props.loginAccountInfo.key}`)
            .then(res => {
                this.setState({
                    reports: res.data.map((reports)=>
                        <Report info={
                            {
                                message: reports.body,
                                reportable_id: reports.reportable_id,
                                reportable_type : reports.reportable_type
                            }
                        }/>
                    )
                });
            })
    }
    render(){
        return(
            <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>

                <Row className="justify-content-md-center">
                    <Col md="auto">

                        <Card className="text-center"   style={{ width: '60rem' }} >

                            <Card.Header>
                                <Row>
                                    <div className="profile-head">
                                        <h5>
                                            Reportes
                                        </h5>
                                    </div>
                                </Row>
                            </Card.Header>
                            <Card.Body >
                                {this.state.reports}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        loginAccountInfo: state.loginAccountInfo
    };
};

export default connect(mapStateToProps)(ReportsUser);