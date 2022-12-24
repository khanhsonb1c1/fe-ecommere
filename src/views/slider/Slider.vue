<template>
  <div class="slider-wrap">
    <div class="main">
      <img
        src="../../assets/logo/banner.78d5595a.png"
        alt=""
        class="img-feature"
      />
      <div class="control prev">
        <i class="fa-sharp fa-solid fa-chevron-left"></i>
      </div>
      <div class="control next">
        <i class="fa-sharp fa-solid fa-chevron-right"></i>
      </div>
      <div class="list-image">
        <div><img src="../../assets/logo/banner-1-bg.jpg" alt="" /></div>
        <div><img src="../../assets/logo/banner-2-bg.jpg" alt="" /></div>
        <div><img src="../../assets/logo/banner.78d5595a.png" alt="" /></div>
        <div><img src="../../assets/logo/banner.78d5595a.png" alt="" /></div>
        <div><img src="../../assets/logo/banner.78d5595a.png" alt="" /></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" >
import { defineComponent } from "vue";
export default defineComponent({
  components: {},
});
</script>
<style scoped>
.slider-wrap {
  height: 600px;
  /* background: red; */
  width: 1200px;
  margin: 0 auto;
}

.main {
  height: 80%;
  margin-bottom: 20px;
  position: relative;
}

.list-image {
  margin-top: 20px;
  height: 15%;
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.list-image div {
  flex: 1;
  padding: 5px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.control {
  position: absolute;
  top: 50%;
  font-size: 50px;
  color: white;
  transform: translateY(-50%);
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.active{
    background: rgb(245, 58, 58);
}
</style>