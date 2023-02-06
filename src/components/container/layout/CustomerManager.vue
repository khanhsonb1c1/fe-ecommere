<template>
  <side-bar>
    <template #content>
      <div class="container pt-4">
        <slot name="order_detail"></slot>
        <slot name="order"></slot>
        <slot name="address"></slot>
        <slot name="wallet"></slot>
        <slot name="contract"></slot>
        <slot name="infomation"></slot>
      </div>
    </template>
  </side-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "../menu/SideBar.vue";
export default defineComponent({
  components: { SideBar },
});
</script>


