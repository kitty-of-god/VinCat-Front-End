import React,{Component} from 'react';
import '../../styles/App.css';
import {Form,Container,Image,Card, Button, Col, Row, CardGroup} from "react-bootstrap";
import {connect} from "react-redux";
import profile from "../../assets/profile.png"
import RenderMyAccount from './RenderMyAccount';
import axios from "axios";

class ProfilePage extends Component{
    constructor(props){
        super(props);

        this.state = {
            optionRender : null,
            title: 'My Account',
            person: 'null',
            image: profile
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
        axios.get(process.env.backend_url+`/users/current?user_email=${this.props.loginAccountInfo.accountInfo}&user_token=${this.props.loginAccountInfo.key}`)
            .then(res => {
                const person = res.data;
                console.log(person)
                this.setState({ person });
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
            <Container  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row >
                    <CardGroup >
                        <Col xs={12} md={3} style={{ backgroundColor:'white'}}>
                            <br/>
                            <Card border="light">
                                <Row className="justify-content-md-center">
                                    <Col>
                                        <Card border="light" >
                                            <Card.Header>
                                            <Col>
                                                <br/>  
                                                <Image src={this.state.image} fluid roundedCircle />
                                            </Col>
                                            </Card.Header>
                                            <Card.Title >
                                                <br/>  
                                                <h3 fluid style={{ textAlign:'center'}}> {this.state.person.name} </h3>
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
                                            <Button type='submit' name='STATISTICS' variant="light" onClickCapture={this.handleChange} style={{ textAlign:'left'}}>Statistics</Button>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        
                        <Card style={{ width: '40rem' }}>
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

