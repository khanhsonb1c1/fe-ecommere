import { defineStore } from "pinia";
import _ from "lodash";
import { account } from "../services/accounting";
import Wallet from "../types/Wallet";

export const accountingStore = defineStore({
  id: "accounting",
  state: () => ({

    loading: false,

    wallets: [{} as Wallet],

    wallet_detail: {} as Wallet,

  }),
  getters: {
    is_fectch_data: (state) => {
      if (_.isEmpty(state.wallets[0].id)) {
        return false
      } else {
        return true
      }
    }
  },
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