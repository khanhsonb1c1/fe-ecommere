<template>
    <Header/>
    <payment/>
</template>
   
<script lang="ts">
import { defineComponent } from "vue";
import Payment from "../../components/container/layout/Payment.vue";
import Header from '../header/Index.vue'

export default defineComponent({
  components: {
    Header,
    Payment
  },
});
</script>
    
   