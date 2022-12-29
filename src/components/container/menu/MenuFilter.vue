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
          class="btn btn-outline-primary"
          style="margin: 10px 10px 0px 0px"
          v-for="(category, index) in category_list"
          :key="index"
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
          class="btn btn-outline-primary"
          style="margin: 10px 10px 0px 0px"
          v-for="(origin, index) in origin_list"
          :key="index"
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
          class="btn btn-outline-primary"
          style="margin: 10px 10px 0px 0px"
          v-for="(item, index) in embargo_list"
          :key="index"
        >
          {{ item.name }}
        </button>
      </div>
    </div>
  </div>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import { categoryStore } from "../../../stores/category";
import { originStore } from "../../../stores/orgin";

export default defineComponent({
  data() {
    return {
      embargo_list: [
        { name: "Hàng hóa đặc biệt", id: "special" },
        { name: "Giấy phép riêng", id: "private_license" },
        { name: "Cấm xuất khẩu", id: "banned_export" },
        { name: "Cấm biển", id: "banned_sea" },
        { name: "Cấm bay", id: "banned_air" },
      ],

      filter:{
        
      },
    };
  },
  created() {
    this.getOriginList();
  },

  mounted() {
    this.getCategoryList();
  },
  computed: {
    category_list() {
      return categoryStore().category_list;
    },

    origin_list() {
      return originStore().origin_list;
    },
  },

  methods: {
    getCategoryList() {
      categoryStore().getCategoryList();
    },
    getOriginList() {
      originStore().getOriginList();
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