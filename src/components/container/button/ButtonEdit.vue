<template>
  <button
    class="btn btn-primary"
    data-bs-toggle="modal"
    :data-bs-target="id"
    @click="$emit('Edit')"
  >
    <i class="fa-solid fa-pen"></i>
  </button>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    props:{
        id:{
            type: String
        }
    }
});
</script>
  
  