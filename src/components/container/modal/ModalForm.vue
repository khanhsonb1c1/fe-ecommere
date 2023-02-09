<template>
  <div class="modal fade show" :id="id" tabindex="-1" aria-model="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-uppercase">{{ title }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <slot name="form"></slot>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Hủy
          </button>
          <button
            data-bs-dismiss="modal"
            @click="handleClick()"
            type="button"
            class="btn btn-primary"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import _ from "lodash";
export default defineComponent({
  props: {
    id: {
      type: String,
      default: true,
    },

    title: {
      type: String,
      default: "",
      requied: false,
    },
  },

  methods: {
    handleClick: _.debounce(function (this: any) {
      this.$emit("handleSubmit");
    }, 500),
  },
});
</script>

<style>
</style>