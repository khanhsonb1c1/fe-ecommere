<template>
  <div class="card w-100 mb-3">
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
          :data-bs-target="`#address${address.id}`"
          @click="show = true"
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
    <update-address-form :id="`address${address.id}`" :object="address" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UpdateAddressForm from "../../auth/address/UpdateAddressForm.vue";
export default defineComponent({
  components: { UpdateAddressForm },
  props: {
    address: {
      type: Object,
      default: {},
    },
  },

  data() {
    return {
      show: false,
    };
  },
});
</script>

