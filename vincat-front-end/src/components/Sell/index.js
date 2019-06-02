import React, {Component} from 'react';
import SellPage from "./SellPage";
import { connect } from 'react-redux';

class Sell extends Component{
    render(){
        return(
            <div className="Sell">
                <SellPage/>
            </div>
        );
    }
}

export default Sell;