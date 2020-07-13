import React, { Component } from "react";
import ProductService from "../../services/products.service"
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import * as Validations from "../../utils/validations.utils"

// const required = value => {
//     if (!value) {
//         return (
//             <div className="alert alert-danger" role="alert">
//                 This field is required!
//             </div>
//         );
//     }
// }

export default class AddProductForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            loading: false
        };
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    submit(e) {
        e.preventDefault();

        this.setState({
            loading: true
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            const product = {
                title: this.state.title,
                description: this.state.description
            }
            ProductService.product(product);
            this.setState({
                loading: false
            });
            window.location.reload();

        } else {
            this.setState({
                loading: false
            });
        }
    }

    handleChange = (evt) => {
        const value = evt.target.value;
        this.setState({
            [evt.target.name]: value
        });
    }

    render() {
        return (
            <Form
                onSubmit={this.submit}
                ref={
                    c => {
                        this.form = c;
                    }
                }>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <Input
                        className="form-control"
                        id="title"
                        name="title"
                        onChange={this.handleChange}
                        validations={[Validations.required, Validations.length_3_100]}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <Input
                        className="form-control"
                        id="description"
                        name="description"
                        onChange={this.handleChange}
                        validations={[Validations.required]}
                    />
                </div>

                <div className="form-group">
                    <button
                        className="form-control btn btn-secondary"
                        type="submit"
                        disabled={this.state.loading}
                    >
                        {this.state.loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span>Submit</span>
                    </button>
                </div>
                <CheckButton
                    style={{ display: "none" }}
                    ref={
                        c => {
                            this.checkBtn = c;
                        }
                    }
                />
            </Form>
        );
    }
}