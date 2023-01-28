<template>
  <section class="trending-product section">
    <div class="container">
      <div class="row">
        <div class="col-3" v-show="filter">
          <slot name="menu"></slot>
        </div>
        <div :class="[filter ? 'col-9': 'col-12']">
          <div class="row" v-show="filter">
            <slot name="sort"></slot>
          </div>
          <div class="row" v-show="filter">
            <ul class="nav" style="margin-left: 15px">
              <li class="nav-item" style="margin: 20px 5px">
                <slot name="filter"></slot></li>
            </ul>
           
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

    filter:{
      type: Boolean,
      default: false,
    }
  },
});
</script>
  