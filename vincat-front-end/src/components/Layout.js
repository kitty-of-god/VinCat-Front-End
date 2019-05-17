import React from 'react';
import {Container} from "react-bootstrap";
import '../styles/App.css';

export const Layout = (props) => (
    <Container>
        {props.children}
    </Container>

)



