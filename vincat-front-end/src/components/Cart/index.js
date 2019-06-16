//Dependencies
import React, {Component} from 'react';
import MyButton from '../MyButton';
import ProductToBuy from './ProductToBuy';

class Cart extends Component{
  render(){
    return(
      <div className="Cart">
        <h1>Shopping Cart</h1>
        <MyButton/>
        <ProductToBuy />
      </div>
    );
  }
}

export default Cart;
