<template>
  <div class="card" style="border: none">
    <div class="card-header">
      <h5 class="text-uppercase fw-bold">Dịch vụ tiện ích</h5>
    </div>
    <div class="card-body color-dark">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12 p-3">
          <div class="wrapper d-flex p-3 wrapper-1">
            <div class="wrapper-icon">
              <div class="box-img-1">
                <img
                  src="https://img.icons8.com/cotton/50/null/mega-sales--v1.png"
                />
              </div>
            </div>
            <div class="wrapper-text ms-2">
              <span class="text-uppercase mb-3 mt-2 "
                >Mua hộ - vận chuyển hộ</span
              >
              <p>
                Mua sắm hàng hóa trên các trang thương mại điện tử tại Nhật Bản.
              </p>
              <p>Vận chuyển tuyến Nhật - Việt</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 p-3">
          <div class="wrapper d-flex p-3 wrapper-2">
            <div class="wrapper-icon">
              <div class="box-img-2">
                <img src="https://img.icons8.com/arcade/50/null/pay.png"/>
              </div>
            </div>
            <div class="wrapper-text  ms-2">
              <span class="text-uppercase mb-3 mt-2"
                >Thanh toán thuận tiện</span
              >

              <p>
                Đa dạng hình thức thanh toán tại Nhật hoặc bên Việt Nam
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 p-3">
          <div class="wrapper d-flex p-3 wrapper-3">
            <div class="wrapper-icon">
              <div class="box-img-3">
                <img src="https://img.icons8.com/color/96/null/open-box.png"/>
              </div>
            </div>
            <div class="wrapper-text ms-2">
              <span class="text-uppercase mb-3 mt-2 "
                >Bảo hiểm hàng hóa</span
              >
              <p>
                Cung cấp dịch vụ bảo hiểm hàng hóa trong những trường hợp không
                mong muốn như mất mát, thất lạc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style scoped>
.wrapper{
    height: 10rem
}
.card-body {
  font-family: Arial, Helvetica, sans-serif;
}
.card-header {
  margin-top: 10px;
  background: #fff;
  border: none;
}
.box-img-1 {
  padding: 10px;
  background: #b6d9f9e4;
  border-radius: 50%;
}
.box-img-2 {
  padding: 10px;
  background: #f9debde4;
  border-radius: 50%;
}
.box-img-3 {
  padding: 10px;
  background: #c9fca9e3;
  border-radius: 50%;
}
.wrapper-2 {
  background: #ffefdb;
  border-radius: 14px;
  cursor: pointer;
}
.wrapper-1 {
  background: #dceeff;
  border-radius: 14px;
  cursor: pointer;
}
.wrapper-3 {
  background: #e1fecf;

  border-radius: 14px;
  cursor: pointer;
}

p,
span {
  font-size: 18px;
  line-height: inherit;
}
</style>