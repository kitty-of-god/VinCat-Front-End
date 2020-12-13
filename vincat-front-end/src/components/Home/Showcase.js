//Dependencies
import React, {Component} from 'react';
import {Row, Col, Card, Container, Carousel, Tab, Nav} from 'react-bootstrap';
import axios from "axios";

const name = "rose";
const productUrl = "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
class Showcase extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentActive:"hot"
    }
  }

  componentDidMount(){
    axios.get(process.env.backend_url`/images/productImages`)
        .then(res => {
          console.log(res.data)
          this.setState({
            imag: res.data.map((imag)=>
                <div>
                  <img src= {imag.photo}/>
                </div>
            )
          });
          console.log(this.state.imag)
        })
  }

  render(){
    return(
      <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col>
              <Nav fill variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Hot!</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">New</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Featured</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm='auto'>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        src={productUrl}
                        alt="First slide"
                        width="500"
                        height="326"
                    />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                          src={productUrl}
                          alt="First slide"
                          width="500"
                          height="326"
                      />

                    </Carousel.Item>
                  </Carousel>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <Carousel>
                  <Carousel.Item>
                    <img
                      src={productUrl}
                      alt="First slide"
                      width="500"
                      height="326"
                    />
                  </Carousel.Item>
                </Carousel>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <Carousel>
                  <Carousel.Item>
                    <img
                      src={productUrl}
                      alt="First slide"
                      width="500"
                      height="326"
                    />
                  </Carousel.Item>
                </Carousel>
                </Tab.Pane>

              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

export default Showcase;
