<template>
  <CustomerManager>
    <template #address>
      <div class="container">
        <div
          class="card w-100 mb-3"
          v-for="(address, index) in address_list"
          :key="index"
        >
          <div class="card-body">
            <h5 class="card-title">{{ address.consignee }}</h5>
            <p class="card-text">
              <i
                class="fa-solid fa-location-dot"
                style="margin-right: 0.5rem; color: rgb(60, 75, 100)"
              ></i>
              {{ address.full_address }}
            </p>
            <p class="card-text">
              <i
                class="fa-solid fa-phone"
                style="margin-right: 0.5rem; color: rgb(60, 75, 100)"
              ></i>
              {{ address.tel }}
            </p>
            <p class="card-text">
              <i
                class="fas fa-sticky-note"
                style="margin-right: 0.5rem; color: rgb(60, 75, 100)"
              ></i>
              {{ address.note || "..." }}
            </p>

            <div class="mt-2">
              <button
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#formModal"
              >
                <i class="fa-solid fa-pen"></i>
              </button>
              <button
                class="btn btn-danger ms-3"
                data-bs-toggle="modal"
                data-bs-target="#chooseModal"
              >
                <i class="fa-solid fa-trash"></i>
              </button>
              <a v-if="address.default">
                <i
                  class="fas fa-check ms-5"
                  style="color: #2eb85c; font-size: large"
                ></i>
                <i style="color: #2eb85c">Mặc định</i>
              </a>
            </div>
          </div>
        </div>
        <modal-edit-address />
      </div>
    </template>
  </CustomerManager>
  <Loading v-show="loading" />
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import CustomerManager from "../../components/container/layout/CustomerManager.vue";
import { orderStore } from "../../stores/order";
import { useAuthStore } from "../../stores/auth";
import { addressStore } from "../../stores/address";
import ModalEditAddress from "../../components/container/modal/ModalEditAddress.vue";
export default defineComponent({
  data() {
    return {};
  },

  created() {
    this.getAddressList();
  },

  computed: {
    loading() {
      return orderStore().loading;
    },
    id_user() {
      return useAuthStore().get_id_user;
    },
    address_list() {
      return addressStore().get_address;
    },
  },

  methods: {
    getAddressList() {
      addressStore().getAddress(this.id_user);
    },
  },

  components: { CustomerManager, ModalEditAddress },
});
</script>