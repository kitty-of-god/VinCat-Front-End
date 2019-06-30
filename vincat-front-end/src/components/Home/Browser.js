//Dependencies
import React, {Component, Fragment} from 'react';
import {Button, Container, Tabs, Tab, Row, Col} from 'react-bootstrap';
import ProductCard from "./ProductCard";
import axios from 'axios';
import {storeLoginAccountInfo, storeProcutInfo} from '../../actions';
import {connect} from "react-redux";
//Assets
import jacketsPlaceholder from '../../assets/browser/jacketsPlaceholder.jpg';


//Test stuff, plz ignore
import Display from "./Display";


class Browser extends Component{

  constructor(props){
    super(props);
    this.state = {
      products: "no data",
      page: 1,
      isLoading: false,
    }

   // this.fetchProducts =  this.fetchProducts.bind(this);
  }

  componentDidMount() {
      axios.get(`https://vnct01.herokuapp.com/products/getKind?kind=Pant&page=${this.state.page}`)
        .then(res => {
          this.setState({
            products: res.data.map((product,i)=>
              <Col key={i}>
                <ProductCard info={
                  {
                    image:jacketsPlaceholder,
                    productName: product.name,
                    price: product.price,
                    user: product.user_id,
                    description: product.description,
                    id: product.id
                  }
                }/>
              </Col>
            )
          });

        })
    }

    /*fetchProducts(){
      axios.get(`https://vnct01.herokuapp.com/products/getKind?kind=Pant&page=${this.state.page}`)
        .then(res => {
          return( res.data.map((product)=>
            <Col key={product.name}>
              <ProductCard info={
                {image:jacketsPlaceholder,
                productName: product.name,
                price: product.price,
                user: product.user_id,
                description: product.description,
                }
              }/>
            </Col>))
        })
    }
*/
  render(){

    return(
      <Fragment>
        <Container>
          <Display title="Scarfs"/>
          <Display title="pants"/>
        </Container>
      </Fragment>
    );
  }
}

export default Browser;
