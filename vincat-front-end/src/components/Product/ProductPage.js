//Dependencies
import React,{Component} from 'react';
import {Button, ButtonToolbar, Card, CardGroup, Col, Container, Form, Row} from "react-bootstrap";
import jacketsPlaceholder from '../../assets/browser/jacketsPlaceholder.jpg';
import Comment from './Comment'
import CardBody from "reactstrap/es/CardBody";
import CardHeader from "reactstrap/es/CardHeader";
import CardFooter from "reactstrap/es/CardFooter";
import CommentForm from "./CommentForm";




class ProductPage extends Component{
  constructor(props){
    super(props);
  }

  render(){
   // const {image, productName, price, user, description, kind,Isnew,gender } = this.props.info;
    return(

      <Container style={{  justifyContent:'center', alignItems:'center'}}>
        <Row>
        <Col>
          <CardGroup>
        <Card>
          <Card.Header className="text-center">
        <img src ={jacketsPlaceholder} />
          </Card.Header>
          <CardBody>
            <CommentForm/>
        <Comment/>
            <Comment/>
            <Comment/>
          </CardBody>
        </Card>

            <Card>
              <CardHeader>
                <p><h1>Nombre del producto</h1>
                  <h2 className='p-5'>$150.000</h2>
                  <h2 >Rating 5/5</h2>
                </p>
              </CardHeader>
              <CardBody  className="text-center" >
                <h3 className='p-5'>descripcion sdffsdfssssssssssssssssssssss ssssssssssssssssssssssssssssssss ssssssssssssssssssss sssssssssssssss sssssssssssssssss sssssssssss</h3>
                <Button type="submit" >Add to my shooping cart</Button>
              </CardBody>
              <CardFooter> <h4>Usuario</h4> <h4>Rating 5/5</h4></CardFooter>
            </Card>
          </CardGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProductPage;
