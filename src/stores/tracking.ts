import { defineStore } from "pinia";
import { tracking } from "../services/warehouse";

export const trackingStore = defineStore({
    id: "tracking",
    state: () => ({

        trackings: {
            orders: [{
                id: '',
                journey: [{
                    message: '',
                    created_at: 0,
                }]
            }]
        },

        journey_of_order: {
            journey: [{
                message: '',
                created_at: 0,
            }]
        } as any,

        code_default: '',

        loading: false,
    }),
    getters: {
        get_journey_of_order: (state) => state.journey_of_order.journey
    },
    actions: {
        getTrackingInfo(id: string, id_order: string) {
            this.loading = true;
            return new Promise((resolve, reject) => {
                tracking.get(id).then(res => {
                    this.code_default = id;
                    this.trackings = res.data;
                    this.loading = false;
                    const filter = this.trackings.orders.find(i => i.id == id_order);
                    this.journey_of_order = filter;
                    resolve(res.data)
                }).catch(err => {
                    this.loading = false;
                    reject(err)
                })
            });
        },


    },
});
