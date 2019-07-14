import React, {Component,Fragment} from 'react';
import {Container} from 'react-bootstrap';

class LandingPage extends Component{
  render(){
    return(
      <Fragment>
        <Container fluid style={{
          width: "100%",
          height: "419px",
          backgroundImage: "url(" + "http://vintagetex.com/wp-content/uploads/2014/07/70s-wall.jpg" + ")",
          backgroundSize: "cover",
          filter: "blur(2px)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}></Container>
        <Container style={{
            backgroundColor: "rgb(0,0,0)",
            backgroundColor: "rgba(0,0,0, 0.4)",
            color: "white",
            fontWeight:" bold",
            border: "3px solid #f1f1f1",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "2",
            width: "80%",
            padding: "20px",
            textAlign: "center",
        }}>
          <h1>¡Compra y vende en VinCat!</h1>
          <p> Inicia sesión o registrate</p>
        </Container>
      </Fragment>
    );
  }
}

export default LandingPage;
