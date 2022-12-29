<template>
  <section class="trending-product section">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <slot name="menu"></slot>
        </div>
        <div class="col-9">
          <div class="row">
            <slot name="sort"></slot>
          </div>
          <div class="row">
            <slot name="filter"></slot>
          </div>
          <div class="row">
            <slot name="item"></slot>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <slot name="pagination"></slot>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  components: {},
  props: {
    title: {
      type: String,
      requied: true,
      default: "",
    },
  },
});
</script>
  