//Dependencies
import React, {Component} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from './ProductCard';
import axios from 'axios';

//Assets
import jacketsPlaceholder from '../../assets/browser/jacketsPlaceholder.jpg';

class Browser extends Component{

  constructor(props){
    super(props);
    this.state = {
      products: "no data",
      page: 1,
      isLoading: false,
    }

    this.fetchProducts =  this.fetchProducts.bind(this);
  }

  componentDidMount() {
      axios.get(`https://vincat-dangulos.c9users.io/products/getKind?kind=Pant&page=1`)
        .then(res => {
          const products = res.data;
          this.setState({
            products: res.data.map((product)=>
              <Col key={product.name}>
                <ProductCard info={
                  {image:jacketsPlaceholder,
                  productName: product.name,
                  price: product.price,
                  user: product.user_id,
                  description: product.description,
                  }
                }/>
              </Col>
            )
          });
        })
    }

    fetchProducts(){
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

  render(){
    console.log(this.state);

    return(
      <div className="container-fluid">
      <Button
      onClick={()=>{this.setState({page: this.state.page-1})}}
      style={
        {
          position:"relative",
          top:"200px",
          zIndex: "700"
        }
      }
      >
        Prev
      </Button>
      <Button
      onClick={()=>{this.setState({page: this.state.page+1})}}
      style={
        {
          position:"relative",
          left:"90vw",
          top:"200px",
          zIndex: "700"
        }
      }
      >
        Next
      </Button>
      <Tabs defaultActiveKey="Shirts" id="browser">
        <Tab eventKey="Shirts" title="Shirts">
          <Row>
            {this.state.products}
          </Row>
        </Tab>
        <Tab eventKey="Pants" title="Pants">
          <Container>
            <Row>

            </Row>
          </Container>
        </Tab>
        <Tab eventKey="Shoes" title="Shoes">
          <Row>

          </Row>
        </Tab>
        <Tab eventKey="Jackets" title="Jackets">
          <Row>

          </Row>
        </Tab>
        <Tab eventKey="Scarfs" title="Scarfs">
          <Row>

          </Row>
        </Tab>
      </Tabs>
      </div>
    );

  }
}

export default Browser;
