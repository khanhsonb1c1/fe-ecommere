import { useAuthStore } from './stores/auth';
import { createRouter, createWebHistory } from "vue-router";
import _ from "lodash";
import HomePageVue from "./views/HomePage.vue";
import ProductPage from "./views/ProductPage.vue";
import ProductDetailPage from "./views/ProductDetailPage.vue";
import LoginPage from './views/auth/LoginPage.vue';
import CartPayment from './views/cart/CartPayment.vue';
import ManagerOrderPage from './views/auth/ManagerOrderPage.vue'
import ManagerAddressPage from './views/auth/ManagerAddressPage.vue'
import ManagerContractPage from './views/auth/ManagerContractPage.vue'
import ManagerWalletPage from './views/auth/ManagerWalletPage.vue'
import OrderDetail from "./components/auth/order/OrderDetail.vue"


import { nextTick } from 'vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/",
      name: "home",
      component: HomePageVue,
      meta: { title: "Trang chủ" },
    },
    {
      path: "/login",
      name: "login-page",
      component: LoginPage,
      meta: {
        title: "Đăng nhập",
        // authRequired: true,
      },
    },
    {
      path: "/product",
      name: "product",
      component: ProductPage,
      meta: {
        title: "Sản phẩm",

      },
    },
    {
      path: "/product/:id",
      name: "product_detail",
      component: ProductDetailPage,
      meta: {
        title: "Chi tiết sản phẩm",

      },
    },
    {
      path: "/payment",
      name: "payment",
      component: CartPayment,
      meta: {
        title: "Thanh toán",
        authRequired: true,

      },
    },
    {
      path: "/user/order",
      name: "order",
      component: ManagerOrderPage,
      meta: {
        title: "Danh sách đơn hàng",
        authRequired: true,
      },
    },
    {
      path: "/user/order/:id",
      name: "order_detail",
      component: OrderDetail,
      meta: {
        title: "Chi tiết đơn hàng",
        authRequired: true,

      },
    },

    {
      path: "/user/address",
      name: "address",
      component: ManagerAddressPage,
      meta: {
        title: "Địa chỉ",
        authRequired: true,

      },
    },
    {
      path: "/user/contract",
      name: "contract",
      component: ManagerContractPage,
      meta: {
        title: "Hợp đồng",
        authRequired: true,

      },
    },
    {
      path: "/user/wallet",
      name: "wallet",
      component: ManagerWalletPage,
      meta: {
        title: "Ví tài khoản",
        authRequired: true,

      },
    },


  ],
});

router.beforeEach((routeTo, routeFrom, next) => {
  const authRequired = routeTo.matched.some((route) => route.meta.authRequired);
  if (!authRequired) {
    return next();
  } else {
    useAuthStore()
      .authenticate()
      .then(() => {

        if (_.isEmpty(useAuthStore().user_info.id)) {
          useAuthStore().getUserInfo();
        }

        return next();
      })
      .catch(() => {
        router.push({ path: "/login" });
      });
  }


});

router.afterEach((to) => {
  nextTick(() => {
    document.title =
      (to.meta.title || to.name) + " | " + import.meta.env.VITE_APP_NAME;
  });
});

export default router;
