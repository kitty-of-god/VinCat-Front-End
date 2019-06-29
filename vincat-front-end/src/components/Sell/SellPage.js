import React,{Component} from 'react';
import '../../styles/App.css';
import {Button, ButtonToolbar, Card, Col, Form, Row, Container} from "react-bootstrap";
import axios from "axios";
import { connect } from 'react-redux';
import {storeLoginAccountInfo} from "../../actions";
import {LinkContainer} from "react-router-bootstrap";
import UploadFiles from "./UploadFiles";


class SellPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            isLoading: false,
            valid: "undefined",
            validRegister: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        //axios.defaults.baseURL = "https://vnct01.herokuapp.com";
        axios.defaults.headers.common["Authorization"] = this.props.loginAccountInfo.key;

    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleFormSubmit(e){
        e.preventDefault();

        const products = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            kind: this.state.kind,
            quantity: this.state.quantity,
            new: this.state.new,
            gender: this.state.gender,
            user_id:this.props.loginAccountInfo.id
        };

        this.setState({ isLoading: true });

        axios.post(`https://vnct01.herokuapp.com/products?user_email=${this.props.loginAccountInfo.accountInfo}&user_token=${this.props.loginAccountInfo.key}`, {products}
        ).then(res => {
            this.setState({valid: "nan", isLoading: false, validRegister: true})
            console.log(res);
            console.log(res.data, "RESPUESTA_CREACION_PRODUCTO");

            axios.post("https://vnct01.herokuapp.com/images", {
                images: {
                  name: this.props.file.name,
                  imageable_id: res.data.id,
                  imageable_type: this.props.file.type,
                  photo: this.props.file.photo
                }
            }).then(res => {
                console.log(res, "RESPUESTA_ALMACEN_IMAGEN");
            }).catch(e => {
                console.log(e, "error");
            });

        }).catch(error => {
            this.setState({valid: error.response.data , isLoading: false})
        });

        console.log(products);
    }

    render(){
        const  isLoading  = this.state.isLoading;
        const userValidation = this.state.valid;
        console.log(this.state.valid);
        console.log(this.props.loginAccountInfo, "LLAVE");
        console.log(this.props.file, "FOTO_SUBIDA_LISTA");
        let message;

        if (userValidation.name !== undefined){
            console.log(userValidation.name)
            message = <Form.Label>El nombre del producto no es valido</Form.Label>;
        }

        if (userValidation.quantity !== undefined){
            message = <Form.Label>Solo se permiten numeros en la cantidad</Form.Label>;
        }

        if (userValidation.price !== undefined){
            message = <Form.Label>Solo se permiten numeros en el precio</Form.Label>;
        }

        if (userValidation.description !== undefined){
            message = <Form.Label>La descripcion no es valida.</Form.Label>;
        }

        if(this.state.validRegister == true) {
            return(
                <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Card className="text-center"  >
                                <Card.Header>
                                    <h1>Vender productos en @VinCat </h1>
                                </Card.Header>

                                <Card.Body >
                                    <Form className="justify-content-md-center" onSubmit={this.handleFormSubmit}>
                                        <Form.Group as={Row} className="justify-content-md-center">
                                            <Col sm={7}>
                                                <p>Tu producto a sido publicado.</p>
                                                <LinkContainer to="/home" ><Button size="sm">Ver productos publicados</Button></LinkContainer>
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
        
        return(
            <Container>
                <Card>
                    <Card.Header>
                        <h1>Vende tus productos </h1>
                    </Card.Header>

                    <Card.Body >
                        <Form className="justify-content-md-center" onSubmit={this.handleFormSubmit}>
                            <Form.Group as={Col}>
                                <Col>
                                    {message}
                                    <h4> 1.Añade una foto de tu producto.</h4>
                                    <hr className="style1"/>
                                    <UploadFiles/>
                                </Col>

                                <Col className='mt-5'>
                                    <h4> 2. Describe tu producto.</h4>
                                    <hr className="style1"/>
                                    <h6> Nombre del producto</h6>
                                    <Form.Control onChange={this.handleChange} type="name" placeholder="Nombre*" name="name" />
                                </Col>
                            </Form.Group>

                            <Col>
                                <Form.Group as={Row}>
                                    <Row className='p-5' >
                                        <Form.Label>Genero</Form.Label>
                                        <Form.Control as="select" onChange={this.handleChange} type="gender" placeholder="Genero*" name="gender" >
                                            <option>...choose</option>
                                            <option>Hombre</option>
                                            <option>Mujer</option>
                                            <option>Unisex</option>
                                        </Form.Control>
                                    </Row>

                                    <Row className='p-5'>
                                        <Form.Label>Tipo</Form.Label>
                                        <Form.Control as="select" onChange={this.handleChange} type="kind" placeholder="Tipo*" name="kind" >
                                            <option>...</option>
                                            <option>Pantalon</option>
                                            <option>Zapatos</option>
                                        </Form.Control>
                                    </Row>

                                    <Row className='p-5'>
                                        <Form.Label>Es nuevo?</Form.Label>
                                        <Form.Control as="select" onChange={this.handleChange} type="new" placeholder="Es nuevo?*" name="new" >
                                            <option>...</option>
                                            <option>true</option>
                                            <option>false</option>
                                        </Form.Control>
                                    </Row>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group as={Col} >
                                    <Form.Label>Cantidad</Form.Label>
                                    <Form.Control onChange={this.handleChange} placeholder="Cantidad*" name="quantity" >
                                    </Form.Control>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group as={Col} >
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control onChange={this.handleChange} placeholder="Precio*" name="price" >
                                    </Form.Control>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group as={Col} >
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} onChange={this.handleChange}  placeholder="Descripcion*" name="description" >
                                    </Form.Control>
                                </Form.Group>
                            </Col>

                            <Form.Group as={Col} className="justify-content-md-center" >
                                <Col sm={7}>
                                    <Button type="submit" disabled={isLoading}>{isLoading ? 'Cargando…' : 'Publicar producto'}</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loginAccountInfo: state.loginAccountInfo,
        file: state.fileToSend
    };
};

export default connect(mapStateToProps)(SellPage);
