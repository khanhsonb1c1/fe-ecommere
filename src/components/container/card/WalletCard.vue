<template>
  <div class="card w-100 mb-3 no-border">
    <div class="card-body">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-12">
          <div
            :class="[
              wallet.currency_id == 'JPY' ? 'border-danger' : 'border-primary',
              'wallet d-flex align-items-center pt-2 p-1 border rounded w-75',
            ]"
          >
            <i
              :class="[
                wallet.currency_id == 'JPY' ? 'color-red' : 'color-primary',
                'fas fa-wallet me-3 ms-2 fs-3',
              ]"
            ></i>
            <span class="card-text fs-6 color-dark">{{
              wallet.currency_id
            }}</span>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <span>Số dư</span>
          <p class="card-text fs-6 color-dark">{{formatPriceAndCheck(wallet.balance, wallet.currency_id)}}</p>
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <span>Số dư khả dụng</span>
          <p class="card-text fs-6 color-dark">
            {{ formatPriceAndCheck(wallet.amount_available_for_payment, wallet.currency_id) }}
          </p>
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <span>Hạn mức thanh toán</span>
          <p class="card-text fs-6 color-dark">
            {{ formatPriceAndCheck(wallet.credit_limit, wallet.currency_id) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import { formatValueMinxin } from "../../../mixins/formatValue";
import UpdateAddressForm from "../../auth/address/UpdateAddressForm.vue";
export default defineComponent({
  components: { UpdateAddressForm },
  mixins: [formatValueMinxin],
  props: {
    wallet: {
      type: Object,
      default: {},
    },
  },
});
</script>
  
  