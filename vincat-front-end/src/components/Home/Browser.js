//Dependencies
import React, {Component} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from './ProductCard';
import jacketsPlaceholder from '../../assets/browser/jacketsPlaceholder.jpg';

class Browser extends Component{
  render(){
    const object={image:jacketsPlaceholder, productName:"jacket", price:"36000", user:"mike", description:"cool jacket"};
    return(
      <div className="container-fluid">
      <Tabs defaultActiveKey="Pants" id="browser">
        <Tab eventKey="Shirts" title="Shirts">
          <Row>
            <Col>
              <ProductCard info={object}/>
            </Col>
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
