import { defineStore } from "pinia";
import type Order from "../types/Order";
import { orders } from "../services/order";

export const orderStore = defineStore({
    id: "order",
    state: () => ({
        order: {} as Order,
        order_list: [{} as Order]
    }),
    getters: {
        get_order_detail: (state) => state.order,
        get_boxes: (state) => state.order?.owning_boxes_from_origin,
        get_id_order: (state) => state.order?.id,
    },
    actions: {
        getOrderDetail(id: string) {
            return new Promise((resolve, reject) => {
                orders
                    .get_detail(id, {
                        append: "lading_bills,owning_boxes_from_origin",
                        include: "trackings,status,shipmentInfo",
                    })
                    .then((res) => {
                        this.order = res.data;
                        resolve(this.order);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },

        getOrderList() {
            return new Promise((resolve, reject) => {
                orders
                    .get_all({
                        append: "lading_bills,owning_boxes_from_origin,first_item",
                        include: "trackings,status,shipmentInfo",
                        "filter[own]": 1,
                        sort: '-created_at'
                    })
                    .then((res) => {
                        this.order_list = res.data.data;
                        resolve(this.order_list);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        }
    },
});