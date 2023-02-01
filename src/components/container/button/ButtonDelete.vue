<template>
  <div>
    <button
      class="btn btn-danger ms-3"
      data-bs-toggle="modal"
      data-bs-target="#deleteModal"
    >
      <i class="fa-solid fa-trash"> </i>
    </button>
    <modal-choose title="Xác nhận xóa"></modal-choose>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalChoose from "../modal/ModalChoose.vue";
export default defineComponent({
  components: { ModalChoose },});
</script>

<style>
</style>