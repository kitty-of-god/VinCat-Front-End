import React, {Component,Fragment} from 'react';
import {Container, Image} from 'react-bootstrap';
//estilo
class LandingPage extends Component{
  render(){
    return(
      <Fragment>
        <Image
          fluid
          src="http://vintagetex.com/wp-content/uploads/2014/07/70s-wall.jpg"
          style={{
            width: "100%",
            height: "419px",
            filter: "blur(2px)",
          }}
        />
        <Container style={{
            backgroundColor: "rgb(0,0,0)",
            backgroundColor: "rgba(0,0,0, 0.4)",
            color: "white",
            fontWeight:" bold",
            border: "3px solid #f1f1f1",
            zIndex: "2",
            position: "relative",
            transform: "translate(0,-190%)",
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
