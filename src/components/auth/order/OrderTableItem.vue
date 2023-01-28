<template>
  <tr>
    <td></td>
    <td>{{ item?.id }}</td>
    <td>{{ item?.id }}</td>
    <td>{{ item?.id }}</td>
    <td>{{ item?.id }}</td>
    <td>{{ item?.id }}</td>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {};
  },

  props: {
    item: {
      type: Object,
    },
  },

  mounted() {},

  methods: {},

  components: {},
});
</script>
