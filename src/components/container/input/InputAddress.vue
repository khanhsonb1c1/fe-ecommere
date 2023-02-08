<template>
  <div class="dropdown mt-3 d-flex justify-content-between">
    <div class="d-flex flex-column">
      <label class="mb-2">Tỉnh thành</label>
      <button
        class="btn btn-gray dropdown-toggle w-100"
        type="button"
        data-bs-toggle="dropdown"
        
        style="padding: 0.4rem 1.3rem; min-width: 130px"
      >
        {{ provinceName || "Tỉnh thành" }}
      </button>
      <ul class="dropdown-menu">
        <li
          v-for="province in provinces"
          :key="province.id"
          @click="handleChooseProvince(province.id, province.name)"
        >
          <a class="dropdown-item">{{ province.name }}</a>
        </li>
      </ul>
    </div>
    <div class="d-flex flex-column">
      <label class="mb-2">Quận/huyện</label>
      <button
        class="btn btn-gray dropdown-toggle w-90"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style="padding: 0.4rem 1.3rem; min-width: 130px"
      >
        {{ districtName || "Quận/huyện" }}
      </button>
      <ul class="dropdown-menu">
        <li
          v-for="district in districts"
          :key="district.id"
          @click="handleChooseDistrict(district.id, district.name)"
        >
          <a class="dropdown-item">{{ district.name }}</a>
        </li>
      </ul>
    </div>
    <div class="d-flex flex-column">
      <label class="mb-2">Phường/xã</label>
      <button
        class="btn btn-gray dropdown-toggle w-90"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style="padding: 0.4rem 1.3rem; min-width: 130px"
      >
        {{ wardName || "Phường/xã" }}
      </button>
      <ul class="dropdown-menu">
        <li
          v-for="ward in wards"
          :key="ward.id"
          @click="handleChooseWard(ward.id, ward.name)"
        >
          <a class="dropdown-item">{{ ward.name }}</a>
        </li>
      </ul>
    </div>
  </div>
  <InputField
    label="Số nhà/mô tả"
    :value="addressDetail"
   
    @update:value="addressDetail = $event"
  />
 
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import InputField from "./InputField.vue";
import { provinces, districts, wards } from "../../../services/helper";
export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
      default: "",
    },

    address: {
      type: String,
      required: true,
      default: "",
    },
  },
  data() {
    return {
      search_province: "" as string,
      provinceName: "" as string,
      districtName: "" as string,
      wardName: "" as string,
      addressDetail: "" as string,
      provinces: [
        {
          id: "" as string,
          name: "" as string,
        },
      ],
      provinceId: "",
      districtId: "",
      wardId: "",
      districts: [
        {
          id: "" as string,
          name: "" as string,
        },
      ],
      wards: [
        {
          id: "" as string,
          name: "" as string,
        },
      ],
    };
  },
  watch: {
    wardId(id) {
      this.$emit("update:id", id);
    },
    provinceId() {
      this.getDistricts();
    },
    addressDetail(address) {
      this.$emit("update:address", address);
    },
    address() {
      this.addressDetail = this.address;
    },

    districtId() {
      this.getWards();
    },
  },
  created() {
    this.getProvinces();
  },
 
  methods: {
    handleChooseProvince(id: string, name: string) {
      this.provinceId = id;
      this.provinceName = name;
    },

    handleChooseDistrict(id: string, name: string) {
      this.districtId = id;
      this.districtName = name;
    },

    handleChooseWard(id: string, name: string) {
      this.wardId = id;
      this.wardName = name;
    },
    getProvinces() {
      provinces.get().then((res) => {
        this.provinces = res.data;
      });
    },
    getDistricts() {
      if (this.provinceId != "") {
        districts
          .get({
            [`filter[province_id]`]: this.provinceId,
          })
          .then((res) => {
            this.districts = res.data;
          });
      }
    },
    getWards() {
      if (this.districtId != "") {
        wards
          .get({
            [`filter[district_id]`]: this.districtId,
          })
          .then((res) => {
            this.wards = res.data;
          });
      }
    },
  },
  components: { InputField },
});
</script>