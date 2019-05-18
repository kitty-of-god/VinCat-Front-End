//Dependencies
import React, {Component} from 'react';
import jacketsPlaceholder from '../../assets/browser/jacketsPlaceholder.jpg';
import pantsPlaceholder from '../../assets/browser/pantsPlaceholder.jpg';
import scarfsPlaceholder from '../../assets/browser/scarfsPlaceholder.jpg';
import shirtsPlaceholder from '../../assets/browser/shirtsPlaceholder.jpg';
import shoesPlaceholder from '../../assets/browser/shoesPlaceholder.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ClotheCardTest extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Card style={{ width: '15rem', margin:'1px',fontSize:'14px'}}>
        <Card.Img variant="top" src={this.props.image} style={{width:'200px'}}/>
        <Card.Body>
          <Card.Title>Product</Card.Title>
          <Card.Subtitle>User xxx</Card.Subtitle>
          <Card.Text>
            I want to sell this stuff over the internet y'all.
          </Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default ClotheCardTest;
