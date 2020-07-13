import React, { Component } from 'react';

export default class Product extends Component {

    constructor(props) {
        super(props);


        this.state = {
            
        };
    }


    render() {
        return (
            <div>
                {this.props.product.title + ": " + this.props.product.description}
            </div>
        )
    }
}