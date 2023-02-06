<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="row mb-4">
          <!-- ========================== -->

          <div class="col-sm-12 col-md-12 col-xl-6 border-end">
            <div class="mb-3">
              <div style="font-weight: 500; color: #3c4b64">
                <div class="text-uppercase text-left mb-2">Giao hàng</div>
              </div>
              <div class="row p-1">
                <div class="col-7 title"><span>Người gửi</span></div>
                <div class="col-5">
                  <p>{{ order?.shipment_info?.sender_name }}</p>
                </div>
              </div>
              <div class="row p-1">
                <div class="col-7 title"><span>SĐT người gửi</span></div>
                <div class="col-5">
                  <p>{{ order?.shipment_info?.sender_tel }}</p>
                </div>
              </div>
              <div class="row p-1">
                <div class="col-7 title"><span>Người nhận</span></div>
                <div class="col-5">
                  <p>{{ order?.shipment_info?.consignee }}</p>
                </div>
              </div>
              <div class="row p-1">
                <div class="col-7 title"><span>SĐT người nhận</span></div>
                <div class="col-5">
                  <p>{{ order?.shipment_info?.tel }}</p>
                </div>
              </div>
              <div class="row p-1">
                <div class="col-7 title"><span>Địa chỉ</span></div>
                <div class="col-5">
                  <p>{{ order?.shipment_info?.full_address }}</p>
                </div>
              </div>
              <div class="row p-1">
                <div class="col-7 title"><span>Ghi chú</span></div>
                <div class="col-5">
                  <p>{{ order?.shipment_info?.note || "..." }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- ============== -->
          <Journey />

          <!-- ============== -->
        </div>
      </div>
    </div>

    <div class="card mb-3 p-2 mt-3">
      <div
        class="row g-0 mt-2"
        v-for="item in items"
        :key="item.id"
        style="border-bottom: 1px solid rgba(0, 0, 0, 0.125)"
      >
        <div class="col-md-1">
          <img
            :src="item.product.image_url"
            class="img-fluid rounded-start img-thumbnail"
            style="object-fit: cover"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body" style="padding: 0.5rem 1rem">
            <h6 class="card-title">{{ item.product.name }}</h6>
            <p class="card-text">Số lượng: {{ item.quantity }}</p>
            <p class="card-text">Tổng giá: {{ formatPrice(item.balance) }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ====================== -->

    <div class="card-footer text-muted">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-xl-8"></div>
        <div class="col-sm-12 col-md-6 col-xl-4">
          <div class="mb-3">
            <div class="price d-flex flex-wrap justify-content-between align-items-center">
              <div>
                <i class="fas fa-shopping-cart color-danger fs-6"></i>
              <span class="ms-2" style="color: #333">Tiền hàng: </span>
              </div>
              
              <span class="fs-5 ms-2 color-orgin">{{ formatPrice(order?.purchase_cost) }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12 col-md-6 col-xl-8"></div>
        <div class="col-sm-12 col-md-6 col-xl-4">
          <div class="mb-3">
            <div class="price d-flex flex-wrap justify-content-between align-items-center">
              <div><i class="fas fa-truck color-primary"></i>
              <span class="ms-2" style="color: #333">Phí dịch vụ: </span></div>
              
              <span class="fs-5 ms-2 color-orgin ">{{  formatPrice2(order?.service_fee)  }} đ</span>
            </div>
          </div>
        </div>
      </div>

   
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMinxin } from "../../../mixins/formatValue";
import { orderStore } from "../../../stores/order";
import StatusOrder from "../../container/output/StatusOrder.vue";
import _ from "lodash";
import ShipMethod from "../../container/output/ShipMethod.vue";
import Journey from "./Journey.vue";

export default defineComponent({
  components: { StatusOrder, ShipMethod, Journey },
  mixins: [formatValueMinxin],

  computed: {
    order() {
      return orderStore().get_order_detail;
    },

    items() {
      return orderStore().get_items;
    },
  },

  methods: {
    getJourney() {},
  },
});
</script>

<style scoped>
.title {
  color: #3c4b64;
  font-weight: 700;
  font-size: 1.1em;
}


</style>