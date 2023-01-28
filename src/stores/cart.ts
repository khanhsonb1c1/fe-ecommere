import { useAuthStore } from './auth';
import { defineStore } from "pinia";
import { orders } from '../services/order';

import _ from 'lodash'
export const cartStore = defineStore({
    id: "cart",
    state: () => ({
        cart: [] as any,
    }),
    getters: {
        total_price: (state) => {
            const arr = state.cart;

            function pricehandler(x: any, y: any) {
                return (
                    x + (y.total_price * y.quantity)
                );
            }
            const total = arr.reduce(pricehandler, 0);
            return total;
        },

        total_before_tax: (state) => {
            const arr = state.cart;

            function pricehandler(x: any, y: any) {
                return (
                    x + (y.price * y.quantity)
                );
            }
            const total = arr.reduce(pricehandler, 0);
            return total;
        },

        total_tax_percent: (state) => {
            const arr = state.cart;

            function pricehandler(x: any, y: any) {
                return (
                    x + ((y.price * y.tax_percent / 100) * y.quantity)
                );
            }
            const total = arr.reduce(pricehandler, 0);
            return total;
        },

        total_quantity: (state) => {
            const arr = state.cart;

            function pricehandler(x: any, y: any) {
                return (
                    x + y.quantity
                );
            }
            const total = arr.reduce(pricehandler, 0);
            return total;
        }
    },
    actions: {
        addProductToCart(product: any, quantity: number) {

            this.getCart()
            if (this.cart == undefined) {
                this.cart = []
            }

            const found = this.cart.find((i: any) => i.product_id == product.product_id)

            if (found) {
                console.log('true:')
                this.cart.map((i: any) => {
                    if (i.product_id == product.product_id) {
                        i.quantity += quantity;
                    }
                })
            } else {
                console.log('else: ')
                this.cart.push({ ...product, quantity: quantity })
            }

            localStorage.setItem("cart", JSON.stringify(this.cart));


        },

        getCart() {
            const x = String(localStorage.getItem('cart'));
            console.log(JSON.parse(x))
            this.cart = JSON.parse(x);
        },

        updateQuantity(id: string, quantity: number) {

            this.cart.map((x: any) => {
                if (x.product_id == id) {
                    x.quantity = quantity
                }
            })

            localStorage.setItem("cart", JSON.stringify(this.cart));
        },

        deleteItem() {
            
        },

        clearCart(){
            localStorage.removeItem("cart");
        },

        payment(shipment_info: any, items: []) {
            return new Promise((resolve, reject) => {

                let customer_id = useAuthStore().get_id_user;
                let data = {
                    "shipment_info[consignee]": shipment_info?.consignee,
                    "shipment_info[address]": shipment_info?.address_detail,
                    "shipment_info[tel]": shipment_info?.tel,
                    "shipment_info[ward_id]": shipment_info?.ward_id,
                    "shipment_info[note]": shipment_info?.note,
                    "shipment_info[sender_name]": shipment_info?.consignee,
                    "shipment_info[sender_tel]": shipment_info?.tel,
                    is_pay_freight_charge_in_lading_bill: 0,
                    purchase_cost_currency_id: 'JPY',
                    service_fee_currency_id: 'VND',
                    customer_id: customer_id,
                    sales_organization_id: 'tomoni-jp',
                    transport_organization_id: 'tomoni-vn',

                };
                items.forEach((x, i) => {
                    let productItemConvert = _.omit(x, ["name", 'image_url', 'total_price', 'category']);

                    const productItem = _.mapKeys(
                        productItemConvert,
                        (value, key) => {
                            return `items[${i}][${key}]`;
                        }
                    );
                    data = { ...data, ...productItem };
                });
                orders.createOder({
                    ...data
                }).then(res => {
                    console.log('thanh cong', res);
                    this.cart = [];
                    localStorage.setItem("cart", JSON.stringify(this.cart));
                    resolve(this.cart)
                }).catch(err =>{
                    reject(err)
                })


            })
        }
    },
});
