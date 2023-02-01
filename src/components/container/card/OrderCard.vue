<template>
  <div class="card mt-4">
    <div class="card-header p-2">{{ item?.id }}</div>
    <div class="card-body mb-3 p-2">
      <div class="row g-0 mt-2">
        <div class="col-md-1">
          <img
            :src="
              item?.first_item?.product?.image_url ||
              'https://via.placeholder.com/400'
            "
            class="img-fluid rounded-start img-thumbnail"
            style="object-fit: cover"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body" style="padding: 0.5rem 1rem">
            <h6 class="card-title">
              {{ item?.first_item?.product?.name || "..." }}
            </h6>
            <!-- <p class="card-text">Số lượng: {{ item.quantity }}</p>
          <p class="card-text">Tổng giá: {{}}</p> -->
          </div>
        </div>
      </div>
    </div>

    <Loading v-show="loading" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { orderStore } from "../../../stores/order";

export default defineComponent({
  props: {
    item: {
      type: Object,
      default: {},
      requied: true,
    },
  },

  computed: {
    loading() {
      return orderStore().loading;
    },
  },

  methods: {},

  components: {},
});
</script>
