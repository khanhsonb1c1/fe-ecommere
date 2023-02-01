import { accounting } from "../http-tomoni";

const account = {
  get_wallet(id: string) {
    return accounting.get(`/api/wallets/?filter[walletable_id]=${id}`);
  },

  get_transaction(params?: object) {
    return accounting.get(`/api/transactions`, { params });
  },
  get_type_transaction(){
    return accounting.get("/api/transaction-types");
  },
};

export { account };
