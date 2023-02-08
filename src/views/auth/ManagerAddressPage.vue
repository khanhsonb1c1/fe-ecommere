<template>
  <CustomerManager>
    <template #address>
      <div class="container">
        <AddressCard
          v-for="(address, index) in address_list"
          :key="index"
          :address="address"
        />

        <div class="card mt-3 border-dashed">
          <div
            class="card-body d-flex justify-content-center"
            data-bs-toggle="modal"
            data-bs-target="#createAddressForm"
          >
            <div class="wrapper">
              <i class="far fa-plus fa-fw me-3 color-primary fs-5"></i>
              <span class="fs-6 color-blue">Thêm địa chỉ mới</span>
            </div>
          </div>
        </div>

        <create-address-form id="createAddressForm"/>
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
import ModalForm from "../../components/container/modal/ModalForm.vue";
import AddressCard from "../../components/container/card/AddressCard.vue";
import CreateAddressForm from "../../components/auth/address/CreateAddressForm.vue";
export default defineComponent({


  created() {
    setTimeout(() => {
      this.getAddressList();
    }, 2000);
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

  components: { CustomerManager, ModalForm, AddressCard, CreateAddressForm },
});
</script>