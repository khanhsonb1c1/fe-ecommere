<template>
  <span :class="[ship == 'sea' ? 'sea' : 'air']">
    <i class="fas fa-plane-departure"> </i
    ><span class="ms-3">{{ ship == "sea" ? "Đường biển" : "Đường bay" }}</span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    ship: {
      type: String,
    },
  },
});
</script>

<style scoped>
.sea {
  color: #0d6efd;
}
.air {
  color: #dc3545;
}
</style>