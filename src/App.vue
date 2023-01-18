<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="body">
    <RouterView />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { cartStore } from "./stores/cart";
export default defineComponent({
  created(){
    cartStore().getCart();
  }
})
</script>
