<template>
    <Header/>
    <Slider/>
    <Products/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./header/Index.vue";
import Slider from "./slider/Slider.vue";
import Products from "./body/Products.vue";
export default defineComponent({
    components:{Header,Slider,Products}
});
</script>