import { defineStore } from "pinia";
import { products } from "../services/product";

export const productStore = defineStore({
    id: "products",
    state: () => ({

        product_list: [{
            id: '' as string,
            category: {
                name: '',
                id: '',
                parent_id: '',
            },
            origin: {
                name: '',
            },
            image_url: '',
            name: '',
            created_at: 0 as number,
            quantity_items: 0,
            price: 0,
        }],

        filter: {} as any,

        filter_list: [],

        current_page: 1 as number,
        last_page: 0 as number,
    }),
    getters: {},
    actions: {
        getProductList(page: number) {
            return new Promise((resolve, reject) => {
                products.getProduct({
                    page: page,
                    include: 'suppliers,origin,category',
                }).then((res) => {
                    this.product_list = res.data.data;
                    this.current_page = res.data.current_page;
                    this.last_page = res.data.last_page;

                    resolve(res.data.data)
                }).catch((err) => {
                    reject(err)
                })
            });
        },

        updateCategoryFilter(value: any) {
            this.filter.category = value
        },
        updateOriginFilter(value: any) {
            this.filter.origin = value
        },
    },
});
