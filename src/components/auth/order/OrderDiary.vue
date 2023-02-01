<template>
  <div class="card">
    <diary-item v-for="(log,idx) in logs" :key="idx" :log="log"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMinxin } from "../../../mixins/formatValue";
import { orderStore } from "../../../stores/order";
import DiaryItem from "./DiaryItem.vue";

export default defineComponent({
  components: { DiaryItem },
  mixins: [formatValueMinxin],
  computed: {
    logs(){
      return  orderStore().get_logs
    }
  },
});
</script>