import { defineStore } from "pinia";
import type Order from "../types/Order";
import { orders } from "../services/order";
import { logs } from "../services/helper";

export const orderStore = defineStore({
    id: "order",
    state: () => ({
        order: {} as Order,
        items: [
            {
                balance: 0,
                id: '',
                quantity: 0,
                product: {
                    image_url: '',
                    name: '',
                    price: 0,
                }
            }
        ],
        logs: [{
            creator: {},
            content: {},
            
        }],
        order_list: [{} as Order],
        loading: false,
        err: '',
    }),
    getters: {
        get_order_detail: (state) => state.order,
        get_boxes: (state) => state.order?.owning_boxes_from_origin,
        get_id_order: (state) => state.order?.id,
        get_items: (state) => state.items,
        get_trackings: (state) => state.order.related_trackings,
        get_logs: (state) => state.logs,
    },
    actions: {
        getOrderDetail(id: string) {
            this.loading = true;
            return new Promise((resolve, reject) => {
                orders
                    .get_detail(id, {
                        append: "lading_bills,owning_boxes_from_origin,related_trackings",
                        include: "status,shipmentInfo,type",
                    })
                    .then((res) => {
                        this.order = res.data;
                        this.loading = false;
                        resolve(this.order);
                    })
                    .catch((err) => {
                        this.loading = false;
                        this.err = err;
                        reject(err);
                    });
            });
        },

        getOrderItems(id: string) {
            this.loading = true;
            return new Promise((resolve, reject) => {
                orders
                    .get_order_items({
                        append: "product,currency_id",
                        "filter[order_id]": id,
                    })
                    .then((res) => {
                        this.items = res.data.data;
                        this.loading = false;
                        resolve(this.items);
                    })
                    .catch((err) => {
                        this.loading = false;
                        this.err = err;
                        reject(err);
                    });
            });
        },

        getOrderLogs(id: string) {
            this.loading = true;
            return new Promise((resolve, reject) => {
                logs
                    .get({
                        append: "creator",

                        sort: "-updated_at",
                        [`filter[logable_id]`]: id,
                    })
                    .then((res) => {
                        this.logs = res.data.data;
                        this.loading = false;
                        resolve(this.logs);
                    })
                    .catch((err) => {
                        this.loading = false;
                        this.err = err;
                        reject(err);
                    });
            });
        },

        getOrderList() {
            this.loading = true;
            return new Promise((resolve, reject) => {
                orders
                    .get_all({
                        append: "lading_bills,first_item",
                        include: "status,shipmentInfo,type",
                        "filter[own]": 1,
                        sort: '-created_at'
                    })
                    .then((res) => {
                        this.order_list = res.data.data;
                        this.loading = false;

                        resolve(this.order_list);
                    })
                    .catch((err) => {
                        this.loading = false;
                        this.err = err
                        reject(err);
                    });
            });
        },


    },
});