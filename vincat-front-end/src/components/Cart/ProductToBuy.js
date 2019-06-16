import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeProductFromCart } from '../../actions'
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';

class ProductToBuy extends Component {
    render() {
        console.log(this.props.products,'productos en shoppingcard')
        return (
            <Table fill>
                <tbody>
                    {this.props.products.map(product =>
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td className="text-right">${product.price}</td>
                            <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => this.props.removeProductFromCart(product)}>Delete</Button></td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                    <td colSpan="4">
                        Total: ${this.props.products.reduce((sum, product) => sum + product.price, 0)}
                    </td>
                    </tr>
                </tfoot>
            </Table>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
      products: state.productsShoppingCart
    };
};
export default connect(mapStateToProps,{removeProductFromCart})(ProductToBuy);