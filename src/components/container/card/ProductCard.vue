<template>
  <div class="col-lg-3 col-md-6 col-12">
    <div class="single-product">
      <div class="product-image">
        <img :src="item?.image_url" />
        <div class="button">
          <a class="btn"><i class="lni lni-cart"></i>Mua ngay</a>
        </div>
      </div>
      <div class="product-info">
        <span class="category">{{ item?.category?.name || "..." }}</span>
        <h5 class="title">
          <a>{{ item?.name || "..." }}</a>
        </h5>
        <div class="price">
          <span>{{ item?.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    item: {
      type: Object,
      requied: false,
    },
  },

  computed: {},
});
</script>

<style>
.product-image{
  height: 60%;
}

.product-image img{
  height: 100%;
  object-fit: cover;
}
.single-product{
  height: 4in;
}
.single-product .product-info{
  padding: 0 !important;
}
.product-info .title a{
  font-size: 14px !important;
  font-weight: 400 !important;
  
} 
.single-product .product-info .price span{
  font-size: 14px !important;
  font-weight: 400 !important;
}
</style>