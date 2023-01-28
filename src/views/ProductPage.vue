<template>
  <Header />
  <ProductList :filter="true">
    <template #sort>
      <menu-sort />
    </template>
    <template #filter>
      <ButtonLabelFilter />
    </template>
    <template #menu>
      <MenuFilter />
    </template>
    <template #item>
      <ProductCard
        v-for="product in product_list"
        :key="product.id"
        :item="product"
      />
    </template>
    <template #pagination>
      <Pagination
        :total-pages="last_page"
        :current-page="page"
        @pagechanged="onPageChange"
      />
    </template>
  </ProductList>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductCard from "../components/container/card/ProductCard.vue";
import ProductList from "../components/container/layout/ProductList.vue";
import Pagination from "../components/container/pagination/Pagination.vue";
import { productStore } from "../stores/product";
import Header from "./header/Index.vue";
import MenuFilter from "../components/container/menu/MenuFilter.vue";
import MenuSort from "../components/container/menu/MenuSort.vue";
import ButtonLabelFilter from "../components/container/button/ButtonLabelFilter.vue";

export default defineComponent({
  components: {
    ProductList,
    ProductCard,
    Pagination,
    Header,
    MenuFilter,
    MenuSort,
    ButtonLabelFilter,
  },

  data() {
    return {
      page: 1,
    };
  },

  created() {
    this.getProductList();
  },

  computed: {
    product_list() {
      return productStore().product_list;
    },
    last_page() {
      return productStore().last_page;
    },
    get_filter() {
      return productStore().filter;
    },
  },

  watch: {
    page() {
      this.getProductList();
    },

    get_filter: {
      deep: true,
      handler() {
        this.getProductList();
      },
    },
  },

  methods: {
    getProductList() {
      productStore().getProductList(this.page);
    },

    onPageChange(page: number) {
      console.log(page);
      this.page = page;
    },
  },
});
</script>
