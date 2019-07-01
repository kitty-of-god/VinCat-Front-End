import React, { Component } from 'react';
import MainProfile from "./MainProfile";
import UpdateProfile from "./UpdateProfile";
import UploadFiles from '../Sell/UploadFiles';
import UpdateProfilePicture from './UpdateProfilePicture';
import {Col, Form, Container } from 'react-bootstrap';
import Statistics from './Statistics';

class RenderMyAccount extends Component {

    constructor (props) {
        super(props)
        this.state = {
          loading: false
        } 
    }

    render() {
        if (this.props.optionRender === 'MAIN_PROFILE'){
            return(
                <Container>
                    <Col className='mt-5'>
                        <h2 style={{ textAlign:'left'}}>My Profile</h2>
                        <hr className="style1"/>
                        <MainProfile/>
                    </Col>
                </Container>
            );
        }
        
        if (this.props.optionRender === 'UPDATE_PROFILE_INFO'){
            return(
                
                <Container>
                    <Col className='mt-5'>
                        <h2 style={{ textAlign:'left'}}>Update Profile Information</h2>
                        <hr className="style1"/>
                        <UpdateProfile/>
                    </Col>
                </Container>
            );
        }

        if (this.props.optionRender === 'UPDATE_PROFILE_PHOTO'){
            return(
                
                <Container>
                    <Col className='mt-5'>
                        <h2 style={{ textAlign:'left'}}>Update Profile Picture</h2>
                        <hr className="style1"/>
                        <br/>
                        <UpdateProfilePicture/>
                    </Col>
                </Container>
            );
        }
        if (this.props.optionRender === 'MY_MESSAGES'){
            return(
                <Container>
                    <Col className='mt-5'>
                        <h2 style={{ textAlign:'left'}}>My messages</h2>
                        <hr className="style1"/>
                        {'En construccion'}
                    </Col>
                </Container>
                
            );
        }
        if (this.props.optionRender === 'STATISTICS'){
            return(
                <Container >
                    <Col className='mt-5'>
                        <h2 style={{ textAlign:'left'}}>Statistics</h2>
                        <hr className="style1"/>
                        <Statistics/>
                    </Col>
                </Container>
            );
        }


        return (
            <Container>
                    <Col className='mt-5'>
                        <h2 style={{ textAlign:'left'}}>My Profile</h2>
                        <hr className="style1"/>
                        <MainProfile/>
                    </Col>
            </Container>
        );
    }
}

export default RenderMyAccount;
