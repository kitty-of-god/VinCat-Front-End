//Dependencies
import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

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
        <div classname="ProductCardContent">
          <span className="ProductCardPriceBlock"><span>$</span>{price}</span>
          <p>{productName}</p>
          <Button href="/product" size="sm">Buy</Button>
        </div>
      </div>
    );
  }
}

export default ProductCard;
