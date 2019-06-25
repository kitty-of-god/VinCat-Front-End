//Dependencies
import React,{Component} from 'react';
import {Button, ButtonToolbar, Card, CardGroup, Col, Container, Form, Modal, Row} from "react-bootstrap";
import jacketsPlaceholder from '../../assets/browser/jacketsPlaceholder.jpg';
import Comment from './Comment'
import CardBody from "reactstrap/es/CardBody";
import CardHeader from "reactstrap/es/CardHeader";
import CardFooter from "reactstrap/es/CardFooter";
import CommentForm from "./CommentForm";
import { connect } from 'react-redux';
import axios from "axios";
import ProductCard from "../Home/ProductCard";
import { addProductToCart } from "../../actions";
import {LinkContainer} from "react-router-bootstrap";




class ProductPage extends Component{
  constructor(props){
    super(props);

    this.state = {
      product: [],
      user: [],
      comments:[],
        show: false,
    }
    this.handleClick=this.handleClick.bind(this);
      this.handleClose = this.handleClose.bind(this);

  }

  handleClick(){

      if(this.props.loginAccountInfo) {
          this.props.addProductToCart(this.state.product)
          this.setState({ show: true });
          console.log(this.state.product,'selectedProduct')
      }
      else
      {
          this.setState({ show: true });
      }

  }
    handleClose() {
        this.setState({ show: false });
    }
  componentDidMount() {
    axios.get(`https://vnct01.herokuapp.com/products/${this.props.productInfo.id}`)
      .then(res => {
          const product = res.data;
          const comment = product.ratings;
          this.setState({product});

          console.log(this.state);

          axios.get(`https://vnct01.herokuapp.com/users/${this.state.product.user_id}`)
            .then(res => {
                const user = res.data;
                this.setState({user});
            })
      })
      console.log(this.state.product,'selectedProduct')
      console.log("aca hay error;")
  }

  render(){
    
   // const {image, productName, price, user, description, kind,Isnew,gender } = this.props.info;
    //console.log(this.props.loginAccountInfo.key,'key')
    if(this.props.loginAccountInfo){
      return(

        <Container style={{  justifyContent:'center', alignItems:'center'}}>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Añadir al carrito</Modal.Title>
                </Modal.Header>
                <Modal.Body>Tu producto ha sido añadido al carrito con exito.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>Cerrar</Button>
                    <LinkContainer to="/cart" ><Button size="md">Ir a mi carrito.</Button></LinkContainer>

                </Modal.Footer>
            </Modal>
          <Row>
            <Col>
              <CardGroup>
                <Card>
                  <Card.Header className="text-center">
                    <img src ={jacketsPlaceholder} />
                  </Card.Header>
                  <CardBody>
                      <CommentForm product={this.state.product} user={this.state.user} key={this.props.loginAccountInfo.key} email={this.props.loginAccountInfo.accountInfo}/>
                      <Comment product={this.state.product} user={this.state.user}/>
                      <Comment product={this.state.product} user={this.state.user}/>
                      <Comment product={this.state.product} user={this.state.user}/>
                  </CardBody>
                </Card>

                <Card>
                  <CardHeader>
                    <p>
                      <h1>{this.state.product.name}</h1>
                      <h2 className='p-5'>${this.state.product.price}</h2>
                      <h2 >Rating 5/5</h2>
                    </p>
                  </CardHeader>
                  <CardBody  className="text-center" >
                    <h3 className='p-5'>{this.state.product.description}</h3>
                    <Button 
                      type="button" 
                      onClick={this.handleClick}
                      >Add to my shooping cart
                    </Button>
                  </CardBody>
                  <CardFooter> <h4>{this.state.user.name}</h4> <h4>Rating 5/5</h4></CardFooter>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      );
    }
    return(
      <Container style={{  justifyContent:'center', alignItems:'center'}}>
          <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                  <Modal.Title>Añadir al carrito</Modal.Title>
              </Modal.Header>
              <Modal.Body>Debes registrarte</Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>Cerrar</Button>


              </Modal.Footer>
          </Modal>
          <Row>
              <Col>
                  <CardGroup>
                      <Card>
                          <Card.Header className="text-center">
                              <img src ={jacketsPlaceholder} />
                          </Card.Header>
                          <CardBody>
                              <Comment product={this.state.product} user={this.state.user}/>
                              <Comment product={this.state.product} user={this.state.user}/>
                              <Comment product={this.state.product} user={this.state.user}/>
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
                              <Button 
                                type="button" 
                                onClick={this.handleClick} 
                                >Add to my shooping cart
                              </Button>
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
    return {
      loginAccountInfo: state.loginAccountInfo, 
      productInfo: state.productInfo
    };
};

export default connect(mapStateToProps,{addProductToCart})(ProductPage);