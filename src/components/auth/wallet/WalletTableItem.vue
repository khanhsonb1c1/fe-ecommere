<template>
  <tr>
    <td>{{}}</td>
    <td>{{ item?.id }}</td>
    <td><span :class="[item?.currency_id == 'VND'?'bg-danger': item?.currency_id == 'JPY'?'bg-primary':'bg-success','badge']">{{ item?.currency_id }}</span></td>
    <td>{{ formatPriceAndCheck(item?.amount_available_for_payment, item?.currency_id) }}</td>
    <td>{{ formatPriceAndCheck(item?.balance, item?.currency_id) }}</td>
    <td>{{ formatTime(item?.updated_at) }}</td>
  </tr>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import { formatValueMinxin } from "../../../mixins/formatValue";

export default defineComponent({
  mixins: [formatValueMinxin],
  props: {
    item: {
      type: Object,
      default: {},
      requied: true,
    },
  },
});
</script>