import React,{Component} from 'react';
import '../../styles/App.css';
import {Button, ButtonToolbar, Card, Col, Form, Row, Container} from "react-bootstrap";
import axios from "axios";




class SellPage extends Component{
    constructor(props){
        super(props);

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

        const products = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            kind: this.state.kind,
            quantity: this.state.quantity,
            new: this.state.new,
            gender: this.state.gender,
            user_id:"1",

        };
        axios.post('https://vincat-dangulos.c9users.io/products', {products}

        )
            .then(res => {
                console.log(res);
                console.log(res.data);
            }).catch(error => {



        });

        console.log(products);
    }
    render(){
        console.log(this.state);
        return(

            <Container>

                        <Card>
                            <Card.Header>

                                <h1>Sell your products </h1>

                            </Card.Header>

                            <Card.Body >
                                <Form className="justify-content-md-center" onSubmit={this.handleFormSubmit}>
                                    <Form.Group as={Col} controlId="formHorizontalProductname">

                                            <Col>
                                            <h4> 1.Add pictures.</h4>

                                            <hr className="style1"/>
                                            <Button>Subir foto </Button>
                                            </Col>


                                        <Col className='mt-5'>
                                               <h4> 2. Describe your product.</h4>
                                               <hr className="style1"/>
                                            <h6> Product name</h6>
                                               <Form.Control onChange={this.handleChange} type="name" placeholder="name*" name="name" />

                                        </Col>

                                    </Form.Group>
                                    <Col>
                                    <Form.Group as={Row} controlId="formHorizontalUsername" >

                                            <Row className='p-5' >
                                                <Form.Label>Gender</Form.Label>
                                                <Form.Control as="select" onChange={this.handleChange} type="gender" placeholder="Gender*" name="gender" >
                                                    <option>...choose</option>
                                                    <option>man</option>
                                                    <option>woman</option>
                                                </Form.Control>
                                            </Row>
                                            <Row className='p-5'>
                                        <Form.Label>Kind</Form.Label>
                                        <Form.Control as="select" onChange={this.handleChange} type="kind" placeholder="Kind*" name="kind" >
                                            <option>...choose</option>
                                            <option>Pant</option>
                                            <option>Shoe</option>
                                        </Form.Control>
                                    </Row>
                                        <Row className='p-5'>
                                            <Form.Label>New?</Form.Label>
                                            <Form.Control as="select" onChange={this.handleChange} type="new" placeholder="New*" name="new" >
                                                <option>...choose</option>
                                                <option>true</option>
                                                <option>false</option>
                                            </Form.Control>
                                        </Row>



                                    </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group as={Col} controlId="formHorizontalPassword">
                                            <Form.Label>Quantity</Form.Label>
                                            <Form.Control onChange={this.handleChange} type="quantity" placeholder="Quantity*" name="quantity" >
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col>

                                    <Form.Group as={Col} controlId="formHorizontalPassword">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={3} onChange={this.handleChange} type="description" placeholder="description" name="description" >

                                        </Form.Control>

                                    </Form.Group>
                                    </Col>
                                    <Col>
                                    <Form.Group as={Col} controlId="formHorizontalPassword">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control onChange={this.handleChange} type="text" placeholder="price" name="price" >

                                        </Form.Control>
                                    </Form.Group>
                                    </Col>
                                    <Form.Group as={Col} className="justify-content-md-center" >
                                        <Col sm={7}>

                                            <Button type="submit">Publicar producto</Button>
                                        </Col>

                                    </Form.Group>


                                </Form>
                            </Card.Body>

                        </Card>


            </Container>
        );
    }


}

export default SellPage;