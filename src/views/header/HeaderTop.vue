<template>
    <header class="header navbar-area">
        <div class="topbar">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 col-md-4 col-12">
            <div class="top-left"></div>
          </div>

          <div class="col-lg-4 col-md-4 col-12">
            <div class="top-end">
              <ul class="user-login">
                <li>
                  <div class="user">
                    <!-- <i class="lni lni-user"></i> -->

                    <router-link to="/user/order"
                      ><i class="lni lni-user"></i>
                      {{ me?.displayName }}</router-link
                    >
                  </div>
                </li>
                <li v-if="authenticated">
                  <router-link to="" @click="logout()">
                    <i class="fa fa-lock"></i>
                    Đăng xuất
                  </router-link>
                </li>
                <li v-if="!authenticated">
                  <router-link to="/login"
                    ><i class="fa fa-lock"></i> Login</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </header>
    
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAuthStore } from "../../stores/auth";
import { categoryStore } from "../../stores/category";
export default defineComponent({
  computed: {
    authenticated() {
      return useAuthStore().authenticated;
    },
    me() {
      return useAuthStore().me;
    },
  },
  // created() {
  //   categoryStore().getCategories();
  // },
  methods: {
    logout() {
      useAuthStore()
        .logout()
        .then(() => {
          this.$router.push({ path: "/login" });
        });
    },
  },
});
</script>