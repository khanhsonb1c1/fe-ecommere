import { defineStore } from "pinia";
import { categories } from "../services/product";

export const categoryStore = defineStore({
    id: "category",
    state: () => ({

        category_list: [{
            id: '' as string,
            name: '' as string,
            parent_id: '' as string,
            parent: {
                id: '' as string,
                name: '' as string,
            }
        }]
    }),
    getters: {},
    actions: {
        getCategoryList() {
            return new Promise((resolve, reject) => {
                categories.getCategory({
                    include: 'parent'
                }).then(res => {
                    this.category_list = res.data;
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
            });
        },
    },
});
