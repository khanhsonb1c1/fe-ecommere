import { defineStore } from "pinia";
import { user_address } from "../services/auth";
import _ from "lodash";

export const addressStore = defineStore({
   id: "address",
  state: () => ({
    isAddress: true,
    loading: false,
    err: '',
    address: [
      {
        id: "" as string,
        consignee: "" as string,
        address_detail: "" as string,
        tel: "" as string,
        ward_id: "" as string | number,
        note: "" as string,
        default: true as boolean,
        full_address: "" as string,
      },
    ],
  }),
  getters: {
    get_is_address: (state) => state.isAddress,
    get_address: (state) => state.address,
  },
  actions: {
    getAddress(id: string) {
      this.loading = true;
      return new Promise((resolve, reject) => {
        user_address
          .get({
            [`filter[user_id]`]: id,
          })
          .then((res) => {
            this.address = res.data;
            if (_.isEmpty(res.data)) {
              this.isAddress = true;
            } else {
              this.isAddress = false;
            }
            this.loading = false;
            resolve(this.address);
          })
          .catch((err) => {
            this.loading = false;
            this.err = err
            reject(this.err);
          });
      });
    },
  },
});