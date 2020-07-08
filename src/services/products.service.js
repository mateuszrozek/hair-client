import axios from "axios";

const API_URL = "https://hair-api-x.herokuapp.com/api/res/";

class ProductsService {

    products() {
        return axios
            .get(API_URL + "products");
    }

}

export default new ProductsService();