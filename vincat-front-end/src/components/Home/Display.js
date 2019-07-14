//Dependencies
import React, {Component, Fragment} from 'react';
import {Container, Row, Col,Button} from 'react-bootstrap';
import ProductCard from './ProductCard';
import axios from 'axios';

import jacketsPlaceholder from '../../assets/browser/jacketsPlaceholder.jpg';

class Display extends Component{
  constructor(props){
    super(props);
    this.state={
      buttonHidden:false,
      currentPage: 1,
    }
    this.toggleButton = this.toggleButton.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggleButton(){
    this.setState({buttonHidden:!this.state.buttonHidden})
  }

  handleClick(button, e ){
    e.preventDefault();
    console.log(`${button} was clicked`);
    if(button=="next" && this.state.currentPage < 3){
        this.setState({currentPage: this.state.currentPage + 1});
    }else if(button=="prev" && this.state.currentPage > 1){
        this.setState({currentPage: this.state.currentPage - 1});
    }
  }

  componentDidMount() {

          console.log("funciona")

      axios.get(`https://vnct01.herokuapp.com/products/getKind?kind=${this.props.type}&page=${this.state.currentPage}`)
        .then(res => {
          console.log(res.data);
          this.setState({
            products: res.data.map((product,i)=>
                <ProductCard key={i} info={
                  {
                    image:product.images,
                    productName: product.name,
                    price: product.price,
                    user: product.user_id,
                    description: product.description,
                    id: product.id
                  }
                }/>
            )
          });

        })

    }

  render(){

    let buttonStyle;
    if (this.state.buttonHidden) {
     buttonStyle = {fontSize:"24px", borderRadius:"100%",height:"50px",width:"50px",opacity:"1"}
   } else {
     buttonStyle = {fontSize:"24px", borderRadius:"100%",height:"50px",width:"50px",opacity:"0"}
   }
    return(
      <Fragment>
        <Container style={{margin:"20px 0px 70px"}} onMouseEnter={this.toggleButton} onMouseLeave={this.toggleButton} fluid>
          <Row>
            <h1 style={{color:"#666666"}}>{this.props.title}</h1>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Button style={buttonStyle} variant="light" onClick={this.handleClick.bind(this,"prev")}>&laquo;</Button>
            {this.state.products}
            <Button style={buttonStyle} variant="light" onClick={this.handleClick.bind(this,"next")}>&raquo;</Button>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Display;
