<template>
  <Header />
  <Slider></Slider>
  <div class="container mt-3">
    
    <div class="card mt-4" style="background: none; border:none">
        <div class="card-body">
            <h5 class="text-uppercase fw-bold" style="">danh sách sản phẩm</h5>
        </div>
      </div>
    <div class="row mb-5">
      <ProductCard
        v-for="(item, index) in product_list"
        :key="index"
        :item="item"
        :filter="false"
      />
    </div>
    <ViewMore/>
    <Service />
    
  </div>
  <Footer />    
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./header/Index.vue";
import Slider from "./slider/Slider.vue";
import Footer from "./footer/Footer.vue";
import SIdeBarFilter from "../components/container/menu/SIdeBarFilter.vue";
import ProductCard from "../components/container/card/ProductCard.vue";
import { productStore } from "../stores/product";
import Service from "../components/container/menu/Service.vue";
import { categoryStore } from "../stores/category";
import ViewMore from "../components/container/pagination/ViewMore.vue";
export default defineComponent({
  created() {
    productStore().getProductList(1);
    categoryStore().getCategories();
  },
  methods: {},
  computed: {
    product_list() {
      return productStore().product_list;
    },
  },
  components: {
    Header,
    Slider,
    Footer,
    SIdeBarFilter,
    ProductCard,
    Service,
    ViewMore
},
});
</script>
