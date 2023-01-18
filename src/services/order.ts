import { order } from "../http-tomoni";


const orders = {
  createOder(params?: any) {
    return order.post(`/api/orders/retail?${new URLSearchParams(params).toString()}`, );
  },

};



export { orders };
