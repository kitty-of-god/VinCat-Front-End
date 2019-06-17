//Dependencies
import React, {Component} from 'react';
import MyButton from '../MyButton';
import ProductToBuy from './ProductToBuy';
import { connect } from 'react-redux';
import { Card, Container } from 'react-bootstrap';

class Cart extends Component{
  render(){
    return(
      <div className="Cart">
        <Container>
          <Card>
            <Card.Header>
              <h1>Shopping Cart</h1>
            </Card.Header >
            <Card.Body bg="warning">
              <ProductToBuy products = {this.props.listProductsToBuy} />
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {listProductsToBuy: state.productsShoppingCart};
};

export default connect(mapStateToProps)(Cart);