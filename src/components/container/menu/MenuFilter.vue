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
          @click="handleClickFilterCategory(category.id, category.name)"
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
          @click="handleClickFilterOrigin(origin.id, origin.name)"
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
        <button-embargo-item
          v-for="item in embargo_list"
          :key="item.id"
          :item="item"
          :filter="filter"
        />
      </div>
    </div>
    <!-- <button @click="handleCheck">check</button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { categoryStore } from "../../../stores/category";
import { originStore } from "../../../stores/orgin";
import { productStore } from "../../../stores/product";
import _ from "lodash";
import ButtonEmbargoItem from "../button/ButtonEmbargoItem.vue";

export default defineComponent({
  components: { ButtonEmbargoItem },
  data() {
    return {
      embargo_list: [
        { name: "Hàng hóa đặc biệt", id: "special" },
        { name: "Giấy phép riêng", id: "private_license" },
        { name: "Cấm xuất khẩu", id: "banned_export" },
        { name: "Cấm biển", id: "banned_sea" },
        { name: "Cấm bay", id: "banned_air" },
      ],
    };
  },
  created() {
    setTimeout(() => {
      categoryStore().getCategories();
    }, 1000);
    originStore().getOriginList();
  },

  // watch: {
  //   filter: {
  //     immediate: true,
  //     deep: true,
  //     handler(new_temp) {
  //       alert("hdhdhdhd");
  //     },
  //   },
  // },

  computed: {
    category_list() {
      return categoryStore().category_list;
    },

    origin_list() {
      return originStore().origin_list;
    },

    filter() {
      return productStore().filter_name;
    },
  },

  methods: {
    handleClickFilterOrigin(id: string, value: any) {
      // this.filter.origin = value;
      productStore().updateOriginFilter(id, value);
    },
    handleClickFilterCategory(id: string, value: any) {
      // this.filter.category = value;
      productStore().updateCategoryFilter(id, value);
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
