<template>
  <div class="col-lg-3 col-md-6 col-12">
    <div
      :class="[
        filter == false ? 'single-product-height' : '',
        'single-product',
      ]"
    >
      <div class="product-image">
        <img :src="item?.image_url" />
        <div class="button">
          <a class="btn"><i class="lni lni-cart"></i>Mua ngay</a>
        </div>
      </div>
      <div class="product-info" @click="redirectToDetail">
        <span class="category">{{ item?.category?.name || "..." }}</span>

        <div class="title">
          <a >{{ item?.name || "..." }}</a>
        </div>

        <div class="price">
          <span style="font-size: 1.2rem !important; font-weight: 500 !important;">{{
            formatPrice(item?.price)
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMinxin } from "../../../mixins/formatValue";
export default defineComponent({
  mixins: [formatValueMinxin],
  props: {
    item: {
      type: Object,
      requied: false,
    },
    filter: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    redirectToDetail() {
      this.$router.push(`/product/${this.item?.id}`);
    },
  },
});
</script>

<style>
.product-image {
  height: 60%;
}
.title > a{
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  min-height: 42px;
}

.product-image img {
  height: 100%;
  object-fit: cover;
}
.single-product {
  height: 3.8in;
}

.single-product-height {
  height: 5in !important;
}

.single-product .product-info {
  padding: 0 !important;
}
.product-info .title a {
  font-size: 14px !important;
  font-weight: 400 !important;
}
.single-product .product-info .price span {
  font-size: 14px !important;
  font-weight: 400 !important;
}
</style>