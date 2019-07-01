//Dependencies
import React, {Component, Fragment} from 'react';
import {Button, Container, Tabs, Tab, Row, Col} from 'react-bootstrap';
import ProductCard from "./ProductCard";
import axios from 'axios';
import {storeLoginAccountInfo, storeProcutInfo} from '../../actions';
import {connect} from "react-redux";
//Assets
import jacketsPlaceholder from '../../assets/browser/jacketsPlaceholder.jpg';


//Test stuff, plz ignore
import Display from "./Display";


class Browser extends Component{
  render(){

    return(
      <Fragment>
        <Container fluid>
          <Display title="Scarfs"/>
          <Display title="pants"/>
        </Container>
      </Fragment>
    );
  }
}

export default Browser;
