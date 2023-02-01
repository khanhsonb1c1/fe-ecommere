import { defineStore } from "pinia";
import _ from "lodash";
import { account } from "../services/accounting";

export const accountingStore = defineStore({
  id: "accounting",
  state: () => ({

    loading: false,

    wallets: [
      {
        id: "" as string,
        currency_id: "" as string,
        balance: 0 as number,
        amount_available_for_payment: 0 as number,
        walletable_type: "" as string,
        organization_id: "" as string,
        updated_at: "" as string,
        
      },
    ],
  }),
  getters: {},
  actions: {
    getWallets(id: string) {
      this.loading = true;
      return new Promise((resolve, reject) => {
        account
          .get_wallet(id)
          .then((res) => {
            this.wallets = res.data.data;
            if (_.isEmpty(res.data.data)) {
            } else {
            }
            this.loading = false;
            resolve(this.wallets)
          })
          .catch((err) => {
            this.loading = false;
            reject(err)
          });
      });
    },
  },
});