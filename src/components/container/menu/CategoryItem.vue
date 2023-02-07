<template>
  <li class="list-group-item">
    <i
      :class="[
        index == 0 || index == 1
          ? 'color-primary'
          : index == 2 || index == 3
          ? 'color-orgin'
          : index == 4 || index == 5
          ? 'color-danger'
          : 'color-gray',
        'fas fa-tag fa-fw me-3',
      ]"
    ></i>
    <span @click="handleClickFilterCategory(item.id, item.name)">{{
      item.name
    }}</span>
    <span v-if="item.children.length > 0" @click="show = !show">
      <i class="fas fa-chevron-down color-primary ms-2" v-if="!show"></i>
      <i class="fas fa-chevron-up color-primary ms-2" v-else></i>
    </span>

    <ul class="list-group list-group-flush" v-if="show">
      <li
        class="list-group-item"
        v-for="(childItem, idx) in item.children"
        :key="idx"
      >
        <i class="fas fa-tag fa-fw me-3 color-sliver"></i>
        <span @click="handleClickFilterCategory(childItem.id, childItem.name)">{{ childItem.name }}</span>
      </li>
    </ul>
  </li>
</template>
      
<script lang="ts">
import { defineComponent } from "vue";
import { productStore } from "../../../stores/product";

export default defineComponent({
  props: {
    item: {
      type: Object,
      default: {},
    },
    index: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      show: false,
    };
  },

  methods: {
    handleClickFilterCategory(id: string, value: any) {
      // this.filter.category = value;
      productStore().updateCategoryFilter(id, value);
    },
  },
});
</script>
    
<style scoped>
.list-group-item {
  border: none;
}

.card {
  border: none;
}

li {
  color: rgba(0, 0, 0, 0.87);
}
span {
  font-weight: 600;
  font-size: 1.1em;
}

.fa-fw {
  font-size: 1.3em;
}

span:hover {
  color: #e14d2a;
}
</style>
      
    
    