<template>
    <tr>
      <td>{{}}</td>
      <td>{{ item?.id }}</td>
      <td><span :class="[item?.status?.name == 'Đã đóng'?'bg-danger': item?.status?.name == 'Đang mở'?'bg-success':'bg-primary','badge']" style="font-size: 0.8em !important">{{ item?.status?.name }}</span></td>
      <td>{{ formatPriceAndCheck(item?.service_fee, item?.service_fee_currency_id) }}</td>
      <td>{{ formatPriceAndCheck(item?.service_fee_paid, item?.service_fee_currency_id) }}</td>
      <td>{{ formatPriceAndCheck(item?.purchase_cost_debited, item?.purchase_cost_currency_id) }}</td>
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