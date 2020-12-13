import React,{Component} from 'react';
import '../../styles/App.css';
import {Button, ButtonToolbar, Card, Col, Form, Row, Container} from "react-bootstrap";
import axios from "axios";
import FacebookLogin from 'react-facebook-login';
import {connect} from "react-redux";
import {LinkContainer} from "react-router-bootstrap";
import {GoogleComponent} from "react-google-location";



const emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const MIN_PASS_LENGTH = 6 ;

class UpdateProfile extends Component{
    constructor(props){
        super(props);

        this.state = {
            isLoading: false,
            valid: "undefined",
            validUpdate: false,
            place: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleFormSubmit(e){
        e.preventDefault();
        this.setState({ isLoading: true });
        //axios.patch(`https://vnct01.herokuapp.com/users/${this.props.loginAccountInfo.id}?user_email=${this.props.loginAccountInfo.accountInfo}&user_token=${this.props.loginAccountInfo.key}`, {users}
        axios.patch(process.env.REACT_APP_backend_url+`/users/${this.props.loginAccountInfo.id}?user_email=${this.props.loginAccountInfo.accountInfo}&user_token=${this.props.loginAccountInfo.key}`, {
            email: this.state.email,
            username: this.state.username,
            role:"natural",
            name: this.state.name,
            description: this.state.description,
            residence: this.state.place.place}
        )
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({valid: "nan", isLoading: false, validUpdate: true})
            }).catch(error => {
            this.setState({valid: error.response.data , isLoading: false})

            //console.log(...error.response.data.name)
            console.log(error.response.data.name)
            console.log(error.response.data.email)
            console.log(error.response.data.username)

        });

    }
    onPlaceSelected = ( place ) => {
        const address = place.formatted_address,
            addressArray =  place.address_components,
            city = this.getCity( addressArray ),
            area = this.getArea( addressArray ),
            state = this.getState( addressArray ),
            latValue = place.geometry.location.lat(),
            lngValue = place.geometry.location.lng();
// Set these values in the state.
        this.setState({
            address: ( address ) ? address : '',
            area: ( area ) ? area : '',
            city: ( city ) ? city : '',
            state: ( state ) ? state : '',
            markerPosition: {
                lat: latValue,
                lng: lngValue
            },
            mapPosition: {
                lat: latValue,
                lng: lngValue
            },
        })
    };
    render(){

        const  isLoading  = this.state.isLoading;
        const userValidation = this.state.valid;
        let  message;
       console.log(this.state)



        if (userValidation.name !== undefined)
        {


            message = <Form.Label>El nombre del usuario no es valido</Form.Label>;
        }

        if (userValidation.email !== undefined)
        {


            message = <Form.Label>El email no es valido</Form.Label>;
        }
        if (userValidation.password !== undefined)
        {


            message = <Form.Label>La contraseña no es valida</Form.Label>;
        }
        if (userValidation.password_confirmation !== undefined)
        {


            message = <Form.Label>Las contraseñas no corresponden</Form.Label>;
        }
        if (userValidation.username !== undefined)
        {


            message = <Form.Label>El username no es valido</Form.Label>;
        }

        if(this.state.validUpdate)
        {
 return(

     <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>


         <Row className="justify-content-md-center">
             <Col md="auto">



                 <Card className="text-center"  >
                     <Card.Header>

                         <h1>Actualizar tu perfil @VinCat </h1>
                     </Card.Header>

                     <Card.Body >



                                 <Col sm={7}>
                                     <h3>Tu perfil ha sido actualizado.</h3>
                                     <LinkContainer to="/profile" ><Button size="md">Ir a mi perfil.</Button></LinkContainer>
                                 </Col>





                     </Card.Body>

                 </Card>

             </Col>
         </Row>
     </Container>
 );
        }
        return(


            <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>


                <Row className="justify-content-md-center">
                    <Col md="auto">



                        <Card className="text-center"  >
                            <Card.Header>

                                <h1>Update profile @VinCat </h1>
                            </Card.Header>

                            <Card.Body >
                                <Form className="justify-content-md-center" onSubmit={this.handleFormSubmit}>
                                    <Form.Group as={Row} controlId="formHorizontalEmail" className="justify-content-md-center">

                                        <Col sm={7}>
                                            {message}
                                            <Form.Control onChange={this.handleChange} type="email" placeholder="Email*" name="email"/>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formHorizontalUsername" className="justify-content-md-center">

                                        <Col sm={7}>
                                            <Form.Control onChange={this.handleChange} type="username" placeholder="Username*" name="username" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formHorizontalName" className="justify-content-md-center">

                                        <Col sm={7}>
                                            <Form.Control onChange={this.handleChange} type="name" placeholder="Name*" name="name" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formHorizontalPassword" className="justify-content-md-center">

                                        <Col sm={7}>
                                            <Form.Control as="textarea" onChange={this.handleChange}

                                                      placeholder="Description*"
                                                      rows="3"
                                                      name="description"/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formHorizontalPassword" className="justify-content-md-center">

                                        <Col sm={7}>
                                            <GoogleComponent

                                                apiKey={'AIzaSyB7VKd9YZS9Jb-8Pj2_8cUnYb1PKLHzPA8'}
                                                language={'es'}
                                                country={'country:us|country:co'}
                                                coordinates={true}
                                                onChange={(e) => { this.setState({ place: e }) }} />

                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="justify-content-md-center">
                                        <Col sm={7}>
                                            <Button type="submit" disabled={isLoading}>{isLoading ? 'Loading…' : 'Update'}</Button>
                                        </Col>

                                    </Form.Group>


                                </Form>
                            </Card.Body>

                        </Card>

                    </Col>
                </Row>

            </Container>
        );
    }


}

const mapStateToProps = (state) => {
    return {loginAccountInfo: state.loginAccountInfo, productInfo: state.productInfo};
};
export default connect(mapStateToProps)(UpdateProfile);
