import { defineStore } from "pinia";
import { products } from "../services/product";
import lodash from 'lodash'
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
        sort: {} as any,
        filter: {} as any,
        current_page: 1 as number,
        last_page: 0 as number,
    }),
    getters: {},
    actions: {
        getProductList(page: number) {
            return new Promise((resolve, reject) => {
                const filter = lodash.mapKeys(this.filter, function (value, key) {
                    return `filter[${key}]`;
                });

                const filterFild = lodash.pickBy({
                    ...filter
                })

                products.getProduct({
                    page: page,
                    include: 'suppliers,origin,category',
                    ...filterFild
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
        updateSpecialFilter() {
            this.filter.special = true
        },
        updatePrivateLicenseFilter() {
            this.filter.private_license = true
        },
        updateBannedExportFilter() {
            this.filter.banned_export = true
        },
        updateBannedSeaFilter() {
            this.filter.banned_sea = true;
        },
        updateBannedAirFilter() {
            this.filter.banned_air = true;
        },
        // updateEmbragoFilter(value: any) {
        //     this.filter[`${value}`] = "true";
        // },

        clearFilterCategory() {
            delete this.filter.category;
        },
        clearFilterOrigin() {
            delete this.filter.origin;
        },
        clearFilterSpecial() {
            delete this.filter.special;
        },
        clearFilterPrivateLicense() {
            delete this.filter.private_license;
        },
        clearFilterBannedExport() {
            delete this.filter.banned_export;
        },
        clearFilterBannedSea() {
            delete this.filter.banned_sea;
        },
        clearFilterBannedAir() {
            delete this.filter.banned_air;
        },


        clearAllFilter() {
            this.filter = {}
        },
    },
});
