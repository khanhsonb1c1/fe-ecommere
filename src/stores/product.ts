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
        sort: '-created_at' as string,
        filter_b: {} as any,
        filter_a: {} as any,
        filter_name: {} as any,
        current_page: 1 as number,
        last_page: 0 as number,
    }),
    getters: {
        filter(state) {
            return { ...state.filter_a, ...state.filter_b }
        }
    },
    actions: {
        getProductList(page: number) {
            return new Promise((resolve, reject) => {
                const filter_1 = lodash.mapKeys(this.filter_a, function (value, key) {
                    return `filter[${key}.id]`;
                });
                const filter_2 = lodash.mapKeys(this.filter_b, function (value, key) {
                    return `filter[${key}]`;
                });

                const filterFild = lodash.pickBy({
                    ...filter_1,
                    ...filter_2
                })

                products.getProduct({
                    page: page,
                    include: 'suppliers,origin,category',
                    sort: this.sort,
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

        updateSort(value: string){
            this.sort = value;
            this.getProductList(this.current_page)
        },

        updateCategoryFilter(id: string, value: string) {
            this.filter_a.category = id
            this.filter_name.category = value
        },
        updateOriginFilter(id: string, value: string) {
            this.filter_b.origin_id = id;
            this.filter_name.origin = value;
        },
        updateSpecialFilter() {
            this.filter_b.special = true
            this.filter_name.special = true
        },
        updatePrivateLicenseFilter() {
            this.filter_b.private_license = true
            this.filter_name.private_license = true
        },
        updateBannedExportFilter() {
            this.filter_b.banned_export = true
            this.filter_name.banned_export = true
        },
        updateBannedSeaFilter() {
            this.filter_b.banned_sea = true;
            this.filter_name.banned_sea = true;
        },
        updateBannedAirFilter() {
            this.filter_b.banned_air = true;
            this.filter_name.banned_air = true;
        },
        // updateEmbragoFilter(value: any) {
        //     this.filter[`${value}`] = "true";
        // },

        clearFilterCategory() {
            delete this.filter_a.category;
            delete this.filter_name.category;
            this.getProductList(this.current_page)
        },
        clearFilterOrigin() {
            delete this.filter_a.origin;
            delete this.filter_name.origin;
            this.getProductList(this.current_page)
        },
        clearFilterSpecial() {
            delete this.filter_b.special;
            delete this.filter_name.special;
            this.getProductList(this.current_page)
        },
        clearFilterPrivateLicense() {
            delete this.filter_b.private_license;
            delete this.filter_name.private_license;
            this.getProductList(this.current_page)
        },
        clearFilterBannedExport() {
            delete this.filter_b.banned_export;
            delete this.filter_name.banned_export;
            this.getProductList(this.current_page)
        },
        clearFilterBannedSea() {
            delete this.filter_b.banned_sea;
            delete this.filter_name.banned_sea;
            this.getProductList(this.current_page)
        },
        clearFilterBannedAir() {
            delete this.filter_b.banned_air;
            delete this.filter_name.banned_air;
            this.getProductList(this.current_page)
        },


        // clearAllFilter() {
        //     this.filter = {}
        // },
    },
});
