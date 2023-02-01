<template>
  <tr>
    <td><ButtonDetail :id="item?.id" path="user/order" /></td>
    <td>{{ item?.id }}</td>
    <td>
      <div style="display: flex">
        <img
          style="max-height: 100px !important; max-width: 100px"
          :src="item?.first_item?.product?.image_url"
          class="rounded float-start"
        />
        <div>
          <span style="margin-left: 10px">
            <!-- {{ item?.first_item?.product?.name || "..." }} -->
          </span>
        </div>
      </div>
    </td>

    <td>
      <status-order :status="item?.status?.name" />
    </td>
    <td>
      <type-order :type="item?.type?.name" />
    </td>
    <td>{{ formatTime(item?.created_at) }}</td>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMinxin } from "../../../mixins/formatValue";
import StatusOrder from "../../container/output/StatusOrder.vue";
import TypeOrder from "../../container/output/TypeOrder.vue";
import ButtonDetail from "../../container/button/ButtonDetail.vue";
export default defineComponent({
  mixins: [formatValueMinxin],
  props: {
    item: {
      type: Object,
      default: {},
      requied: true,
    },
  },

  mounted() {},

  methods: {},

  components: { StatusOrder, TypeOrder, ButtonDetail },
});
</script>
