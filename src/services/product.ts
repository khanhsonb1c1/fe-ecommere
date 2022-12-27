import { product } from "../http-tomoni";

const products = {
  getProduct(params: object) {
    return product.get(`/api/products`,{ params });
  },
  getProductDetail(id:string, params: object) {
    return product.get(`/api/products/${id}`,{ params });
  },

  
};

export { products };
