<template>
  <Header />
  <Products />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./header/Index.vue";
import Slider from "./slider/Slider.vue";
import Products from "./product/Products.vue";
import Footer from "./footer/Footer.vue";
export default defineComponent({
  components: { Header, Slider, Products, Footer },
});
</script>
