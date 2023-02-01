<template>
  <side-bar></side-bar>
  <main>
    <div class="container pt-4">
      <slot name="order_detail"></slot>
      <slot name="order"></slot>
      <slot name="address"></slot>
      <slot name="wallet"></slot>
      <slot name="contract"></slot>
      <slot name="infomation"></slot>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "../menu/SideBar.vue";
export default defineComponent({
  components: { SideBar },
});
</script>

<style scoped>

@media (min-width: 991.98px) {
  main {
    padding-left: 240px;
  }
}
span {
  font-size: medium !important;
}
.list-group-item {
  background: none !important;
  color: #fff;
  margin: 10px 0px;
  border: none !important;
}
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 58px 0 0; /* Height of navbar */
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);
  width: 240px;
  z-index: 600;
}

@media (max-width: 991.98px) {
  .sidebar {
    width: 100%;
  }
}
.sidebar .active {
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}
</style>
