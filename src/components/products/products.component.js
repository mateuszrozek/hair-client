import React, { Component } from 'react';
import AuthService from "../../services/auth.service";
import ProductsService from "../../services/products.service";
import Product from "./product.component";
import AddProductModal from './addProductModal.component';


export default class Products extends Component {
    constructor(props) {
        super(props);
        this.renderProducts = this.renderProducts.bind(this);

        this.state = {
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
            products: [],
            showModal: false
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user
            });
        }

        ProductsService.products().then(
            response => {
                this.setState({
                    products: response.data
                });
            },
            error => { console.log("error when fetching products: " + error) }
        );
    }

    renderProducts() {
        if (this.state.products && this.state.products.length > 0) {
            return (
                this.state.products.map((product) => (
                    <span className="indent" key={product.id}>
                        <Product product={product} />
                    </span>
                ))
            );
        }
        else {
            return (<div>list is empty yet</div>);
        }
    }

    render() {

        const { currentUser } = this.state;

        return (
            <div className="container">

                <div className="jumbotron">

                    <div class="row">
                        <div class="col-sm-10">
                            <h3>List of products</h3>
                        </div>
                        <div class="col-sm-2">
                            {currentUser && (
                                <AddProductModal buttonLabel={"Add product"} className={"xdd"} />
                            )}
                        </div>
                    </div>
                </div>
                <div>
                    {this.renderProducts()}
                </div>
            </div>
        );
    }
}