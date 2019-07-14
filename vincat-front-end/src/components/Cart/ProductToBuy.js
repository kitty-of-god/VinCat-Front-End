import React, { Component } from 'react';
import { Card, Table } from 'react-bootstrap';
import Product from './Product';


class ProductToBuy extends Component {
    render() {
        console.log(this.props.products,'productos en shoppingcard')
        return (
            <div>
                
                <Table fill>
                    <tbody>
                        {this.props.products.map((product) =>
                            <Product product = {product} key={product.id}/> 
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

export default ProductToBuy;