<template>
  <CustomerManager>
    <template #order>
      <div>
        <table class="table table-bordered">
          <thead class="table-dark">
            <tr>
              <td v-for="(col, index) in column" :key="index">{{ col }}</td>
            </tr>
          </thead>
          <tbody>
            <OrderTableItem
              v-for="(order, index) in order_list"
              :key="index"
              :item="order"
            />
          </tbody>
        </table>
      </div>
    </template>
  </CustomerManager>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomerManager from "../../components/container/layout/CustomerManager.vue";
import { orderStore } from "../../stores/order";
import OrderTableItem from "../../components/auth/order/OrderTableItem.vue";
export default defineComponent({
  data() {
    return {
      column: ["...", "Mã đơn", "Sản phẩm", "Trạng thái", "Loại", "Ngày tạo"],
    };
  },

  mounted() {
    this.getOrderList();
  },

  computed: {
    order_list() {
      return orderStore().order_list;
    },
  },

  methods: {
    getOrderList() {
      orderStore().getOrderList();
    },
  },

  components: { CustomerManager, OrderTableItem },
});
</script>
