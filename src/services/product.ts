import { product } from "../http-tomoni";

const products = {
  getProduct(params: object) {
    return product.get(`/api/products`,{ params });
  },
  getProductDetail(id:string, params: object) {
    return product.get(`/api/products/${id}`,{ params });
  },

  
};

const categories = {
  getCategory() {
    return product.get(`/api/categories?include=parent`);
  },
  // getCategoryDetail(id:string, params: object) {
  //   return product.get(`/api/categories/${id}`,{ params });
  // },
};

const origins = {
  getOrigin() {
    return product.get(`/api/origins`);
  },
  // getOriginDetail(id:string, params: object) {
  //   return product.get(`/api/origins/${id}`,{ params });
  // },
};


export { products , categories, origins};
