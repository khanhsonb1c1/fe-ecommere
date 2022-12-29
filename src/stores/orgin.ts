import { defineStore } from "pinia";
import { origins } from "../services/product";

export const originStore = defineStore({
    id: "origins",
    state: () => ({

       origin_list:[{
        id: '' as string,
        name: '' as string,
       }]
    }),
    getters: {},
    actions: {
        getOriginList() {
            return new Promise((resolve, reject) => {
               origins.getOrigin().then(res =>{
                this.origin_list = res.data;
                resolve(res.data)
               }).catch(err => {
                reject(err)
               })
            });
        },
    },
});
