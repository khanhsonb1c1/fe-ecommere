<template>
  <div class="card">
    <div class="card-header">
      <i class="fas fa-filter me-3"></i>
      <span class="fs-6 color-dark fw-bold text-uppercase"> Bộ lọc </span>
    </div>
    <div class="card-body">
      <ul class="nav">
        <li class="nav-item p-1" @click="sort = '-created_at'">
          <a
            :class="[
              sort == '-created_at' ? 'active' : '',
              'nav-link color-dark fw-bold',
            ]"
            >Mới nhất</a
          >
        </li>
        <li class="nav-item p-1" @click="sort = 'price'">
          <a
            :class="[
              sort == 'price' ? 'active' : '',
              'nav-link color-dark fw-bold',
            ]"
            >Giá thấp đến cao</a
          >
        </li>
        <li class="nav-item p-1" @click="sort = '-price'">
          <a
            :class="[
              sort == '-price' ? 'active' : '',
              'nav-link color-dark fw-bold',
            ]"
            >Giá cao đến thấp</a
          >
        </li>
      </ul>
    </div>
    <div class="card-footer mt-2">
      <div class="">
        <div class="btn btn-outline-primary btn-rounded me-3 mb-2">
          <span>{{ sort_name }}</span>
        </div>

        <div
          class="btn btn-outline-primary btn-rounded me-3 mb-2"
          v-if="filter.category"
        >
          <span>{{ filter_name.category || "..." }}</span>
          <div
            class="
              close
              float-end
              ms-2
              d-flex
              justify-content-center
              align-items-center
            "
            @click="handleClearFilterCategory()"
          >
            <span class="">x</span>
          </div>
        </div>
        <div
          class="btn btn-outline-primary btn-rounded me-3 mb-2"
          v-if="filter.origin_id"
        >
          <span>{{ filter_name.origin || "..." }}</span>
          <div
            class="
              close
              float-end
              ms-2
              d-flex
              justify-content-center
              align-items-center
            "
            @click="handleClearFilterOrigin()"
          >
            <span class="">x</span>
          </div>
        </div>
        <div
          class="btn btn-outline-primary btn-rounded me-3 mb-2"
          v-if="filter.special"
        >
          <span>Hàng đặc biệt</span>
          <div
            class="
              close
              float-end
              ms-2
              d-flex
              justify-content-center
              align-items-center
            "
            @click="handleClearFilterSpecial()"
          >
            <span class="">x</span>
          </div>
        </div>
        <div
          class="btn btn-outline-primary btn-rounded me-3 mb-2"
          v-if="filter.private_license"
        >
          <span>Giấy phép riêng</span>
          <div
            class="
              close
              float-end
              ms-2
              d-flex
              justify-content-center
              align-items-center
            "
            @click="handleClearFilterPrivateLicense()"
          >
            <span class="">x</span>
          </div>
        </div>
        <div
          class="btn btn-outline-primary btn-rounded me-3 mb-2"
          v-if="filter.banned_export"
        >
          <span>Cấm xuất khẩu</span>
          <div
            class="
              close
              float-end
              ms-2
              d-flex
              justify-content-center
              align-items-center
            "
            @click="handleClearFilterBannedExport()"
          >
            <span class="">x</span>
          </div>
        </div>
        <div
          class="btn btn-outline-primary btn-rounded me-3 mb-2"
          v-if="filter.banned_air"
        >
          <span>Cấm bay</span>
          <div
            class="
              close
              float-end
              ms-2
              d-flex
              justify-content-center
              align-items-center
            "
            @click="handleClearFilterBannedAir()"
          >
            <span class="">x</span>
          </div>
        </div>
        <div
          class="btn btn-outline-primary btn-rounded me-3 mb-2"
          v-if="filter.banned_sea"
        >
          <span>Cấm biển</span>
          <div
            class="
              close
              float-end
              ms-2
              d-flex
              justify-content-center
              align-items-center
            "
            @click="handleClearFilterBannedSea()"
          >
            <span class="">x</span>
          </div>
        </div>
        <!-- <div class="btn color-primary me-3 mb-2 fw-bold" @click="clearAll()">
          <span>Xóa tất cả</span>
        </div> -->
      </div>
    </div>
  </div>
</template>
s
<script lang="ts">
import { mapState } from "pinia";
import { defineComponent } from "vue";
import { productStore } from "../../../stores/product";
import _ from "lodash";
export default defineComponent({
  data() {
    return {
      sort: "-created_at",
      sort_name: "Mới nhất",
      tab: 1,
    };
  },

  computed: {
    ...mapState(productStore, ["filter", "filter_name", "current_page"]),
  },

  watch: {
    sort() {
      this.handleSort();
    },
    filter: {
      deep: true,
      handler(newFilter) {
        console.log("jkndsbjfbhjbfsbhjf");
        productStore().getProductList(this.current_page);
      },
    },
  },

  methods: {
    clearAll() {
      productStore().clearAllFilter();
    },
    handleSort() {
      productStore().updateSort(this.sort);
    },

    handleClearFilterCategory() {
      productStore().clearFilterCategory();
    },
    handleClearFilterOrigin() {
      productStore().clearFilterOrigin();
    },
    handleClearFilterSpecial() {
      productStore().clearFilterSpecial();
    },
    handleClearFilterPrivateLicense() {
      productStore().clearFilterPrivateLicense();
    },
    handleClearFilterBannedExport() {
      productStore().clearFilterBannedExport();
    },
    handleClearFilterBannedSea() {
      productStore().clearFilterBannedSea();
    },
    handleClearFilterBannedAir() {
      productStore().clearFilterBannedAir();
    },
  },
});
</script>   

<style scoped>
.card-header {
  background-color: #fff !important;
  border-bottom: none !important;
}
.card-body {
  padding: 0rem !important;
}
.card-footer {
  background: #fff !important;
}

.active {
  border-bottom: 3px solid #0167f3;
  color: #0167f3;
}

.btn {
  border-radius: 20px;
}
.close {
  background: red;
  height: 23px;
  width: 23px;
  background: #0167f3;
  border-radius: 50%;
  color: #fff;
}
.close:hover {
  background: #fff;
  color: red;
}
</style>