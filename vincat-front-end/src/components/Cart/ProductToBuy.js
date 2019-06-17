import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeProductFromCart } from '../../actions'
import { Card, Table, Button, CardColumns } from 'react-bootstrap';

class ProductToBuy extends Component {
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
                                    <td className="text-right"><Button>Contact Seller</Button></td>
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
      products: state.productsShoppingCart
    };
};
export default connect(mapStateToProps,{removeProductFromCart})(ProductToBuy);