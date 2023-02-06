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

        product_detail: {
            hs_code: '',
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
            created_at: 0,
            updated_at: 0,
            quantity_items: 0,
            price: 0,
            ingredients: '',
            tax_percent: 0,
            width: 0,
            length: 0,
            height: 0,
            weight: 0,
            special: false,
            private_license: false,
            banned_export: false,
            banned_air: false,
            banned_sea: false,

        },

        loading: true,
    }),
    getters: {
        filter(state) {
            return { ...state.filter_a, ...state.filter_b }
        }
    },
    actions: {
        getProductList(page: number) {
            this.loading = true;
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
                    this.loading = false;
                    resolve(res.data.data)
                }).catch((err) => {
                    this.loading = false;
                    reject(err)
                })
            });
        },

        getProductDetail(id: string) {
            this.loading = true;

            return new Promise((resolve, reject) => {
                products.getProductDetail(id, {
                    include: 'suppliers,origin,category,origin',
                }).then(res => {
                    this.product_detail = res.data;
                    this.loading = false;

                    resolve(res.data)
                }).catch(err => {
                    this.loading = false;

                    reject(err)
                })

            });
        },


        updateSort(value: string) {
            this.sort = value;
            this.getProductList(this.current_page)
        },

        updateNameSearchFilter(id: string, value: string) {
            this.filter_b.name = id;
            this.filter_name.name = value;
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
            if (this.filter_b.special == true) {
                this.clearFilterSpecial()
            } else {
                this.filter_b.special = true
                this.filter_name.special = true
            }

        },
        updatePrivateLicenseFilter() {
            if (this.filter_b.private_license == true) {
                this.clearFilterPrivateLicense()
            } else {
                this.filter_b.private_license = true
                this.filter_name.private_license = true
            }

        },
        updateBannedExportFilter() {
            if (this.filter_b.banned_export == true) {
                this.clearFilterBannedExport()
            } else {
                this.filter_b.banned_export = true
                this.filter_name.banned_export = true
            }

        },
        updateBannedSeaFilter() {
            if (this.filter_b.banned_sea == true) {
                this.clearFilterBannedSea()
            } else {
                this.filter_b.banned_sea = true;
                this.filter_name.banned_sea = true;
            }

        },
        updateBannedAirFilter() {
            if (this.filter_b.banned_air == true) {
                this.clearFilterBannedAir()
            } else {
                this.filter_b.banned_air = true;
                this.filter_name.banned_air = true;
            }
        },


        clearFilterCategory() {
            delete this.filter_a.category;
            delete this.filter_name.category;
            delete this.filter.category;
            this.getProductList(this.current_page)
        },
        clearFilterOrigin() {
            delete this.filter_b.origin_id;
            delete this.filter.origin;
            delete this.filter_name.origin;
            this.getProductList(this.current_page)
        },
        clearFilterSpecial() {
            delete this.filter_b.special;
            delete this.filter_name.special;
            delete this.filter.special;
            this.getProductList(this.current_page)
        },
        clearFilterPrivateLicense() {
            delete this.filter_b.private_license;
            delete this.filter_name.private_license;
            delete this.filter.private_license;

            this.getProductList(this.current_page)
        },
        clearFilterBannedExport() {
            delete this.filter_b.banned_export;
            delete this.filter_name.banned_export;
            delete this.filter.banned_export;
            this.getProductList(this.current_page)
        },
        clearFilterBannedSea() {
            delete this.filter_b.banned_sea;
            delete this.filter_name.banned_sea;
            delete this.filter.banned_sea;
            this.getProductList(this.current_page)
        },
        clearFilterBannedAir() {
            delete this.filter_b.banned_air;
            delete this.filter_name.banned_air;
            delete this.filter.banned_air;
            this.getProductList(this.current_page)
        },


        clearAllFilter() {
            this.filter_a = {}
            this.filter_b = {}
        },
    },
});
