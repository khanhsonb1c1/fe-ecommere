import { defineStore } from "pinia";
import { categories } from "../services/product";

export const categoryStore = defineStore({
    id: "categories",
    state: () => ({

        category_list: [{
            id: '' as string,
            name: '' as string,
            parent_id: '' as string,
            children: [
                {
                    id: '' as string,
                    name: '' as string,
                }
            ]
        }]
    }),
    getters: {
        get_categories: (state) => state.category_list
    },
    actions: {
        getCategories() {
            return new Promise((resolve, reject) => {
                categories.getCategory({
                    [`filter[root]`]: 1,
                    include: 'children'

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
