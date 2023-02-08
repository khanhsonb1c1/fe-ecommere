<template>
  <div class="form-check mt-5   ">
    <input type="checkbox" class="form-check-input" v-model="model" />
    <label class="form-check-label ms-2">{{ label }}</label>
  </div>
</template>
    
    <script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    value: {
      type: Boolean,
      required: true,
      default: false,
    },
    label: {
      type: String,
      required: true,
      default: "",
    },
  },
  data() {
    return {
      model: false,
    };
  },
  watch: {
    model(value: string) {
      this.$emit("update:value", value);
    },
  },
});
</script>
    
<style scoped>
</style>