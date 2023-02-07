<template>
  <div class="container d-flex">
    <div class="sidebar pt-2">
      <div class="card pt-2 pb-5 mb-3" style="width: 15rem">
        <ul
          :class="[
            show_category ? 'card-show' : 'card-default',
            'list-group list-group-flush ',
          ]"
        >
        <CategoryItem  v-for="(item, index) in categories" :key="index" :item="item" :index="index"/>
        </ul>
        <div
          class="plus-list ps-3 mt-3"
          @click="show_category = !show_category"
        >
          <span class="color-primary mb-2" style="font-size: 1em"
            >Xem thêm</span
          >
          <i class="fas fa-chevron-down color-primary ms-2"></i>
        </div>
      </div>

      <div class="card pt-2 pb-5 mb-3" style="width: 15rem">
        <ul
          :class="[
            show_origin ? 'card-show' : 'card-default',
            'list-group list-group-flush ',
          ]"
        >
          <li class="list-group-item">
            <span class="color-dark mb-2">Xuất xứ</span>
          </li>

          <li
            class="list-group-item"
            v-for="(origin, idx) in origins"
            :key="idx"
            @click="handleClickFilterOrigin(origin.id, origin.name)"
          >
            <i
              :class="[
                idx == 0 || idx == 1
                  ? 'color-primary'
                  : idx == 2 || idx == 3
                  ? 'color-orgin'
                  : idx == 4 || idx == 5
                  ? 'color-danger'
                  : 'color-gray',
                'fas fa-tag fa-fw me-3',
              ]"
            ></i>
            <span>{{ origin.name || "Chưa xác định" }}</span>
          </li>
        </ul>
        <div class="plus-list ps-3 mt-3" @click="show_origin = !show_origin">
          <span class="color-primary mb-2" style="font-size: 1em"
            >Xem thêm</span
          >
          <i class="fas fa-chevron-down color-primary ms-2"></i>
        </div>
      </div>

      <!-- ============= -->

      <div class="card pt-2 pb-5" style="width: 15rem">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <span class="color-dark mb-2">Cấm vận</span>
          </li>

          <li
            class="list-group-item"
            v-for="(item, idx) in embargo_list"
            :key="idx"
          >
            <ButtonEmbargoItem :item="item" :filter="filter" />
          </li>
        </ul>
      </div>
    </div>

    <div class="page-content w-100 mt-2 ms-2">
      <slot name="sort"></slot>
      <slot name="label"></slot>
      <div class="row">
        <slot name="product"> </slot>
        <slot name="pagination"></slot>
        <slot name="loading"></slot>
      </div>
    </div>
  </div>
</template>
    
  <script lang="ts">
import { defineComponent } from "vue";
import { categoryStore } from "../../../stores/category";
import { menuStore } from "../../../stores/menu";
import { originStore } from "../../../stores/orgin";
import { productStore } from "../../../stores/product";
import HeaderMid from "../../../views/header/HeaderMid.vue";
import HeaderTop from "../../../views/header/HeaderTop.vue";
import ButtonEmbargoItem from "../button/ButtonEmbargoItem.vue";
import _ from "lodash";
import CategoryItem from "./CategoryItem.vue";
export default defineComponent({
  components: { HeaderTop, HeaderMid, ButtonEmbargoItem, CategoryItem },
  data() {
    return {
      show_origin: false,
      show_category: false,
      embargo_list: [
        { name: "Hàng hóa đặc biệt", id: "special" },
        { name: "Giấy phép riêng", id: "private_license" },
        { name: "Cấm xuất khẩu", id: "banned_export" },
        { name: "Cấm biển", id: "banned_sea" },
        { name: "Cấm bay", id: "banned_air" },
      ],
    };
  },
  computed: {
    tab() {
      return menuStore().tab;
    },

    categories() {
      return categoryStore().get_categories;
    },

    origins() {
      return originStore().origin_list;
    },

    filter() {
      return productStore().filter_name;
    },
  },

  created() {
    this.getCategories();
    this.getOrigins();
  },

  mounted() {
    this.setTab();
  },

  methods: {
    setTab() {
      menuStore().setTabMenu(String(this.$route.name));
    },

    getCategories() {
      categoryStore().getCategories();
    },

    getOrigins() {
      originStore().getOriginList();
    },

    handleClickFilterOrigin(id: string, value: any) {
      // this.filter.origin = value;
      productStore().updateOriginFilter(id, value);
    },
    
  },
});
</script>
  
<style scoped>
.list-group-item {
  border: none;
}

.card {
  border: none;
}

li {
  color: rgba(0, 0, 0, 0.87);
}
span {
  font-weight: 600;
  font-size: 1.1em;
}

.fa-fw {
  font-size: 1.3em;
}

span:hover {
  color: #e14d2a;
}
</style>
      
  
  