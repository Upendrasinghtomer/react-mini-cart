import { api } from ".";

const categoriesApi = {
  getCategories: () => {
    return api.get("/categories");
  },
};

export default categoriesApi;
