import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import {storeProductInfo, storeUserInfo} from '../../actions';
//Assets
import '../../styles/ProductCard.css';
import {connect} from "react-redux";
import { Redirect } from 'react-router';

class Report extends Component{
    constructor(props){
        super(props);
        this.state = {
            redirectProduct: false,
            redirectUser: false

        }
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick()
    {
        if(this.props.info.reportable_type == 'User')
        {

            const user =
                {
                    id:this.props.info.reportable_id
                }
            this.props.storeUserInfo(user);
            this.setState({redirectUser:true});

        }
        else if (this.props.info.reportable_type == 'Product'){
            console.log(this.props.info)
            const pro =
                {
                    id:this.props.info.reportable_id
                }
            this.props.storeProductInfo(pro);
            this.setState({redirectProduct:true});
        }

    }

    render(){
        const {message,reportable_id,reportable_type } = this.props.info;
        if (this.state.redirectUser) {

            return <Redirect push to="/user" />;
        }
        if (this.state.redirectProduct) {

            return <Redirect push to="/product" />;
        }
        return(
            <div className="media mb-5">
                <Button onClick={this.handleClick}>Mirar {reportable_type} del reporte </Button>

                <div className="media-body p-2 shadow-sm rounded bg-light border">
                    {message}
                    </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = dispatch => ({
    storeProductInfo: some_payload => dispatch(storeProductInfo(some_payload)),
    storeUserInfo: some_payload => dispatch(storeUserInfo(some_payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(Report);