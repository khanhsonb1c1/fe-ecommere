<template>
    <Header/>
    <Slider/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./header/Index.vue";
import Slider from "./slider/Slider.vue"
export default defineComponent({
    components:{Header,Slider}
});
</script>