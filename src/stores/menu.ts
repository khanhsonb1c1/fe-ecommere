import { defineStore } from "pinia";

export const menuStore = defineStore({
    id: "menu",
    state: () => ({
        tab: '',

    }),
    getters: {
    },
    actions: {
        setTabMenu(num: string) {
            this.tab = num;

        }
    },
});
