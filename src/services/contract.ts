import { order } from "../http-tomoni";

const contracts = {
    get_contracts(params?: object) {
      return order.get("/api/contracts", { params });
    },
  
    get_contract_detail(id: string) {
      return order.get(`/api/contracts/${id}`);
    },
  
    get_orders(params?: object) {
      return order.get(`/api/orders`, { params });
    },
  };
  

export { contracts };
