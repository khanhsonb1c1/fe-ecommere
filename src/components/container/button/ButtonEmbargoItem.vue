<template>
  <div>
    <input
      class="form-check-input fs-6 me-3"
      type="checkbox"
      v-model="active"
      @click="handleFilterEmbargo(item.id)"
    />
    <span class="">{{ item.name }}</span>
  </div>

</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import { productStore } from "../../../stores/product";
import _ from "lodash";

export default defineComponent({
  props: {
    item: {
      type: Object,
      default: {},
    },
  },

  data() {
    return {
      active: false,
    };
  },

  computed: {
    filter() {
      return productStore().filter_name;
    },
  },

  watch: {
    filter: {
      deep: true,
      handler(newFilter) {
        console.log(newFilter);
        this.checkEmbrago();
      },
    },

  },

  methods: {
    checkEmbrago() {
      this.active = _.has(this.filter, `${this.item.id}`);
    },
    handleFilterEmbargo(value: any) {
      switch (value) {
        case "special":
          productStore().updateSpecialFilter();
          break;
        case "private_license":
          productStore().updatePrivateLicenseFilter();
          break;
        case "banned_export":
          productStore().updateBannedExportFilter();
          break;
        case "banned_air":
          productStore().updateBannedAirFilter();
          break;
        case "banned_sea":
          productStore().updateBannedSeaFilter();
          break;
      }
    },
  },
});
</script>

<style scoped>
span {
  font-weight: 600;
  font-size: 1.1em;
}
</style>
  