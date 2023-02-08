<template>
  <div class="input-form mt-4 ">
    <input type="text" required v-model="model" />
    <div class="underline"></div>
    <label>{{ label }}</label>
  </div>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import _ from "lodash";
export default defineComponent({
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      model: "" as string,
      isDisable: false as boolean,
    };
  },
  methods: {
    getDe(value: string) {
      this.$emit("update:value", value);
    },
    setDisable() {
      this.isDisable = this.disabled;
    },
  },
  created() {
    this.setDisable();
  },
  watch: {
    model: _.debounce(function (this: any, value: string) {
      this.getDe(value);
    }, 200),
    value() {
      this.model = this.value;
    },
    isDisable(disabled) {
      this.$emit("update:disable", disabled);
    },
  },
});
</script>
  