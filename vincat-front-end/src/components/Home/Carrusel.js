import React, {Component} from 'react';
import '../../styles/ProductCard.css';
import Carousel from 'react-bootstrap/Carousel'
import axios from "axios";
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";


class Carrusel extends Component{
    constructor(props){
        super(props);
        this.state = {

            imag: 'no info'


        }
    }
    componentDidMount() {
        axios.get(`https://vnct01.herokuapp.com/images/productImages`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    imag: res.data.map((imag)=>
                        <Carousel.Item>
                            <img
                                src={imag.photo}
                                alt="First slide"
                                className="d-block w-50"
                                width="500"
                                height="326"
                                />
                        </Carousel.Item>

                    )
                });
                console.log(this.state.imag)
            })



    }

    render(){


        return(

                <Container style={{ justifyContent:'center', alignItems:'center'}}>
                        <Row>
                            <Col>
                                <Carousel>
                                    {this.state.imag}
                                </Carousel>

                            </Col>
                        </Row>

                </Container>
        );
    }
}
const mapStateToProps = (state) => {
    return state;
};
export default Carrusel;

