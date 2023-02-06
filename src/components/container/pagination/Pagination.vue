<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination mt-5 mb-5">
      <li class="page-item" @click="onClickFirstPage">
        <a class="page-link">Trang đầu</a>
      </li>
      <li class="page-item" @click="onClickPreviousPage">
        <a class="page-link">
          <span>&laquo;</span>
        </a>
      </li>
      <li
        v-for="page in pages"
        :key="page.name"
        @click="onClickPage(page.name)"
        :class="[page.name == currentPage ? 'active' : '', 'page-item']"
      >
        <a class="page-link">{{ page.name }}</a>
      </li>

      <li class="page-item" @click="onClickNextPage">
        <a class="page-link">
          <span>&raquo;</span>
        </a>
      </li>
      <li class="page-item" @click="onClickLastPage">
        <a class="page-link">Trang cuối</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },

    currentPage: {
      type: Number,
      required: true,
    },
  },

  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }

      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1;
      }

      return this.currentPage - 1;
    },
    endPage() {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages
      );
    },
    pages() {
      const range = [];

      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    onClickFirstPage() {
      this.$emit("pagechanged", 1);
    },
    onClickPreviousPage() {
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page: number) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      this.$emit("pagechanged", this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit("pagechanged", this.totalPages);
    },
    isPageActive(page: number) {
      return this.currentPage === page;
    },
  },
});
</script>

