<template>
  <div class="tabs">
    <ul class="nav nav-tabs mb-3">
      <li class="nav-item" @click="handleClick(1)">
        <a :class="[tab == 1 ? 'active' : '', 'nav-link']"
          ><i class="fas fa-stream fa-fw me-2"></i>Chi tiết đơn hàng</a
        >
      </li>
      <!-- <li class="nav-item" @click="handleClick(2)">
        <a :class="[tab == 2 ? 'active' : '', 'nav-link']"
          ><i class="fas fa-file-contract fa-fw me-2"></i>Hợp đồng</a
        >
      </li> -->
      <li class="nav-item" @click="handleClick(2)">
        <a :class="[tab == 2 ? 'active' : '', 'nav-link']"
          ><i class="fas fa-barcode fa-fw me-2"></i>Tracking</a
        >
      </li>
      <li class="nav-item" @click="handleClick(3)">
        <a :class="[tab == 3 ? 'active' : '', 'nav-link']"
          ><i class="fas fa-bars fa-fw me-2"></i>Nhật ký</a
        >
      </li>
      <li class="nav-item" @click="handleClick(4)">
        <a :class="[tab == 4 ? 'active' : '', 'nav-link']"
          ><i class="fas fa-history fa-fw me-2"></i>Lịch sử giao dịch</a
        >
      </li>
    </ul>
  </div>
  <div class="content">
    <OrderInfo v-show="tab == 1" />
    <OrderTracking v-show="tab == 2" />
    <OrderDiary v-show="tab == 3"/>
  </div>
</template>
    
<script lang="ts">
import { defineComponent } from "vue";
import OrderInfo from "./OrderInfo.vue";
import OrderTracking from "./OrderTracking.vue";
import OrderDiary from "./OrderDiary.vue";
export default defineComponent({
  data() {
    return {
      tab: 1,
    };
  },
  methods: {
    handleClick(tab: number) {
      this.tab = tab;
      this.$router.push({ query: { tab: this.tab } });
    },
  },
  components: { OrderInfo, OrderTracking, OrderDiary },
});
</script>
    
<style scoped>
.nav-link {
  color: #333;
}
.active {
  color: blue !important;
}

</style>