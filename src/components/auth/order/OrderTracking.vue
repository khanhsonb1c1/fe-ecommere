<template>
  <div class="card">
    <div
      class="card-body d-flex justify-content-between flex-wrap flex-row"
      v-for="tracking in trackings"
      :key="tracking.code"
    >
      <div>
        <h6 class="card-title float-start" style="line-height: inherit">
          {{ tracking.code }}
        </h6>
        <span
          :class="[
            tracking.received == true ? 'bg-success' : 'bg-warning',
            'badge ms-2 p-1',
          ]"
          >{{
            tracking.received == true
              ? "Đã nhận hàng tại kho"
              : "Chưa nhận hàng tại kho"
          }}</span
        >
      </div>

      <p class="card-text">{{ formatTime(tracking.updated_at) }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMinxin } from "../../../mixins/formatValue";
import { orderStore } from "../../../stores/order";

export default defineComponent({
  mixins: [formatValueMinxin],
  computed: {
    trackings() {
      return orderStore().get_trackings;
    },
  },
});
</script>