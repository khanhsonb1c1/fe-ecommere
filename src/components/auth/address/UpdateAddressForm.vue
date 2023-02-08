<template>
  <ModalForm title="Chỉnh sửa địa chỉ" :id="id" @handleSubmit="handleCreate">
    <template #form>
      <form>
        <input-field
          :value="address.consignee"
          label="Họ và tên"
          @update:value="address.name = $event"
        />
        <input-field
          :value="address.tel"
          label="SĐT"
          @update:value="address.tel = $event"
        />
        <input-address
          :id="address.ward_id"
          :address="address.address_detail"
          @update:id="address.ward_id = $event"
          @update:address="address.address_detail = $event"
        />
        <input-field
          :value="address.note"
          label="Ghi chú"
          @update:value="address.note = $event"
        />

        <button-check-box
          :value="address.default"
          label="Địa chỉ mặc định"
          @update:value="address.default = $event"
        />
      </form>
    </template>
  </ModalForm>
</template>
    
    <script lang="ts">
import { defineComponent } from "vue";
import InputAddress from "../../container/input/InputAddress.vue";
import InputField from "../../container/input/InputField.vue";
import { user_address } from "../../../services/auth";
import { useAuthStore } from "../../../stores/auth";
import { addressStore } from "../../../stores/address";
import ModalForm from "../../container/modal/ModalForm.vue";
export default defineComponent({
  components: { InputField, InputAddress, ModalForm },
  props: {
    id: {
      type: String,
      requied: true,
    },
    address_id: {
      type: String,
      requied: true,
      default: "",
    },
    object: {
      type: Object,
      requied: true,
      default: {},
    },
  },

  computed: {
    id_user() {
      return useAuthStore().get_id_user;
    },
    address() {
      const obj = this.object;
      return obj;
    },
  },

  methods: {
    handleCreate() {
      return user_address
        .update(this.address_id, {
          consignee: this.address.consignee,
          tel: this.address.tel,
          note: this.address.note,
          address_detail: this.address.address_detail,
          default: this.address.default,
        })
        .then((res) => {
          addressStore().getAddress(this.id_user);
        })
        .catch((err) => {});
    },
  },
});
</script>
    
    