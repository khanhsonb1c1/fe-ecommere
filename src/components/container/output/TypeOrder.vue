<template>
  <span style="font-size: 0.8em !important"
    :class="[
      type == 'Đơn lẻ'
        ? 'bg-primary'
        : type == 'Đơn sỉ'
        ? 'bg-success'
        : type == 'Đơn vận chuyển hộ'
        ? 'bg-warning text-dark'
        : type == 'Đã đấu giá'
        ? 'bg-danger'
        : 'bg-secondary',
      'badge',
    ]"
    >{{ type }}</span
  >
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    type: {
      type: String,
      requied: true,
    },
  },
});
</script>
  