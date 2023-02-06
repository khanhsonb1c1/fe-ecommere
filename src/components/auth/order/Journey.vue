<template>
  <div class="col-sm-12 col-md-12 col-xl-6">
    <div class="row">
      <div class="col-md-12">
        <div
          class="d-flex justify-content-around flex-wrap"
          v-if="!is_tracking"
        >
          <img
            class="mb-2"
            src="https://img.icons8.com/cute-clipart/200/null/search-more.png"
          />
          <p class="fs-5 color-orgin mt-3 text-uppercase">
            Chưa cập nhật tiến độ giao hàng
          </p>
        </div>

        <div v-else>
          <div style="font-weight: 500; color: #3c4b64">
            <div class="text-uppercase text-left mb-2">Mã tracking: {{tracking_code }}</div>
          </div>
          <ul class="timeline-3">
            <li
              class="d-flex"
              v-for="(step, index) in journey_of_order"
              :key="index"
            >
              <div class="float-left col-4 ms-5">
                <a class="">{{ formatTime(step.created_at) }}</a>
              </div>
              <div>
                <p class="float-left">{{ step.message }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { orderStore } from "../../../stores/order";
import { trackingStore } from "../../../stores/tracking";
import _ from "lodash";
import { formatValueMinxin } from "../../../mixins/formatValue";
export default defineComponent({
  mixins: [formatValueMinxin],
  computed: {
    order() {
      return orderStore().get_order_detail;
    },

    is_tracking() {
      const trackings = orderStore().get_trackings;

      if (_.isEmpty(trackings)) {
        return false;
      } else {
        return true;
      }
    },

    tracking_code(){
        return trackingStore().code_default
    },

    journey_of_order() {
      return trackingStore().get_journey_of_order;
    },
  },

  methods: {},
});
</script>

<style scoped>
ul.timeline-3 {
  list-style-type: none;
  position: relative;
}
ul.timeline-3:before {
  content: " ";
  background: #d4d9df;
  display: inline-block;
  position: absolute;
  left: 29px;
  width: 2px;
  height: 100%;
  z-index: 400;
}
ul.timeline-3 > li {
  margin: 20px 0;
  padding-left: 20px;
}
ul.timeline-3 > li:before {
  content: " ";
  background: white;
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  border: 3px solid #22c0e8;
  left: 20px;
  width: 20px;
  height: 20px;
  z-index: 400;
}
</style>