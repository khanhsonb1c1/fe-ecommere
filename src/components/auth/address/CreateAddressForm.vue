<template>
  <ModalForm title="Thêm mới địa chỉ" :id="id" @handleSubmit="handleCreate">
    <template #form>
      <form>
        <input-field
          :value="address.name"
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

        <ButtonCheckBox
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
import ButtonCheckBox from "../../container/button/ButtonCheckBox.vue";
export default defineComponent({
  props: {
    id: {
      type: String,
      requied: true,
    },
  },
  components: { InputField, InputAddress, ModalForm, ButtonCheckBox },

  data() {
    return {
      address: {
        name: "",
        tel: "",
        note: "",
        address_detail: "",
        ward_id: "",
        default: false,
      },
    };
  },

  computed: {
    id_user() {
      return useAuthStore().get_id_user;
    },
  },

  methods: {
    handleCreate() {
      return user_address
        .create({
          consignee: this.address.name,
          tel: this.address.tel,
          note: this.address.note,
          address_detail: this.address.address_detail,
          user_id: this.id_user,
          ward_id: this.address.ward_id,
          default: this.address.default,
        })
        .then((res) => {
          addressStore().getAddress(this.id_user);
          this.clear()
        })
        .catch((err) => {});
    },

    clear() {
      this.address.name = "";
      this.address.tel = "";
      this.address.note = "";
      this.address.address_detail = "";
      this.address.ward_id = "";
    },
  },
});
</script>
    
    