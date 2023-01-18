<template>
  <section class="item-details section">
    <div class="container">
      <div class="top-area">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12 col-12">
            <div class="product-images">
              <main id="gallery">
                <div class="main-img">
                  <img
                    :src="
                      product.image_url || 'https://via.placeholder.com/400'
                    "
                    id="current"
                    class=""
                    style="max-height: 500px"
                  />
                </div>
              </main>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-12">
            <div class="product-info">
              <h2 class="title text-uppercase">{{ product.name || "..." }}</h2>
              <p class="category">
                <i class="lni lni-tag"></i> Phân loại:<a>{{
                  product.category?.name || "Chưa xác định"
                }}</a>
              </p>
              <h3 class="price">{{ formatPrice(product.price) }}</h3>
              <p class="info-text">
                Thành phần: {{ product.ingredients || "Chưa cập nhật" }}
              </p>
              <div class="row">
                <div class="col-lg-4 col-md-4 col-12">
                  <div class="form-group quantity">
                    <label for="color">Số lượng</label>
                    <input
                      type="number"
                      class="form-control"
                      v-model="quantity"
                    />
                  </div>
                </div>
              </div>
              <div class="bottom-content">
                <div class="row align-items-end">
                  <div class="col-lg-4 col-md-4 col-12">
                    <div class="button cart-button">
                      <button
                        class="btn"
                        style="width: 100%"
                        @click="handleBuyNow()"
                      >
                        Mua ngay
                      </button>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-12">
                    <div class="button cart-button">
                      <button class="btn btn-add" style="width: 100%" @click="addProductToCart()">
                        Thêm vào giỏ hàng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-details-info">
        <div class="single-block">
          <div class="row">
            <div class="col-lg-6 col-12">
              <div class="info-body custom-responsive-margin">
                <h4>Chi tiết</h4>
                <ul class="features">
                  <li>
                    <label style="width: 40%">Mã Thông Quan </label>
                    <span> {{ product.hs_code }}</span>
                  </li>
                  <li>
                    <label style="width: 40%">Mã Sản Phẩm </label>
                    <span> {{ product.id }}</span>
                  </li>
                  <li>
                    <label style="width: 40%">Danh Mục </label>
                    <span> {{ product.category?.name }}</span>
                  </li>
                  <li>
                    <label style="width: 40%">Xuất Xứ </label>
                    <span> {{ product.origin?.name }}</span>
                  </li>
                  <li>
                    <label style="width: 40%">Phần Trăm Thuế </label>
                    <span> {{ product.tax_percent || 0 }}%</span>
                  </li>
                  <li>
                    <label style="width: 40%">Ngày Cập Nhật </label>
                    <span> {{ formatTime(product.updated_at) }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="info-body">
                <h4>Quy cách sản phẩm</h4>
                <ul class="normal-list">
                  <li>
                    <span style="width: 40%">Khối Lượng </span>
                    <span>{{ product.weight }}kg</span>
                  </li>
                  <li>
                    <span style="width: 40%">Chiều Cao </span>
                    <span>{{ product.height }}cm</span>
                  </li>
                  <li>
                    <span style="width: 40%">Chiều Rộng </span>
                    <span>{{ product.height }}cm</span>
                  </li>
                  <li>
                    <span style="width: 40%">Chiều Dài </span>
                    <span>{{ product.length }}cm</span>
                  </li>
                  <li>
                    <span style="width: 40%">Số Lượng Trong Thùng </span>
                    <span>{{ product.quantity_items }}</span>
                  </li>
                </ul>
                <h4>Cấm vận:</h4>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    disabled
                    v-model="product.special"
                  />
                  <label class="form-check-label"> Hàng hóa đặc biệt </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    disabled
                    v-model="product.private_license"
                  />
                  <label class="form-check-label"> Giấy phép riêng </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    disabled
                    v-model="product.banned_export"
                  />
                  <label class="form-check-label"> Cấm xuất khẩu </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    disabled
                    v-model="product.banned_air"
                  />
                  <label class="form-check-label"> Cấm bay </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    disabled
                    v-model="product.banned_sea"
                  />
                  <label class="form-check-label"> Cấm biển </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
   
<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMinxin } from "../../../mixins/formatValue";
import { productStore } from "../../../stores/product";
import { cartStore } from "../../../stores/cart";

export default defineComponent({
  mixins: [formatValueMinxin],
  data() {
    return {
      quantity: 1 as number,
    };
  },

  created() {
    this.getDetail();
  },

  computed: {
    product_id() {
      return String(this.$route.params.id);
    },

    product() {
      return productStore().product_detail;
    },

    price() {
      return (
        this.product.price -
        (this.product.price * this.product.tax_percent) / 100
      );
    },
  },

  methods: {
    getDetail() {
      productStore().getProductDetail(this.product_id);
    },

    addProductToCart() {
      cartStore().addProductToCart(
        {
          name: this.product.name,
          image_url: this.product.image_url,
          price: this.price,
          total_price: this.product.price,
          product_id: this.product.id,
          tax_percent: this.product.tax_percent,
          category: this.product.category?.name || 'Chưa cập nhật'
        },
        this.quantity
      );
    },

    handleBuyNow(){
        this.addProductToCart();

        this.$router.push('/payment')
    }


  },
});
</script>
   
<style scoped>
.features {
  color: #555;
}

input:disabled {
  color: black !important;
}
.form-check-input:disabled ~ .form-check-label,
.form-check-input[disabled] ~ .form-check-label {
  opacity: 1;
}

label {
  color: #555 !important;
}

.form-check {
  padding: 5px 15px;
}

.btn-add {
  background: #1c82ad;
}
</style>