import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeProductFromCart } from '../../actions'
import { Card, Table, Button, CardColumns } from 'react-bootstrap';
import axios from "axios";


class ProductToBuy extends Component {

    constructor (props) {
        super(props)
        this.state = {
            isLoading: false,
            whatsappContactUser: '#'
        }
        axios.defaults.headers.common["Authorization"] = this.props.loginAccountInfo.key; 
        
    }

    componentDidMount(){
        // pedir informacion usuario para tener el telefono
        console.log(this.props.loginAccountInfo.id)
        axios.get('https://vnct01.herokuapp.com/users/'.concat(this.props.loginAccountInfo.id))
        .then((response) => {
            // handle success
            console.log(response);
            let contact = 'https://api.whatsapp.com/send?phone=57'.concat(response.telefono).concat('&text=I%27m%20interested%20in%20your%20product%20for%20sale');
            this.setState({
                whatsappContactUser : 'https://api.whatsapp.com/send?phone=573015987281&text=I%27m%20interested%20in%20your%20product%20for%20sale'
                //whatsappContactUser : contact
            });
            console.log(this.state.whatsappContactUser)
        })
        .catch((error) => {
            // handle error
            console.log(error);
        });
        
    };

    render() {
        console.log(this.props.products,'productos en shoppingcard')
        return (
            <div>
                
                <Table fill>
                    <tbody>
                        {this.props.products.map(product =>
                            <tr key={product.id}>
                                <td><h4>{product.name}</h4></td>
                                <td className="text-right"><h4>${product.price}</h4></td>
                                <td></td>
                                <td className="text-right"><Button href= {this.state.whatsappContactUser} target={'_blank'}>Contact Seller</Button></td>
                                <td className="text-right"><Button onClick={() => this.props.removeProductFromCart(product)}>Delete</Button></td>    
                            </tr>
                        )}
                    </tbody>
                    
                </Table>
                <Card.Footer>
                        <h3>Total: ${this.props.products.reduce((sum, product) => sum + product.price, 0)}</h3>
                </Card.Footer>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
      products: state.productsShoppingCart,
      loginAccountInfo: state.loginAccountInfo
    };
};
export default connect(mapStateToProps,{removeProductFromCart})(ProductToBuy);