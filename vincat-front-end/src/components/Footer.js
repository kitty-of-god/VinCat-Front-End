//Dependencies
import React, {Component} from 'react';

//assets
// TODO: styleSheet
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
  position:'absolute',
  display: 'block',
  padding: '20px',
  width: '100%',
  height: '50px',
  marginTop: '-50px',
  bottom:'0',
}

class Footer extends Component {
  render(){
    return (
      <div className="Footer">
        <p>Copyright Kitty of god 2019</p>
          <div style={style}>
              <p> copyright Kitty of god</p>
          </div>
      </div>
    );
  };
}

export default Footer;
