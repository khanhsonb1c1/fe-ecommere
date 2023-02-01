<template>
  <customer-manager>
    <template #order_detail>
      <order-detail-content></order-detail-content>
    </template>
  </customer-manager>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomerManager from "../../container/layout/CustomerManager.vue";
import OrderDetailContent from './OrderDetailContent.vue'
import { orderStore } from "../../../stores/order";
export default defineComponent({
  computed: {
    id() {
      return String(this.$route.params.id);
    },

    order(){
        return orderStore().get_order_detail;
    }
  },
  mounted() {
    this.getOrderDetail();
  },
  methods: {
    getOrderDetail() {
      orderStore().getOrderDetail(this.id);
      orderStore().getOrderItems(this.id);
       orderStore().getOrderLogs(this.id)
    },
  },
  components: { CustomerManager,OrderDetailContent },
});
</script>