<template>
  <button
    type="button"
    style="margin: 10px 10px 0px 0px"
    @click="handleFilterEmbargo(item.id)"
    :class="[active == true ? 'active' : '', 'btn btn-outline-primary']"
  >
    {{ item.name }}
  </button>
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
        console.log(newFilter)
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
  