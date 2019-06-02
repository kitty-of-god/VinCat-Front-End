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
  }

  componentDidMount() {
      axios.get(`https://vincat-dangulos.c9users.io/products/getKind?kind=Pant&page=1`)
        .then(res => {
          const products = res.data;
          this.setState({ products });
        })
    }

  render(){
    console.log(this.state);
    return(
      <div className="container-fluid">
      <Tabs defaultActiveKey="Pants" id="browser">
        <Tab eventKey="Shirts" title="Shirts">
          <Row>
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
