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
import OrderDetailContent from "./OrderDetailContent.vue";
import { orderStore } from "../../../stores/order";
import _ from "lodash";
import { trackingStore } from "../../../stores/tracking";
export default defineComponent({
  computed: {
    id() {
      return String(this.$route.params.id);
    },

    is_tracking() {
      const trackings = orderStore().get_trackings;

      if (_.isEmpty(trackings)) {
        return false;
      } else {
        return true;
      }
    },

    get_tracking_code() {
      const code = orderStore().get_trackings;
      if (_.isEmpty(code)) {
        return "";
      } else {
        return code[0].code;
      }
    },

    order() {
      return orderStore().get_order_detail;
    },
  },
  mounted() {
    this.getOrderDetail();
  },
  methods: {

    getOrderDetail() {
      orderStore()
        .getOrderDetail(this.id)
        .then(() => {
          if (this.is_tracking) {
            trackingStore().getTrackingInfo(this.get_tracking_code, this.id);
          }
        });

      orderStore().getOrderItems(this.id);
      orderStore().getOrderLogs(this.id);
    },
  },
  components: { CustomerManager, OrderDetailContent },
});
</script>