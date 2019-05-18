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
      <Carousel acti
    );
  }
}

export default Showcase;
