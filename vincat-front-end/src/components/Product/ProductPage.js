//Dependencies
import React,{Component} from 'react';
import {Button, ButtonToolbar, Card, CardGroup, Col, Container, Form, Row} from "react-bootstrap";
import jacketsPlaceholder from '../../assets/browser/jacketsPlaceholder.jpg';
import Comment from './Comment'
import CardBody from "reactstrap/es/CardBody";
import CardHeader from "reactstrap/es/CardHeader";
import CardFooter from "reactstrap/es/CardFooter";
import CommentForm from "./CommentForm";
import { connect } from 'react-redux';
import axios from "axios";




class ProductPage extends Component{
  constructor(props){
    super(props);
  }
    state = {
        product: [],
        user: []
    }

    componentDidMount() {

        axios.get('https://vincat-dangulos.c9users.io/products/1')
            .then(res => {
                const product = res.data;
                this.setState({product});
                axios.get(`https://vincat-dangulos.c9users.io/users/${this.state.product.user_id}`)

                    .then(res => {
                        const user = res.data;
                        this.setState({user});
                    })
            })




    }



  render(){
   // const {image, productName, price, user, description, kind,Isnew,gender } = this.props.info;

      console.log(this.state.product);
      console.log(this.state.user);
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
                <p><h1>{this.state.product.name}</h1>
                  <h2 className='p-5'>${this.state.product.price}</h2>
                  <h2 >Rating 5/5</h2>
                </p>
              </CardHeader>
              <CardBody  className="text-center" >
                <h3 className='p-5'>{this.state.product.description}</h3>
                <Button type="submit" >Add to my shooping cart</Button>
              </CardBody>
              <CardFooter> <h4>{this.state.user.name}</h4> <h4>Rating 5/5</h4></CardFooter>
            </Card>
          </CardGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
    return {loginAccountInfo: state.loginAccountInfo};
};
export default connect(mapStateToProps)(ProductPage);
