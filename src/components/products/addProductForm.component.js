import React, { Component } from "react";
import ProductService from "../../services/products.service"

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
}

export default class AddProductForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        };
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    submit() {
        const product = {
            title: this.state.title,
            description: this.state.description
        }
        console.log(product);
        console.log(this.state.title);
        console.log(this.state.description);

        ProductService.product(product);
    }

    handleChange = (evt) => {
        const value = evt.target.value;
        this.setState({
            [evt.target.name]: value
        });
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        className="form-control"
                        id="title"
                        name="title"
                        onChange={this.handleChange}
                        validations={[required]}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                        className="form-control"
                        id="description"
                        name="description"
                        onChange={this.handleChange}
                        validations={[required]}
                    />
                </div>

                <div className="form-group">
                    <button className="form-control btn btn-secondary" type="submit" >
                        Submit
                    </button>
                </div>
            </form>
        );
    }
}