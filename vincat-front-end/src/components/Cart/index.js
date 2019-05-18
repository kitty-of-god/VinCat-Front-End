//Dependencies
import React, {Component} from 'react';
import MyButton from '../MyButton';

class Cart extends Component{
  render(){
    return(
      <div className="Cart">
        <h1>Shopping Cart</h1>
        <MyButton/>
      </div>
    );
  }
}

export default Cart;
