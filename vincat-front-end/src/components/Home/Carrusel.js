import React, {Component, Fragment} from 'react';
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
                        <Carousel.Item style={{width:"500", height:"326"}}>
                            <img
                                src={imag.photo}
                                alt="First slide"
                                width="500px"
                                height="326px"
                                />
                        </Carousel.Item>

                    )
                });
                console.log(this.state.imag)
            })



    }

    render(){
      return(
        <Container wrap={false} style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}>
          <Carousel style={{width:"500px"}}>
            {this.state.imag}
          </Carousel>
        </Container>
        );
    }
}
const mapStateToProps = (state) => {
    return state;
};
export default Carrusel;
