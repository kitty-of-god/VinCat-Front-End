import React,{Component} from 'react';
import '../../styles/App.css';
import {Button, ButtonToolbar, Card, Col, Form, Row, Container} from "react-bootstrap";
import axios from "axios";
import { connect } from 'react-redux';
import {storeLoginAccountInfo} from "../../actions";





class SellPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            valid: "undefined"
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

        )
            .then(res => {
                this.setState({valid: "nan", isLoading: false})
                console.log(res);
                console.log(res.data);
            }).catch(error => {
            this.setState({valid: error.response.data , isLoading: false})


        });

        console.log(products);
    }
    render(){
        const  isLoading  = this.state.isLoading;
        const userValidation = this.state.valid;
        console.log(this.state.valid);
        console.log(this.props.loginAccountInfo);
let message;
        if (userValidation.name !== undefined)
        {
            console.log(userValidation.name)

            message = <Form.Label>The name of the proudct is not valid</Form.Label>;
        }

        if (userValidation.quantity !== undefined)
        {


            message = <Form.Label>Only numbers in quantity</Form.Label>;
        }
        if (userValidation.price !== undefined)
        {


            message = <Form.Label>Only numbers in price</Form.Label>;
        }
        if (userValidation.description !== undefined)
        {


            message = <Form.Label>the description is not valid</Form.Label>;
        }

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
                                                {message}
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

                                            <Button type="submit" disabled={isLoading}>{isLoading ? 'Loading…' : 'Publish product'}</Button>
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
    return {loginAccountInfo: state.loginAccountInfo};
};
export default connect(mapStateToProps)(SellPage);