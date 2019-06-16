//Dependencies
import React, {Component} from 'react';
import MyButton from '../MyButton';
import ProductToBuy from './ProductToBuy';
import { connect } from 'react-redux';


class Cart extends Component{
  render(){
    return(
      <div className="Cart">
        <h1>Shopping Cart</h1>
        <MyButton/>
        <ProductToBuy products = {this.props.listProductsToBuy} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {listProductsToBuy: state.productsShoppingCart};
};

export default connect(mapStateToProps)(Cart);