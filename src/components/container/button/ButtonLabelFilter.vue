<template>
  <div>
    <button type="button" class="btn btn-primary btn-sm">
      {{item}} <span>X</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    item: {},
  },
});
</script>
<style scoped>
span {
  margin-left: 10px;
  color: #eeeeee;
}

span:hover {
  color: #eb455f;
}
</style>
