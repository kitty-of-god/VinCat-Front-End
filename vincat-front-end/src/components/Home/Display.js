//Dependencies
import React, {Component, Fragment} from 'react';
import {Container, Row, Col,Button} from 'react-bootstrap';
import ProductCard from './ProductCard';
import SliderButton from './SliderButton';

import jacketsPlaceholder from '../../assets/browser/jacketsPlaceholder.jpg';

class Display extends Component{
  constructor(props){
    super(props);
    this.state={
      buttonHidden:false
    }
    this.toggleButton = this.toggleButton.bind(this);
  }
  toggleButton(){
    this.setState({buttonHidden:!this.state.buttonHidden})
  }

  render(){
    return(
      <Fragment>
        <Container style={{margin:"20px 0px 70px"}} onMouseEnter={this.toggleButton} onMouseLeave={this.toggleButton}>
          <Row>
            <h1 style={{color:"#666666"}}>{this.props.title}</h1>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
          <SliderButton string="&laquo;" isHidden={this.state.buttonHidden}/>
          <ProductCard info={
            {
              image:jacketsPlaceholder,
              productName: "Chaqueta caqui",
              price: "23",
              user: "teofilo",
              description: "una linda chaqueta",
              id: "lo0"
            }
          }/>
          <ProductCard info={
            {
              image:jacketsPlaceholder,
              productName: "Chaqueta caqui",
              price: "23",
              user: "teofilo",
              description: "una linda chaqueta",
              id: "lo0"
            }
          }/>
          <ProductCard info={
            {
              image:jacketsPlaceholder,
              productName: "Chaqueta caqui",
              price: "23",
              user: "teofilo",
              description: "una linda chaqueta",
              id: "lo0"
            }
          }/>
          <ProductCard info={
            {
              image:jacketsPlaceholder,
              productName: "Chaqueta caqui",
              price: "23",
              user: "teofilo",
              description: "una linda chaqueta",
              id: "lo0"
            }
          }/>
          <SliderButton string="&raquo;" isHidden={this.state.buttonHidden}/>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Display;
