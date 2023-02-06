import { product } from "../http-tomoni";

const products = {
  getProduct(params: object) {
    return product.get(`/api/products`, { params });
  },
  getProductDetail(id: string, params: object) {
    return product.get(`/api/products/${id}`, { params });
  },


};

const categories = {
  getCategory(params: object) {
    return product.get(`/api/categories`, {params});
  },
};

const origins = {
  getOrigin() {
    return product.get(`/api/origins`);
  },
};


export { products, categories, origins };
