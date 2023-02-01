<template>
  <span style="font-size: 0.8em !important"
    :class="[
      status == 'Chờ duyệt'
        ? 'bg-secondary'
        : status == 'Đã duyệt'
        ? 'bg-primary'
        : status == 'Đã hủy'
        ? 'bg-danger'
        : status == 'Đã ghi nợ'
        ? 'bg-warning text-dark'
        : status == 'Đã xong'
        ? 'bg-success'
        : 'bg-info',
      'badge',
    ]"
    >{{ status }}</span
  >
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    status: {
      type: String,
      requied: true,
    },
  },
});
</script>
