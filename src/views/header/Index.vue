<template>
  <header class="header navbar-area">
    <!-- Start Topbar -->
    <div class="topbar">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 col-md-4 col-12">
            <div class="top-left"></div>
          </div>

          <div class="col-lg-4 col-md-4 col-12">
            <div class="top-end">
              <ul class="user-login">
                <li>
                  <div class="user">
                    <!-- <i class="lni lni-user"></i> -->

                    <router-link to="/user/order"
                      ><i class="lni lni-user"></i>
                      {{ me?.displayName }}</router-link
                    >
                  </div>
                </li>
                <li v-if="authenticated">
                  <router-link to="" @click="logout()">
                    <i class="fa fa-lock"></i>
                    Đăng xuất
                  </router-link>
                </li>
                <li v-if="!authenticated">
                  <router-link to="/login"
                    ><i class="fa fa-lock"></i> Login</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Topbar -->
    <!-- Start Header Middle -->
    <div class="header-middle">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-3 col-md-3 col-7">
            <!-- Start Header Logo -->
            <a class="navbar-brand">
              <router-link to="/home">
                <img src="../../assets/logo/logo.png" alt="Logo" />
              </router-link>
            </a>
            <!-- End Header Logo -->
          </div>
          <div class="col-lg-5 col-md-7 d-xs-none">
            <!-- Start Main Menu Search -->
            <div class="main-menu-search">
              <!-- navbar search start -->
              <div class="navbar-search search-style-5">
                <div class="search-select"></div>
                <div class="search-input">
                  <input type="text" placeholder="Tìm kiếm..." />
                </div>
                <div class="search-btn">
                  <button><i class="lni lni-search-alt"></i></button>
                </div>
              </div>
              <!-- navbar search Ends -->
            </div>
            <!-- End Main Menu Search -->
          </div>
          <div class="col-lg-4 col-md-2 col-5">
            <div class="middle-right-area">
              <div class="nav-hotline">
                <i class="lni lni-phone"></i>
                <h3>
                  Hotline:
                  <span>(+100) 123 456 7890</span>
                </h3>
              </div>
              <div class="navbar-cart">
                <div class="wishlist">
                  <a href="javascript:void(0)">
                    <i class="lni lni-heart"></i>
                    <span class="total-items">0</span>
                  </a>
                </div>
                <div class="cart-items">
                  <a href="javascript:void(0)" class="main-btn">
                    <i class="lni lni-cart"></i>
                    <span class="total-items">2</span>
                  </a>
                  <!-- Shopping Item -->
                  <div class="shopping-item">
                    <div class="dropdown-cart-header">
                      <span>2 Items</span>
                      <a href="cart.html">View Cart</a>
                    </div>
                    <ul class="shopping-list">
                      <li>
                        <a
                          href="javascript:void(0)"
                          class="remove"
                          title="Remove this item"
                          ><i class="lni lni-close"></i
                        ></a>
                        <div class="cart-img-head">
                          <a class="cart-img" href="product-details.html"
                            ><img
                              src="assets/images/header/cart-items/item1.jpg"
                              alt="#"
                          /></a>
                        </div>

                        <div class="content">
                          <h4>
                            <a href="product-details.html">
                              Apple Watch Series 6</a
                            >
                          </h4>
                          <p class="quantity">
                            1x - <span class="amount">$99.00</span>
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          class="remove"
                          title="Remove this item"
                          ><i class="lni lni-close"></i
                        ></a>
                        <div class="cart-img-head">
                          <a class="cart-img" href="product-details.html"
                            ><img
                              src="assets/images/header/cart-items/item2.jpg"
                              alt="#"
                          /></a>
                        </div>
                        <div class="content">
                          <h4>
                            <a href="product-details.html"
                              >Wi-Fi Smart Camera</a
                            >
                          </h4>
                          <p class="quantity">
                            1x - <span class="amount">$35.00</span>
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div class="bottom">
                      <div class="total">
                        <span>Total</span>
                        <span class="total-amount">$134.00</span>
                      </div>
                      <div class="button">
                        <a href="checkout.html" class="btn animate">Checkout</a>
                      </div>
                    </div>
                  </div>
                  <!--/ End Shopping Item -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Header Middle -->
    <!-- Start Header Bottom -->
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8 col-md-6 col-12">
          <div class="nav-inner">
            <nav class="navbar navbar-expand-lg ms-2">
              <button
                class="navbar-toggler mobile-menu-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse sub-menu-bar"
                id="navbarSupportedContent"
              >
                <ul id="nav" class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a
                      href="index.html"
                      class="active"
                      aria-label="Toggle navigation"
                      >Trang chủ</a
                    >
                  </li>

                  <li class="nav-item">
                    <a aria-label="Toggle navigation">Sản phẩm</a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="dd-menu collapsed"
                      href="javascript:void(0)"
                      data-bs-toggle="collapse"
                      data-bs-target="#submenu-1-2"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                      >Dịch vụ</a
                    >
                    <ul class="sub-menu collapse" id="submenu-1-2">
                      <li class="nav-item">
                        <a>Đặt hàng nội địa Nhật</a>
                      </li>

                      <li class="nav-item">
                        <a>Dịch vụ vận chuyển hộ (SaikoExpress)</a>
                      </li>
                      <li class="nav-item"><a>CSKH 24/24</a></li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <a>Blog</a>
                  </li>
                  <li class="nav-item">
                    <a aria-label="Toggle navigation">Giới thiệu</a>
                  </li>
                </ul>
              </div>
              <!-- navbar collapse -->
            </nav>
            <!-- End Navbar -->
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <!-- Start Nav Social -->
          <div class="nav-social">
            <ul>
              <li>
                <a href="javascript:void(0)"
                  ><i class="lni lni-facebook-filled"></i
                ></a>
              </li>
              <li>
                <a href="javascript:void(0)"
                  ><i class="lni lni-twitter-original"></i
                ></a>
              </li>
              <li>
                <a href="javascript:void(0)"
                  ><i class="lni lni-instagram"></i
                ></a>
              </li>
              <li>
                <a href="javascript:void(0)"><i class="lni lni-skype"></i></a>
              </li>
            </ul>
          </div>
          <!-- End Nav Social -->
        </div>
      </div>
    </div>
    <!-- End Header Bottom -->
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAuthStore } from "../../stores/auth";
import { categoryStore } from "../../stores/category";
export default defineComponent({
  computed: {
    authenticated() {
      return useAuthStore().authenticated;
    },
    me() {
      return useAuthStore().me;
    },
  },
  // created() {
  //   categoryStore().getCategories();
  // },
  methods: {
    logout() {
      useAuthStore()
        .logout()
        .then(() => {
          this.$router.push({ path: "/login" });
        });
    },
  },
});
</script>
