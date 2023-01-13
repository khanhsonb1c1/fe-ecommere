<template>
  <div>
    <button type="button" class="btn btn-primary btn-sm" v-if="!checkOrigins()">
      {{ filter.origin }} <span @click="handleClearFilterOrigin()">X</span>
    </button>
    <button
      type="button"
      class="btn btn-primary btn-sm"
      v-if="!checkCategory()"
    >
      {{ filter.category }} <span @click="handleClearFilterCategory()">X</span>
    </button>
    <button type="button" class="btn btn-primary btn-sm" v-if="checkSpecial()">
      Hàng đặc biệt<span @click="handleClearFilterSpecial()">X</span>
    </button>
    <button
      type="button"
      class="btn btn-primary btn-sm"
      v-if="checkPrivateLicense()"
    >
      Giấy phép riêng
      <span @click="handleClearFilterPrivateLicense()">X</span>
    </button>
    <button
      type="button"
      class="btn btn-primary btn-sm"
      v-if="checkBannedExport()"
    >
      Cấm xuất khẩu
      <span @click="handleClearFilterBannedExport()">X</span>
    </button>
    <button
      type="button"
      class="btn btn-primary btn-sm"
      v-if="checkBannedSea()"
    >
      Cấm biển <span @click="handleClearFilterBannedSea()">X</span>
    </button>
    <button
      type="button"
      class="btn btn-primary btn-sm"
      v-if="checkBannedAir()"
    >
      Cấm bay
      <span @click="handleClearFilterBannedAir()">X</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { productStore } from "../../../stores/product";
import _ from "lodash";

export default defineComponent({
  computed: {
    filter() {
      return productStore().filter_name;
    },
  },

  methods: {
    checkCategory() {
      return _.isEmpty(this.filter.category);
    },
    checkOrigins() {
      return _.isEmpty(this.filter.origin);
    },
    checkSpecial() {
      return this.filter.special == true;
    },
    checkPrivateLicense() {
      return this.filter.private_license == true;
    },
    checkBannedExport() {
      return this.filter.banned_export == true;
    },
    checkBannedSea() {
      return this.filter.banned_sea == true;
    },
    checkBannedAir() {
      return this.filter.banned_air == true;
    },

    handleClearFilterCategory() {
      productStore().clearFilterCategory();
    },
    handleClearFilterOrigin() {
      productStore().clearFilterOrigin();
    },
    handleClearFilterSpecial() {
      productStore().clearFilterSpecial();
    },
    handleClearFilterPrivateLicense() {
      productStore().clearFilterPrivateLicense();
    },
    handleClearFilterBannedExport() {
      productStore().clearFilterBannedExport();
    },
    handleClearFilterBannedSea() {
      productStore().clearFilterBannedSea();
    },
    handleClearFilterBannedAir() {
      productStore().clearFilterBannedAir();
    },
  },
});
</script>
<style scoped>
span {
  margin-left: 10px;
  color: #eeeeee;
}

span:hover {
  color: #eb455f;
}

button {
  margin-right: 1rem;
}
</style>
