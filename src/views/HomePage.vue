<template>
  <Header />
  <Slider></Slider>
  <div class="container mt-3">
    <div class="card">
      <div class="card-header"></div>
      <div class="card-body"></div>
    </div>
  </div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./header/Index.vue";
import Slider from "./slider/Slider.vue";
import Footer from "./footer/Footer.vue";
import SIdeBarFilter from "../components/container/menu/SIdeBarFilter.vue";
export default defineComponent({
  components: { Header, Slider, Footer, SIdeBarFilter },
});
</script>
