<template>
 <Header/>
 <ProductDetail/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from "./header/Index.vue";
import ProductDetail from '../components/container/layout/ProductDetail.vue';

export default defineComponent({
components:{
    Header,
    ProductDetail
}
})
</script>

<style>

</style>