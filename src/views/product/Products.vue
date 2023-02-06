<template>
  <SiderBarFilter >
    <template #sort>
      <menu-sort></menu-sort>
    </template>
    <template #product>
      <ProductCard v-for="(product, index) in product_list" :key="index" :item="product" />
    </template>
    <template #pagination>
      <Pagination :total-pages="last_page"
        :current-page="page"
        @pagechanged="onPageChange"/>
    </template>
  </SiderBarFilter>
  <Loading v-show="loading"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductCard from "../../components/container/card/ProductCard.vue";
import ProductList from "../../components/container/layout/ProductList.vue";
import Pagination from "../../components/container/pagination/Pagination.vue";
import { productStore } from "../../stores/product";
import SiderBarFilter from '../../components/container/menu/SIdeBarFilter.vue'
import MenuSort from "../../components/container/menu/MenuSort.vue";
import Loading from "../../components/container/animation/Loading.vue";
import { mapState } from "pinia";

export default defineComponent({
  components: { ProductList, ProductCard, Pagination ,SiderBarFilter, MenuSort, Loading},

  data() {
    return {
      page: 1,
    };
  },

  created() {
    this.getProductList();
  },

  computed: {
    ...mapState(productStore, ['product_list', 'last_page', 'loading'])
  },

  watch: {
    page() {
      this.getProductList();
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

