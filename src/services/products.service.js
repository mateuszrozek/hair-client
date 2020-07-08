import axios from "axios";

const API_URL = "http://localhost:8666/api/res/";

class ProductsService {

    products() {
        return axios
            .get(API_URL + "products");
    }

}

export default new ProductsService();