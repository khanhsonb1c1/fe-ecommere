<template>
  <ul class="nav">
    <li class="nav-item">
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          checked
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Giá thấp -> Cao
        </label>
      </div>
    </li>
    <li class="nav-item">
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          checked
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Giá cao -> Thấp
        </label>
      </div>
    </li>
    <li class="nav-item">
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          checked
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Ngày cập nhật
        </label>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>   

<style scoped>
.nav-item{
    margin: 0px 30px 0px 20px;
}
input{
    font-size: 1.2rem;
}
label{
    font-size: 1.2rem;
}
</style>