<template>
  <section class="h-100 gradient-custom">
    <div class="container py-5">
      <div class="row d-flex justify-content-center my-4">
        <div class="col-md-8">
          <div class="card mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Giỏ hàng - {{ total_quantity }} sản phẩm</h5>
            </div>
            <div class="card-body">
              <item-payment
                v-for="(item, index) in items"
                :key="index"
                :item="item"
              />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Thanh toán</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li
                  class="
                    list-group-item
                    d-flex
                    justify-content-between
                    align-items-center
                    border-0
                    px-0
                    pb-0
                  "
                >
                  Tạm Tính (Chưa thuế)
                  <span>{{ formatPrice(total_before_tax) }}</span>
                </li>

                <li
                  class="
                    list-group-item
                    d-flex
                    justify-content-between
                    align-items-center
                    border-0
                    px-0
                    pb-0
                  "
                >
                  Thuế
                  <span>{{ formatPrice(total_tax) }}</span>
                </li>

                <li
                  class="
                    list-group-item
                    d-flex
                    justify-content-between
                    align-items-center
                    border-0
                    px-0
                    pb-0
                  "
                >Vận chuyển
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="sea"
                      v-model="ship_method"
                    />
                    <label class="form-check-label" for="inlineRadio1">Đường biển</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="air"
                      v-model="ship_method"
                    />
                    <label class="form-check-label" for="inlineRadio2">Đường bay</label>
                  </div>
                </li>

                <li
                  class="
                    list-group-item
                    d-flex
                    justify-content-between
                    align-items-center
                    border-0
                    px-0
                    pb-0
                  "
                >
                  Địa chỉ
                  <!-- <span>{{}}</span> -->
                </li>

                <li
                  class="
                    list-group-item
                    d-flex
                    justify-content-between
                    align-items-center
                    border-0
                    px-0
                    pb-0
                  "
                >
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="address"
                  >
                    <option
                      v-for="(address, index) in address_list"
                      :key="index"
                      :value="address"
                    >
                      {{ address.address_detail }}
                    </option>
                  </select>
                </li>

                <li
                  class="
                    list-group-item
                    d-flex
                    justify-content-between
                    align-items-center
                    px-0
                  "
                ></li>

                <li
                  class="
                    list-group-item
                    d-flex
                    justify-content-between
                    align-items-center
                    border-0
                    px-0
                    mb-3
                  "
                >
                  <div>
                    <strong>Tổng thanh toán</strong>
                  </div>
                  <span
                    ><strong>{{ formatPrice(total_price) }}</strong></span
                  >
                </li>
              </ul>

              <button
                type="button"
                class="btn btn-primary btn-lg btn-block w-100"
                @click="payment()"
              >
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMinxin } from "../../../mixins/formatValue";
import { cartStore } from "../../../stores/cart";
import ItemPayment from "../../../views/cart/ItemPayment.vue";
import { useAuthStore } from "../../../stores/auth";
import { addressStore } from "../../../stores/address";
export default defineComponent({
  components: { ItemPayment },

  mixins: [formatValueMinxin],

  data() {
    return {
      address: {
        id: '',
        consignee: '',
        address: '',
        tel: '',
        ward_id: '',
        sender_name: '',
        sender_tel: '',

      },
      ship_method: 'sea',
    };
  },

  created() {
    this.getUserInfo();
    this.getAddress();
  },

  computed: {
    items() {
      return cartStore().cart;
    },

    total_price() {
      return cartStore().total_price;
    },

    total_quantity() {
      return cartStore().total_quantity;
    },

    total_tax() {
      return cartStore().total_tax_percent;
    },

    total_before_tax() {
      return cartStore().total_before_tax;
    },

    id_user() {
      return useAuthStore().get_id_user;
    },

    address_list() {
      return addressStore().get_address;
    },

    shipment_info(){
        return {...this.address, ship_method: this.ship_method}
    }
  },

  methods: {
    getAddress() {
      setTimeout(() => {
        addressStore().getAddress(this.id_user);
      }, 2000);
    },

    getUserInfo() {
      useAuthStore().getUserInfo();
    },

    getAddressList() {
      addressStore().getAddress(this.id_user);
    },

    payment(){
        cartStore().payment(this.shipment_info, this.items)
    }
  },
});
</script>

<style scoped>
.form-label {
  position: absolute;
}
.card-header {
  background: none;
}

span {
  color: black;
  font-weight: 600;
}

label{
    color: black;
    font-weight: 600;
}
</style>