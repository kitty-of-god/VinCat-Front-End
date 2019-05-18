import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

class MyButton extends Component{
  constructor(props){
    super(props);
    this.state = {mood:'UwU'};
    this.changeMood = this.changeMood.bind(this);
  }

  changeMood(){
    const newMood = this.state.mood === 'UwU' ? 'OwO':'UwU';
    this.setState({mood:newMood});
  }

  render(){
    return(
      <Button onClick={this.changeMood} variant='danger'>
        {this.state.mood}
      </Button>
    );
  }
}

export default MyButton;
