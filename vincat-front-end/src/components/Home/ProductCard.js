//Dependencies
import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap";

//Assets
import '../../styles/ProductCard.css';

class ProductCard extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {image, productName, price, user, description} = this.props.info;

    return(
      <div className="ProductCardWrapper">
        <div className="ProductCardImage">
          <img src={image}/>
        </div>
        <div className="ProductCardContent">
          <span className="ProductCardPriceBlock">
            <span>$</span>
            {price}
          </span>
          <p>{productName}</p>
          <LinkContainer to="/product"><Button size="sm">Buy</Button></LinkContainer>
        </div>
      </div>
    );
  }
}

export default ProductCard;
