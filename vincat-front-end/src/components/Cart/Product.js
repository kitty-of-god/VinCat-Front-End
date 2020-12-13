import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeProductFromCart } from '../../actions'
import {  Button } from 'react-bootstrap';
import axios from "axios";



class Product extends Component {

    constructor (props) {
        super(props)
        this.state = {
            isLoading: false,
            whatsappContactUser: '#'
        }
        axios.defaults.headers.common["Authorization"] = this.props.loginAccountInfo.key; 
    
    }

    componentDidMount(){
        console.log(this.props.loginAccountInfo.id,'ID_COMPRADOR')
        console.log(this.props.product.user_id,'ID_VENDEDOR')

        axios.get(process.env.backend_url+'/users/'.concat(this.props.product.user_id))
        .then((response) => {
            // handle success
            console.log(response.data, 'RTA_INFO_VENDEDOR');
            let contact = 'https://api.whatsapp.com/send?phone=57'.concat(response.data.phone).concat('&text=I%27m%20interested%20in%20your%20product%20for%20sale');
            this.setState({
                //whatsappContactUser : 'https://api.whatsapp.com/send?phone=573015987281&text=I%27m%20interested%20in%20your%20product%20for%20sale'
                whatsappContactUser : contact
            });
            console.log(this.state.whatsappContactUser)
        })
        .catch((error) => {
            // handle error
            console.log(error);
        });
        
    };

    render() {
        return (
            <tr key={this.props.key}>
                <td><h4>{this.props.product.name}</h4></td>
                <td className="text-right"><h4>${this.props.product.price}</h4></td>
                <td></td>
                <td className="text-right"><Button onclick href= {this.state.whatsappContactUser} target={'_blank'}>Contact Seller</Button></td>
                <td className="text-right"><Button onClick={() => this.props.removeProductFromCart(this.props.product)}>Delete</Button></td>    
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
      loginAccountInfo: state.loginAccountInfo
    };
};

export default connect(mapStateToProps,{removeProductFromCart})(Product);