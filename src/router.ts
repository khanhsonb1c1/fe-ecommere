import { createRouter, createWebHistory } from "vue-router";
import _ from "lodash";
import HomePageVue from "./views/HomePage.vue";
import ProductPage from "./views/ProductPage.vue";
import LoginPage from './views/auth/LoginPage.vue';

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
    
  ],
});

// router.beforeEach((routeTo, routeFrom, next) => {
//   const authRequired = routeTo.matched.some((route) => route.meta.authRequired);
//   if (!authRequired) {
//     return next();
//   }

//   useAuthStore()
//     .authenticate()
//     .then(() => {
//       if (_.isEmpty(notificationStore().noti_list[0])) {
//         notificationStore().getNotification(1, {});
//       }
//       if (_.isEmpty(useAuthStore().user_info.id)) {
//         useAuthStore().getUserInfo();
//       }

//       return next();
//     })
//     .catch(() => {
//       router.push({ path: "/login" });
//     });
// });

// router.afterEach((to) => {
//   nextTick(() => {
//     document.title =
//       (to.meta.title || to.name) + " | " + import.meta.env.VITE_APP_NAME;
//   });
// });

export default router;
