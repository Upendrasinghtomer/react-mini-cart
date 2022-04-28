import { api } from ".";

const productsApi = {
  getProducts: () => {
    return api.get("/products");
  },
};

export default productsApi;
