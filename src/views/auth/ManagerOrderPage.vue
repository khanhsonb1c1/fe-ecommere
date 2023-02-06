<template>
  <div >
    <CustomerManager>
      <template #order>
        <div>
          <OrderCard
            v-for="(order, index) in order_list"
            :key="index"
            :item="order"
          />
        </div>
      </template>
    </CustomerManager>
    <Loading v-show="loading" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomerManager from "../../components/container/layout/CustomerManager.vue";
import { orderStore } from "../../stores/order";
import OrderCard from "../../components/container/card/OrderCard.vue";
import Loading from "../../components/container/animation/Loading.vue";
export default defineComponent({

  mounted() {
    this.getOrderList();
  },

  computed: {
    order_list() {
      return orderStore().order_list;
    },
    loading() {
      return orderStore().loading;
    },
  },

  methods: {
    getOrderList() {
      orderStore().getOrderList();
    },
  },

  components: { CustomerManager, OrderCard, Loading },
});
</script>
