<template>
  <div>
    <button class="btn" @click="handleClick()">
      <i class="fas fa-long-arrow-right"></i>
    </button>
  </div>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    id: {
      type: String,
      default: "",
      requied: true,
    },
    path:{
        type: String,
        default:'',
        requied: true,
    }
  },
  methods: {
    handleClick(){
        this.$router.push({ path: `/${this.path}/${this.id}` });
    }
  },
});
</script>
  
<style scoped>
.btn {
  font-size: 0.8rem;
}
.btn:hover {
  background-color: rgb(60, 75, 100);
  color: #fff;
}
</style>