<template>
  <div class="card-body d-flex justify-content-between flex-wrap flex-row">
    <div class="w-75">
      <span class="badge bg-secondary">{{ log?.creator.name }}</span>
      <span
        :class="[
          log?.type_id == 'updated'
            ? 'bg-success'
            : log?.type_id == 'deleted'
            ? 'bg-danger'
            : 'bg-primary',
          'badge ms-2',
        ]"
        >{{ log?.type_id }}</span
      >
      <div class="mt-2" v-for="(content, idx) in get_content_diary" :key="idx"> 
        <i class="far fa-edit float-start m-1"></i>
        
        <p class="card-text ms-2">
       {{content.title  }} : {{ content.content }} {{content.currency  }}
        </p>
      </div>
    </div>

    <p class="card-text">{{ formatTime(log?.created_at) }}</p>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMinxin } from "../../../mixins/formatValue";

export default defineComponent({
  mixins: [formatValueMinxin],
  props: {
    log: {
      type: Object,
      requied: false,
    },
  },

  computed: {
    get_content_diary() {
      const contents = [
        {
          content: this.log?.content?.shipment_method_id,
          title: "Phương thức vận chuyển ",
          value: this.log?.content?.shipment_method_id,
        },
        {
          content: this.formatPrice2(this.log?.content?.special_declaration),
          title: "Khai báo hàng hóa đặc biệt",
          value: this.log?.content?.special_declaration,
          currency: "VNĐ",
        },
        {
          content: this.formatPrice2(this.log?.content?.insurance_declaration),
          title: "Khai báo giá trị hàng hóa",
          value: this.log?.content?.insurance_declaration,
          currency: "VNĐ",
        },
        {
          content: this.formatPrice2(this.log?.content?.insurance_fee),
          title: "Phí bảo hiểm hàng hóa",
          value: this.log?.content?.insurance_fee,
          currency: "VNĐ",
        },
        {
          content: this.formatPrice2(this.log?.content?.service_fee),
          title: "Phí dịch vụ",
          value: this.log?.content?.service_fee,
          currency: "VNĐ",
        },
        {
          content: this.formatPrice2(this.log?.content?.service_fee_boxes),
          title: "Phí dịch vụ hàng hóa",
          value: this.log?.content?.service_fee_boxes,
          currency: "VNĐ",
        },
        {
          content: this.formatPrice2(this.log?.content?.service_fee_paid),
          title: "Phí dịch vụ đã thanh toán",
          value: this.log?.content?.service_fee_paid,
          currency: "VNĐ",
        },
        {
          content: this.formatPrice2(this.log?.content?.service_fee_unsolved),
          title: "Phí dịch vụ chưa ghi nợ",
          value: this.log?.content?.service_fee_unsolved,
          currency: "VNĐ",
        },
        {
          content: this.formatPrice2(
            this.log?.content?.service_fee_outstanding
          ),
          title: "Phí dịch vụ chưa thanh toán",
          value: this.log?.content?.service_fee_outstanding,
          currency: "VNĐ",
        },
        {
          content: this.formatPrice2(this.log?.content?.service_fee_debited),
          title: "Phí dịch vụ đã ghi nợ",
          value: this.log?.content?.service_fee_debited,
          currency: "VNĐ",
        },
        {
          content: this.formatPrice2(this.log?.content?.special_goods_fee),
          title: "Phí hàng hóa đặc biệt",
          value: this.log?.content?.special_goods_fee,
          currency: "VNĐ",
        },
        {
          content: this.formatPrice2(this.log?.content?.additional_cost),
          title: "Phụ phí",
          value: this.log?.content?.additional_cost,
          currency: "¥",
        },
        {
          content: this.formatPrice2(this.log?.content?.cost_of_goods),
          title: "Phí dịch vụ",
          value: this.log?.content?.cost_of_goods,
          currency: "¥",
        },
        {
          content: this.formatPrice2(this.log?.content?.purchase_cost),
          title: "Phí mua hàng",
          value: this.log?.content?.purchase_cost,
          currency: "¥",
        },
        {
          content: this.formatPrice2(this.log?.content?.purchase_cost_paid),
          title: "Phí mua hàng đã trả",
          value: this.log?.content?.purchase_cost_paid,
          currency: "¥",
        },
        {
          content: this.formatPrice2(
            this.log?.content?.purchase_cost_outstanding
          ),
          title: "Phí mua hàng chưa thanh toán",
          value: this.log?.content?.purchase_cost_outstanding,
          currency: "¥",
        },
        {
          content: this.formatPrice2(this.log?.content?.purchase_cost_unsolved),
          title: "phí mua hàng chưa giải quyết",
          value: this.log?.content?.purchase_cost_unsolved,
          currency: "¥",
        },
        {
          content: this.formatPrice2(this.log?.content?.purchase_cost_debited),
          title: "Phí mua hàng ghi nợ",
          value: this.log?.content?.purchase_cost_debited,
          currency: "¥",
        },
        {
          content: this.formatPrice2(this.log?.content?.compensation),
          title: "Phí đền bù",
          value: this.log?.content?.compensation,
          currency: "VNĐ",
        },
        {
          content: this.formatPrice2(this.log?.content?.compensation_unsolved),
          title: "Phí đền bù chưa giải quyết",
          value: this.log?.content?.compensation_unsolved,
          currency: "VNĐ",
        },
        {
          content: this.formatPrice2(this.log?.content?.compensation_debited),
          title: "Phí đền bù ghi nợ",
          value: this.log?.content?.compensation_debited,
          currency: "VNĐ",
        },
        {
          content: this.formatPrice2(this.log?.content?.shipping_fee),
          title: "Phí giao hàng",
          value: this.log?.content?.shipping_fee,
        },
        {
          content: this.formatPrice2(this.log?.content?.shipping_fee_air),
          title: "Phí giao hàng đường bay",
          value: this.log?.content?.shipping_fee_air,
        },
        {
          content: this.formatPrice2(this.log?.content?.shipping_fee_sea),
          title: "Phí giao hàng đường biển",
          value: this.log?.content?.shipping_fee_sea,
        },
        {
          content: this.formatPrice2(
            this.log?.content?.shipping_fee_outstanding
          ),
          title: "Phí giao hàng chưa thanh toán",
          value: this.log?.content?.shipping_fee_outstanding,
        },
        {
          content:
            this.log?.content?.status_id == "Approved"
              ? this.log?.content?.status_id
              : this.log?.content?.status_id == "Cancelled"
              ? "Đã hủy"
              : this.log?.content?.status_id == "Pending"
              ? "Chờ duyệt"
              : this.log?.content?.status_id == "Debited"
              ? "Đã ghi nợ"
              : this.log?.content?.status_id == "Finish"
              ? "Đã xong"
              : this.log?.content?.status_id == "ReceivedAtWarehouse"
              ? "Đã nhận tại kho"
              : undefined,
          title: "Trạng thái",
          value:
            this.log?.content?.status_id == "Approved"
              ? this.log?.content?.status_id
              : this.log?.content.status_id == "Cancelled"
              ? "Đã hủy"
              : this.log?.content?.status_id == "Pending"
              ? "Chờ duyệt"
              : this.log?.content.status_id == "Debited"
              ? "Đã ghi nợ"
              : this.log?.content.status_id == "Finish"
              ? "Đã xong"
              : this.log?.content?.status_id == "ReceivedAtWarehouse"
              ? "Đã nhận tại kho"
              : undefined,
        },
        {
          content: this.log?.content?.write,
          title: "Ghi chú",
          value: this.log?.content?.write,
        },
        {
          content:
            this.log?.content?.merge_package == true
              ? "Có"
              : this.log?.content?.merge_package == false
              ? "không"
              : "",
          title: "Gộp thùng",
          value: this.log?.content?.merge_package,
        },
        {
          content:
            this.log?.content?.repackage == true
              ? "Có"
              : this.log?.content?.repackage == false
              ? "không"
              : "",
          title: "Đóng thùng",
          value: this.log?.content?.repackage,
        },
        {
          content: this.formatPrice2(this.log?.content?.items?.balance),
          title: "Số dư ",
          value: this.log?.content?.items?.balance,
          currency: "¥",
        },
        {
          content: this.formatPrice2(this.log?.content?.items?.amount),
          title: "Số dư khả dụng ",
          value: this.log?.content?.items?.amount,
          currency: "¥",
        },
        {
          content: this.log?.content?.items?.quantity,
          title: "Số lượng ",
          value: this.log?.content?.items?.quantity,
        },
        {
          content: this.formatPrice2(
            this.log?.content?.items?.remaining_distributed_quantity
          ),
          title: "Số dư chưa được phân hàng ",
          value: this.log?.content?.items?.remaining_distributed_quantity,
        },

        {
          content: this.formatPrice2(this.log?.content?.items?.tax),
          title: "Thuế ",
          value: this.log?.content?.items?.tax,
          currency: "¥",
        },

        {
          content: this.formatPrice2(this.log?.content?.transaction?.amount),
          title: "Số tiền giao dịch ",
          value: this.log?.content?.transaction?.amount,
          currency: this.log?.content?.transaction?.currency_id,
        },
        {
          content: this.log?.content?.transaction?.description,
          title: "Mô tả ",
          value: this.log?.content?.transaction?.description,
        },

        {
          content: this.log?.content?.transaction?.card_id,
          title: "Mã Thẻ ",
          value: this.log?.content?.transaction?.card_id,
        },

        {
          content: this.log?.content?.transaction?.code_ref,
          title: "Mã giao dịch ",
          value: this.log?.content?.transaction?.code_ref,
        },

        {
          content: this.log?.content?.contract_id,
          title: "Mã hợp đồng ",
          value: this.log?.content?.contract_id,
        },

        {
          content: this.log?.content?.shipment_info?.sender_name,
          title: "Người gửi ",
          value: this.log?.content?.shipment_info?.sender_name,
        },

        {
          content: this.log?.content?.shipment_info?.sender_tel,
          title: "SĐT Người gửi ",
          value: this.log?.content?.shipment_info?.sender_tel,
        },

        {
          content: this.log?.content?.shipment_info?.consignee,
          title: "Người nhận ",
          value: this.log?.content?.shipment_info?.consignee,
        },

        {
          content: this.log?.content?.shipment_info?.tel,
          title: "SĐT Người nhận ",
          value: this.log?.content?.shipment_info?.tel,
        },
        {
          content: this.log?.content?.shipment_info?.full_address,
          title: "Địa chỉ ",
          value: this.log?.content?.shipment_info?.full_address,
        },
      ];

      const getContents = contents.filter((item) => {
        return item.value != null;
      });

      return getContents;
    },
  },
});
</script>