import { defineStore } from "pinia";
import { contracts } from "../services/contract";

export const contractStore = defineStore({
  id: "contract",
  state: () => ({
    contracts: [
      {
        id: "" as string,
        status: {
          name: "" as string,
        },
        status_id: "" as string,
        updated_at: 0 as number,
        service_fee: 0 as number,
        service_fee_debited: 0 as number,
        purchase_cost_debited: 0 as number,
        sales_organization_id: "" as string,
        transport_organization_id: "" as string,
        purchase_cost_currency_id: "" as string,
        service_fee_currency_id: "" as string,
      },
    ],

    loading: false,

    current_page: 0 as number,
    last_page: 0 as number,
  }),
  getters: {},
  actions: {
    getContracts(page: number) {
        this.loading = true;
      return new Promise((resolve, reject) => {
        contracts
          .get_contracts({
            page: page,
            [`filter[own]`]: 1,
            include: "status",
          })
          .then((res) => {
            this.contracts = res.data.data;
            this.current_page = res.data.current_page;
            this.last_page = res.data.last_page;
            this.loading = false;
            resolve(this.contracts)
          }).catch(err => {
            this.loading = false;
            reject(err)
          });
      });
    },
  },
});