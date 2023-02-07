<template>
 <Header/>
 <ProductDetail/>
 <Footer/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from "./header/Index.vue";
import ProductDetail from '../components/container/layout/ProductDetail.vue';
import Footer from './footer/Footer.vue';

export default defineComponent({
components:{
    Header,
    ProductDetail,
Footer
}
})
</script>

<style>

</style>