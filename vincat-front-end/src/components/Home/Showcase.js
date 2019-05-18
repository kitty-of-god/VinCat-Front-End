//Dependencies
import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/showcase/img1.jpg';
import img2 from '../../assets/showcase/img2.jpg';
import img3 from '../../assets/showcase/img3.jpg';

class Showcase extends Component{
  constructor(props, context){
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e){
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }
  render(){
    const {index, direction} = this.state;
    return(
      <div className="row" style={{justifyContent:'center', margin:'20px'}} variant="dark">
      <div  className="col-md-6 col-md-offset-3">
        <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100"
            src={img1}
            alt="Placeholder"
            style={{width:"300px",height:"300px"}}
            />
            <Carousel.Caption variant="dark">
              <h3>Cat Placeholder</h3>
              <p> Lorem ipsum vitae, valar morghulis</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100"
            src={img2}
            alt="Placeholder"
            style={{width:"300px",height:"300px"}}
            />
            <Carousel.Caption variant="dark">
              <h3>Cat Placeholder</h3>
              <p> Lorem ipsum vitae, valar morghulis</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100"
            src={img3}
            alt="Placeholder"
            style={{width:"300px",height:"300px"}}
            />
            <Carousel.Caption>
              <h3>Cat Placeholder</h3>
              <p> Lorem ipsum vitae, valar morghulis</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      </div>
    );
  }
}

export default Showcase;
