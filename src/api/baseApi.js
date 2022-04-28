import { api } from ".";

const baseApi = {
  getBanners: () => {
    return api.get("/banners");
  },
};

export default baseApi;
