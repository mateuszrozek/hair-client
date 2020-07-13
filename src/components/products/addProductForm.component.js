import React, { Component } from "react";

export default class AddProductForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" id="name" />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email"
                        placeholder="name@example.com"
                    />
                </div>
                <div className="form-group">
                    <button className="form-control btn btn-secondary" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        );
    }
}