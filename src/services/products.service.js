import axios from "axios";

const API_URL = "http://localhost:8666/api/res/";

class ProductsService {

    products() {
        return axios
            .get(API_URL + "products");
    }

    product(product) {
        console.log(product + ": axios");
        return axios
            .post(API_URL + "product", product)
            .then(
                response => {
                    console.log(response.data + ": response.data")
                    return response.data;
                },
                error => {
                    console.log(error)
                }
        );
    }
}

export default new ProductsService();