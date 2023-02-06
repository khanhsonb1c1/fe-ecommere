<template>
  <HeaderTop />
  <header-mid />
  <div class="container d-flex">
    <div class="sidebar pt-4">
      <div class="card pt-2 pb-5" style="width: 18rem">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="card mb-3 border-bottom pb-3 ">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="https://lh3.googleusercontent.com/a-/AFdZucpoGXtbJB1EiTnKJRffyubxo_QNvclkIhPk1NQwUg=s96-c"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h6 class="card-title">Đỗ Khánh Sơn</h6>
                    <p class="card-text">IT support</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <router-link to="/user/infomation">
            <li class="list-group-item">
              <i class="far fa-user fa-fw me-3"></i>
              <span>Tài khoản của tôi</span>
            </li>
          </router-link>
          <router-link to="/user/order">
            <li class="list-group-item">
              <i class="fas fa-list fa-fw me-3"></i>
              <span>Đơn hàng</span>
            </li>
          </router-link>
          <router-link to="/user/address">
            <li class="list-group-item">
              <i class="fas fa-map-marked-alt fa-fw me-3"></i>
              <span>Địa chỉ</span>
            </li>
          </router-link>
          <router-link to="/user/wallet">
            <li class="list-group-item">
              <i class="fas fa-wallet fa-fw me-3"></i>
              <span>Ví tài khoản</span>
            </li>
          </router-link>
          <router-link to="/user/contract">
            <li class="list-group-item">
              <i class="fas fa-file-contract fa-fw me-3"></i>
              <span>Hợp đồng</span>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
    <div class="page-content w-100">
      <slot name="content"> </slot>
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import { menuStore } from "../../../stores/menu";
import HeaderMid from "../../../views/header/HeaderMid.vue";
import HeaderTop from "../../../views/header/HeaderTop.vue";
export default defineComponent({
  components: { HeaderTop, HeaderMid },
  data() {},
  computed: {
    tab() {
      return menuStore().tab;
    },
  },

  mounted() {
    this.setTab();
  },

  methods: {
    setTab() {
      menuStore().setTabMenu(String(this.$route.name));
    },
  },
});
</script>

<style scoped>
.list-group-item {
  border: none;
}

.card {
  border: none;
}

img {
  border-radius: 50% !important;
}

a{
  color: rgba(0,0,0,.87);
  
}
span{
  font-weight: 600;
  font-size: 1.1em;
}

.fa-list {
color: #0081B4;
}
.fa-user{
  color: #0081B4;
}
.fa-map-marked-alt{
  color: #E14D2A;
}

.fa-wallet{
  color: #E14D2A;
}

.fa-file-contract{
  color: #F1A661
}
.fa-fw{
  font-size: 1.3em
}

span:hover{
  color: #E14D2A;
}
</style>
  

