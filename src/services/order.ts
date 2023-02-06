import { order } from "../http-tomoni";


const orders = {
  create(params?: any) {
    return order.post(`/api/orders/retail?${new URLSearchParams(params).toString()}`,);
  },

  get_detail(id: string, params?: object) {
    return order.get(`/api/orders/${id}`, { params });
  },
  get_all(params?: object) {
    return order.get(`/api/orders/retail`, { params });
  },
  get_order_items(params?: object) {
    return order.get(`/api/orders/items`, { params });
  },

};



export { orders };
