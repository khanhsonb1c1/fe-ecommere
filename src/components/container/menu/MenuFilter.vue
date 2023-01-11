<template>
  <div class="menu mt-5">
    <div class="menu-filter">
      <div class="content">
        <span class="fs-4"
          >Danh mục <i class="fa-solid fa-angle-down"></i
        ></span>
        <div class="border"></div>
      </div>

      <div class="wrapper">
        <button
          type="button"
          style="margin: 10px 10px 0px 0px"
          v-for="(category, index) in category_list"
          :key="index"
          :class="[
            category.name == filter.category ? 'active' : '',
            'btn btn-outline-primary',
          ]"
          @click="handleClickFilterCategory(category.name)"
        >
          {{ category.name }}
        </button>
      </div>
    </div>

    <div class="menu-filter mt-5">
      <div class="content">
        <span class="fs-4">Xuất xứ <i class="fa-solid fa-angle-down"></i></span>
        <div class="border"></div>
      </div>

      <div class="wrapper">
        <button
          type="button"
          style="margin: 10px 10px 0px 0px"
          v-for="(origin, index) in origin_list"
          :key="index"
          @click="handleClickFilterOrigin(origin.name)"
          :class="[
            origin.name == filter.origin ? 'active' : '',
            'btn btn-outline-primary',
          ]"
        >
          {{ origin.name || "Không xác định" }}
        </button>
      </div>
    </div>

    <div class="menu-filter mt-5">
      <div class="content">
        <span class="fs-4">Cấm vận <i class="fa-solid fa-angle-down"></i></span>
        <div class="border"></div>
      </div>

      <div class="wrapper">
        <button
          type="button"
          style="margin: 10px 10px 0px 0px"
          v-for="(item, index) in embargo_list"
          :key="index"
          :class="['btn btn-outline-primary']"
          @click="handleFilterEmbargo(item.id), (item.stt = true)"
        >
          {{ item.name }}
        </button>
      </div>
    </div>
    <button @click="handleCheck">check</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { categoryStore } from "../../../stores/category";
import { originStore } from "../../../stores/orgin";
import { productStore } from "../../../stores/product";
import _ from "lodash";

export default defineComponent({
  data() {
    return {
      embargo_list: [
        { stt: false, name: "Hàng hóa đặc biệt", id: "special" },
        { stt: false, name: "Giấy phép riêng", id: "private_license" },
        { stt: false, name: "Cấm xuất khẩu", id: "banned_export" },
        { stt: false, name: "Cấm biển", id: "banned_sea" },
        { stt: false, name: "Cấm bay", id: "banned_air" },
      ],
    };
  },
  created() {
    setTimeout(() => {
      categoryStore().getCategories();
    }, 1000);
    originStore().getOriginList();
  },

  computed: {
    category_list() {
      return categoryStore().category_list;
    },

    origin_list() {
      return originStore().origin_list;
    },

    filter() {
      return productStore().filter;
    },

    // checkEmbrago(value: any) {
    //   return _.has(this.filter, `${value}`);
    // },
  },

  methods: {
    handleClickFilterOrigin(value: any) {
      // this.filter.origin = value;
      productStore().updateOriginFilter(value);
    },
    handleClickFilterCategory(value: any) {
      // this.filter.category = value;
      productStore().updateCategoryFilter(value);
    },

    handleCheck() {
      productStore().getProductList(1);
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
  color: #0e0e0e;
}
.content {
  padding-bottom: 5px;
}
.border {
  margin: 5px 0px;
}

a {
  color: #0e0e0e;
}
</style>
