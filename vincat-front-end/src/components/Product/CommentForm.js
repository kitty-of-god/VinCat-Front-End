import React, { Component } from "react";
import axios from "axios";
import {Col, Form} from "react-bootstrap";
import {connect} from "react-redux";


export default class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: "",

            comment: {
                name: "",
                message: "",
                rating:  5,
            }
        };

        // bind context to methods
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleFieldChange = event => {
        const { value, name } = event.target;

        this.setState({
            ...this.state,
            comment: {
                ...this.state.comment,
                [name]: value
            }
        });
        console.log(this.state.comment);
    };


    onSubmit(e) {
        e.preventDefault();

        const ratings = {
            comment: this.state.comment.message,
            kind: "product",
            rating: parseInt(this.state.comment.rating),
            rateable_id:this.props.product.id,
            rateable_type: "Product"


        };
        console.log(ratings);
        axios.post(`https://vnct01.herokuapp.com/ratings?user_email=${this.props.email}&user_token=${this.props.key1}`, {
           ratings})
            .then(res => {
                const person = res.data;
                console.log(res.data);
                //this.setState({ rating});
            }).catch(error => {
            this.setState({valid: error.response.data , isLoading: false})

            console.log(error.response.data);
        });
    }

    render() {

        return (

            <React.Fragment>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
            <textarea onChange={this.handleFieldChange}
                className="form-control"
                placeholder="Your Comment"
                rows="3"
                name="message"/>
                        <Form.Group as={Col}>
                            <Form.Label>Rate</Form.Label>
                            <Form.Control as="select" onChange={this.handleFieldChange} type="rating" placeholder="rating*" name="rating">
                                <option>5</option>
                                <option>4</option>
                                <option>3</option>
                                <option>2</option>
                                <option>1</option>

                            </Form.Control>
                        </Form.Group>
                    </div>




                    <div className="form-group">
                        <button disabled={this.state.loading} className="btn btn-primary"  type="submit">
                            Comment
                        </button>
                    </div>
                </form>
            </React.Fragment>
        );


    }
}

