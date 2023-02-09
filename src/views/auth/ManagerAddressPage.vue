<template>
  <CustomerManager>
    <template #address>
      <div class="container">
        <AddressCard
          v-for="(address_item, index) in address"
          :key="index"
          :address="address_item"
        >
          <template #action>
            <ButtonEdit
              id="#updateAddressForm"
              @Edit="handleEdit(address_item)"
            />

            <button-delete @Accept="handleDelete(address_item.id)" /> </template
        ></AddressCard>

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

        <create-address-form id="createAddressForm" />
        <update-address-form id="updateAddressForm" :object="address_edit" />
      </div>
    </template>
  </CustomerManager>
  <Loading v-show="loading" />
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import CustomerManager from "../../components/container/layout/CustomerManager.vue";
import { useAuthStore } from "../../stores/auth";
import { addressStore } from "../../stores/address";
import ModalForm from "../../components/container/modal/ModalForm.vue";
import AddressCard from "../../components/container/card/AddressCard.vue";
import CreateAddressForm from "../../components/auth/address/CreateAddressForm.vue";
import UpdateAddressForm from "../../components/auth/address/UpdateAddressForm.vue";
import ButtonEdit from "../../components/container/button/ButtonEdit.vue";
import ButtonDelete from "../../components/container/button/ButtonDelete.vue";
import { user_address } from "../../services/auth";
import { mapState } from "pinia";
export default defineComponent({
  data() {
    return {
      address_edit: {},
      alert: "",
      error: "",
    };
  },
  created() {
    setTimeout(() => {
      if (this.is_fectch_data) {
        return;
      } else {
        this.getAddressList();
      }
    }, 2000);
  },

  computed: {
    id_user() {
      return useAuthStore().get_id_user;
    },
    ...mapState(addressStore, ["address", "loading", "is_fectch_data"]),
  },

  methods: {
    getAddressList() {
      addressStore().getAddress(this.id_user);
    },

    handleEdit(address: object) {
      console.log("day la address chon: ", address);
      this.address_edit = address;
    },

    handleDelete(id: string) {
      new Promise((resolve, reject) => {
        user_address
          .delete(id)
          .then(() => {
            this.getAddressList();
            resolve((this.alert = "Xóa thành công"));
          })
          .catch((err) => {
            reject((this.alert = err.message));
          });
      });
    },
  },

  components: {
    CustomerManager,
    ModalForm,
    AddressCard,
    CreateAddressForm,
    UpdateAddressForm,
    ButtonEdit,
    ButtonDelete,
  },
});
</script>,
    ButtonDelete