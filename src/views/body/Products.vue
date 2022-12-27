<template>
  <ProductList title="danh sách sản phẩm">
    <template #item>
      <ProductCard v-for="(product, index) in product_list" :key="index" :item="product"/>
    </template>
  </ProductList>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductCard from "../../components/container/card/ProductCard.vue";
import ProductList from "../../components/container/layout/ProductList.vue";
import { productStore } from "../../stores/product";

export default defineComponent({
  components: { ProductList, ProductCard },

  data() {
    return {
      page: 1,
    };
  },

  created(){
    this.getProductList()
  },

  computed:{
    product_list(){
      return productStore().product_list;
    }
  },

  methods: {
    getProductList() {
      productStore().getProductList(1);
    },
  },
});
</script>

ProductCard