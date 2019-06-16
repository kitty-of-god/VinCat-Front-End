import React, { Component } from "react";
import axios from "axios";
import {Form} from "react-bootstrap";
import {connect} from "react-redux";


export default class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: "",

            comment: {
                name: "",
                message: ""
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
    };


    onSubmit(e) {
        e.preventDefault();
        const rating = {
            comment: this.state.comment,
            kind: "product",
            rating: "5",
            reteable_id:this.props.loginAccountInfo,
            reteable_type: "user"


        };

        axios.post(`https://vnct01.herokuapp.com/ratings?user_email=${this.props.loginAccountInfo.accountInfo}&user_token=${this.props.loginAccountInfo.key}`, {
            email: this.state.email,
            password: this.state.password, })
            .then(res => {
                const person = res.data;
                this.setState({ rating});
            })
    }

    renderError() {
        return this.state.error ? (
            <div className="alert alert-danger">{this.state.error}</div>
        ) : null;
    }

    render() {
        console.log(this.props.loginAccountInfo);
        return (
            <React.Fragment>
                <form method="post" onSubmit={this.onSubmit}>


                    <div className="form-group">
            <textarea
                onChange={this.handleFieldChange}
                className="form-control"
                placeholder="Your Comment"
                rows="3"
                name="comment"
            />
                    </div>

                    {this.renderError()}

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


