//Dependencies
import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap";
import {storeLoginAccountInfo, storeProductInfo} from '../../actions';
//Assets
import '../../styles/ProductCard.css';
import {connect} from "react-redux";

class ProductCard extends Component{
  constructor(props){
    super(props);
      this.state = {
           infoKey : {

              id:this.props.info.id
          }
      }

      console.log(this.props.info.price);
      this.handleClick=this.handleClick.bind(this);
  }
//<LinkContainer to="/product" ><Button size="sm"  onClick={this.handleClick}>Buy</Button></LinkContainer>
handleClick()
{

    console.log("asdfasdfasdfsad123");
    console.log(this.props.info.price);
    this.props.storeProductInfo(this.state.infoKey);

}
  render(){
    const {image, productName, price, user, description, id} = this.props.info;

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
            <LinkContainer to="/product" ><Button size="sm"  onClick={this.handleClick}>Buy</Button></LinkContainer>

        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return state;
};
export default connect(mapStateToProps, {storeProductInfo})(ProductCard);

