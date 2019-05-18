//Dependencies
import React, {Component} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ClotheCardTest from './ClotheCardTest';
import jacketsPlaceholder from '../../assets/browser/jacketsPlaceholder.jpg';
import pantsPlaceholder from '../../assets/browser/pantsPlaceholder.jpg';
import scarfsPlaceholder from '../../assets/browser/scarfsPlaceholder.jpg';
import shirtsPlaceholder from '../../assets/browser/shirtsPlaceholder.jpg';
import shoesPlaceholder from '../../assets/browser/shoesPlaceholder.jpg';

class Browser extends Component{
  render(){
    return(
      <div>
      <Tabs defaultActiveKey="Pants" id="browser">
        <Tab eventKey="Shirts" title="Shirts">
          <Row>
            <Col><ClotheCardTest image={shirtsPlaceholder}/></Col>
            <Col><ClotheCardTest image={shirtsPlaceholder}/></Col>
            <Col><ClotheCardTest image={shirtsPlaceholder}/></Col>
          </Row>
        </Tab>
        <Tab eventKey="Pants" title="Pants">
          <Container>
            <Row>
              <Col><ClotheCardTest image={pantsPlaceholder}/></Col>
              <Col><ClotheCardTest image={pantsPlaceholder}/></Col>
              <Col><ClotheCardTest image={pantsPlaceholder}/></Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="Shoes" title="Shoes">
          <Row>
            <Col><ClotheCardTest image={shoesPlaceholder}/></Col>
            <Col><ClotheCardTest image={shoesPlaceholder}/></Col>
            <Col><ClotheCardTest image={shoesPlaceholder}/></Col>
          </Row>
        </Tab>
        <Tab eventKey="Jackets" title="Jackets">
          <Row>
            <Col><ClotheCardTest image={jacketsPlaceholder}/></Col>
            <Col><ClotheCardTest image={jacketsPlaceholder}/></Col>
            <Col><ClotheCardTest image={jacketsPlaceholder}/></Col>
          </Row>
        </Tab>
        <Tab eventKey="Scarfs" title="Scarfs">
          <Row>
            <Col><ClotheCardTest image={scarfsPlaceholder}/></Col>
            <Col><ClotheCardTest image={scarfsPlaceholder}/></Col>
            <Col><ClotheCardTest image={scarfsPlaceholder}/></Col>
          </Row>
        </Tab>
      </Tabs>
      </div>
    );

  }
}

export default Browser;
