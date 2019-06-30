import React, {Fragment, Component} from 'react';
import {Button} from 'react-bootstrap';

class SliderButton extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let buttonStyle;
    if (this.props.isHidden) {
     buttonStyle = {fontSize:"24px", borderRadius:"100%",height:"50px",width:"50px",opacity:"1"}
   } else {
     buttonStyle = {fontSize:"24px", borderRadius:"100%",height:"50px",width:"50px",opacity:"0"}
   }
    return(
      <Fragment>
        <Button style={buttonStyle} variant="light">{this.props.string}</Button>
      </Fragment>
    );
  }
}

export default SliderButton;
