<template>
  <header>
    <nav
      id="sidebarMenu"
      class="collapse d-lg-block sidebar collapse"
      style="background: #3c4b64"
    >
      <div class="position-sticky">
        <div class="list-group list-group-flush mx-3 mt-4">
          <a
            class="list-group-item list-group-item-action py-2 ripple"
            :class="{ active: tab == 'infomation' }"
            @click="setTab()"
          >
            <i class="far fa-user fa-fw me-3"></i><span>Thông tin</span>
          </a>
          <router-link to="/user/address">
            <a
              class="list-group-item list-group-item-action py-2 ripple"
              :class="{ active: tab == 'address' }"
              @click="setTab()"
              ><i class="fas fa-chart-line fa-fw me-3"></i
              ><span>Sổ địa chỉ</span></a
            >
          </router-link>
          <router-link to="/user/wallet">
            <a
              class="list-group-item list-group-item-action py-2 ripple"
              :class="{ active: tab == 'wallet' }"
              @click="setTab()"
            >
              <i class="fas fa-wallet fa-fw me-3"></i><span>Ví tài khoản</span>
            </a>
          </router-link>

          <router-link to="/user/order">
            <a
              class="list-group-item list-group-item-action py-2 ripple"
              :class="{ active: tab == 'order' }"
              @click="setTab()"
              ><i class="fas fa-list fa-fw me-3"></i><span>Đơn hàng</span></a
            >
          </router-link>
          <router-link to="/user/contract">
            <a
              class="list-group-item list-group-item-action py-2 ripple"
              :class="{ active: tab == 'contract' }"
              @click="setTab()"
              ><i class="fas fa-file-contract fa-fw me-3"></i
              ><span>Hợp đồng</span></a
            >
          </router-link>
          <router-link to="/">
            <a class="list-group-item list-group-item-action py-2 ripple"
              ><i class="fas fa-home fa-fw me-3"></i><span>Trang chủ</span></a
            >
          </router-link>
        </div>
      </div>
    </nav>
    <nav id="main-navbar" class="navbar navbar-expand-lg navbar-dark fixed-top">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Brand -->
        <a class="navbar-brand" href="#">
          <img
            style="margin-left: 20px"
            src="../../../assets/logo/logo.png"
            height="40"
            loading="lazy"
          />
        </a>
      </div>
    </nav>
  </header>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import { menuStore } from "../../../stores/menu";
export default defineComponent({
  data() {},
  computed: {
    tab() {
      return menuStore().tab;
    },
  },

  mounted(){
    this.setTab()
  },

  methods: {
    setTab() {
      menuStore().setTabMenu(String(this.$route.name));
    },
  },
});
</script>
  
<style scoped>
@media (min-width: 991.98px) {
  main {
    padding-left: 240px;
  }
}
span {
  font-size: medium !important;
}
.list-group-item {
  background: none !important;
  color: #fff;
  margin: 10px 0px;
  border: none !important;
}

.list-group-item:hover {
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  background: rgba(49, 10, 245, 0.362) !important;
}
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 58px 0 0; /* Height of navbar */
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);
  width: 240px;
  z-index: 600;
}

@media (max-width: 991.98px) {
  .sidebar {
    width: 100%;
  }
}
.sidebar .active {
  background: rgba(39, 17, 244, 0.541) !important;
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgb(0 0 0 / 12%);
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}
</style>
  