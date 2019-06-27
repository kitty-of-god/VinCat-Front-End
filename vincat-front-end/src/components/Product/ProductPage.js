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
import CommentPro from "./CommentPro";




class ProductPage extends Component{
  constructor(props){
    super(props);

    this.state = {
      product: [],
      user: [],
      comments:'no info',
        show: 'false',
        productRating: 5,
        userRating: 5
    }
    this.handleClick=this.handleClick.bind(this);
      this.handleClose = this.handleClose.bind(this);

  }

  handleClick(id){

      if(this.props.loginAccountInfo) {
          this.props.addProductToCart(this.state.product)
          this.setState({ show: id });
          console.log(this.state.product,'selectedProduct')
      }
      else
      {
          this.setState({ show: id });
      }

  }
    handleClose(id) {
        this.setState({ show: 'false' });
    }
  componentDidMount() {
    axios.get(`https://vnct01.herokuapp.com/products/${this.props.productInfo.id}`)
      .then(res => {
          const product = res.data;
          this.setState({product});
          axios.get(`https://vnct01.herokuapp.com/users/${this.state.product.user_id}`)
            .then(res => {
                const user = res.data;
                this.setState({user});
                axios.get(`https://vincat-dangulos.c9users.io/users/userRating?id=${this.state.product.user_id}`)
                    .then(res => {
                        const userRating = res.data;

                        this.setState({userRating});
                    })
            })
      })
      axios.get(`https://vincat-dangulos.c9users.io/products/productRating?id=${this.props.productInfo.id}`)
          .then(res => {
              const productRating = res.data;

              this.setState({productRating});
          })
      axios.get(`https://vincat-dangulos.c9users.io/products/getRatings?id=${this.props.productInfo.id}&page=1`)
          .then(res => {
              this.setState({
                  comments: res.data.map((comments)=>
                      <CommentPro info={
                          {
                              rating: comments.rating,
                              message: comments.comment,
                          }
                      }/>
                  )
              });
          })
  }

  render(){
      console.log(this.state);
   // const {image, productName, price, user, description, kind,Isnew,gender } = this.props.info;
    //console.log(this.props.loginAccountInfo.key,'key')
    if(this.props.loginAccountInfo){
      return(

        <Container style={{  justifyContent:'center', alignItems:'center'}}>
            <Modal show={this.state.show == '1'} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Añadir al carrito</Modal.Title>
                </Modal.Header>
                <Modal.Body>Tu producto ha sido añadido al carrito con exito.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>Cerrar</Button>
                    <LinkContainer to="/cart" ><Button size="md">Ir a mi carrito.</Button></LinkContainer>

                </Modal.Footer>
            </Modal>
            <Modal show={this.state.show == '2'} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Reportar al usuario.</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>Cerrar</Button>
                    <LinkContainer to="/cart" ><Button size="md">Reportar usuario</Button></LinkContainer>

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
                      {this.state.comments}
                  </CardBody>
                </Card>

                <Card>
                  <CardHeader>
                    <p>
                      <h1>{this.state.product.name}</h1>
                      <h2 className='p-5'>${this.state.product.price}</h2>
                        <Row><h2 >Rating {this.state.productRating}/5</h2>
                            <Button
                                type="button"
                                onClick={() => this.handleClick('2')}
                            >Report User
                            </Button></Row>

                    </p>
                  </CardHeader>
                  <CardBody  className="text-center" >
                    <h3 className='p-5'>{this.state.product.description}</h3>
                    <Button 
                      type="button" 
                      onClick={() => this.handleClick('1')}
                      >Add to my shooping cart
                    </Button>
                  </CardBody>
                  <CardFooter> <h4>{this.state.user.name}</h4> <h4>Rating {this.state.userRating}/5</h4></CardFooter>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      );
    }
    return(
      <Container style={{  justifyContent:'center', alignItems:'center'}}>
          <Modal show={this.state.show == '1'} onHide={this.handleClose}>
              <Modal.Header closeButton>
                  <Modal.Title>Añadir al carrito</Modal.Title>
              </Modal.Header>
              <Modal.Body>Debes registrarte</Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>Cerrar</Button>


              </Modal.Footer>
          </Modal>
          <Modal show={this.state.show == '2'} onHide={this.handleClose}>
              <Modal.Header closeButton>
                  <Modal.Title>Reportar al usuario.</Modal.Title>
              </Modal.Header>
              <Modal.Body></Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>Cerrar</Button>
                  <LinkContainer to="/cart" ><Button size="md">Reportar usuario</Button></LinkContainer>

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
                              {this.state.comments}
                          </CardBody>
                      </Card>

                      <Card>
                          <CardHeader>
                              <p><h1>{this.state.product.name}</h1>
                                  <h2 className='p-5'>${this.state.product.price}</h2>
                                  <Row><h2 >Rating {this.state.productRating}/5</h2>
                                      <Button
                                          type="button"
                                          onClick={() => this.handleClick('2')}
                                      >Report User
                                      </Button></Row>
                              </p>
                          </CardHeader>
                          <CardBody  className="text-center" >
                              <h3 className='p-5'>{this.state.product.description}</h3>
                              <Button 
                                type="button"
                                onClick={() => this.handleClick('1')}
                                >Add to my shooping cart
                              </Button>


                          </CardBody>
                          <CardFooter> <h4>{this.state.user.name}</h4> <h4>Rating {this.state.userRating}/5</h4></CardFooter>
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