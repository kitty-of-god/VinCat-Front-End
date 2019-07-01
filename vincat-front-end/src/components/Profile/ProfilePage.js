import React,{Component} from 'react';
import '../../styles/App.css';
import {Form,Container,Image,Card, Button, Col, Row, CardGroup} from "react-bootstrap";
import {connect} from "react-redux";
import profile from "../../assets/profile.png"
import RenderMyAccount from './RenderMyAccount';

class ProfilePage extends Component{
    constructor(props){
        super(props);

        this.state = {
            optionRender : null,
            title: 'My Account'
        }
        console.log(this.state.optionRender)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        console.log(this.state.optionRender)
        e.preventDefault();
        this.setState({
            optionRender:e.target.name
        })
    }

    componentWillMount(){
        
    }

    render(){
        return(
            <Container  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row >
                    <CardGroup >
                        <Col xs={12} md={3} style={{ backgroundColor:'white'}}>
                            <br/>
                            <Card border="light">
                                <Row className="justify-content-md-center">
                                    <Col>
                                        <Card border="light" >
                                            <Col>
                                                <br/>  
                                                <Image src={profile} fluid roundedCircle />
                                            </Col>
                                            
                                            <Card.Title >
                                                <br/>  
                                                <h3 fluid style={{ textAlign:'center'}}> Pepito Perez </h3>
                                            </Card.Title> 
                                        </Card>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <Card border="light">
                                        <Button type='submit' name='MAIN_PROFILE' variant="light" onClickCapture={this.handleChange} style={{ textAlign:'left'}}>My profile</Button>
                                            <Button type='submit' name='UPDATE_PROFILE_PHOTO' variant="light" onClickCapture={this.handleChange} style={{ textAlign:'left'}}>Update profile picture</Button>
                                            <Button type='submit' name='UPDATE_PROFILE_INFO' variant="light" onClickCapture={this.handleChange} style={{ textAlign:'left'}}>Update profile information</Button>
                                            <Button type='submit' name='MY_MESSAGES' variant="light" onClickCapture={this.handleChange} style={{ textAlign:'left'}}>My Messages</Button>
                                            <Button type='submit' name='STATISTICS' variant="light" onClickCapture={this.handleChange} style={{ textAlign:'left'}}>Statistics</Button>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        
                        <Card>
                            <Col xs={12} md={12}>
                                <Row>
                                    <Col>
                                        <Card.Body>
                                            <RenderMyAccount optionRender={this.state.optionRender}/>
                                        </Card.Body>
                                    </Col>
                                </Row>   
                            </Col>
                        </Card>
                    </CardGroup>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {loginAccountInfo: state.loginAccountInfo, productInfo: state.productInfo};
};
export default connect(mapStateToProps)(ProfilePage);

