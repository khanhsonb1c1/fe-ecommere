<template>
    <CustomerManager>
      <template #order>
        <div>
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr>
                <td v-for="(col, index) in column" :key="index">{{ col }}</td>
              </tr>
            </thead>
            <tbody>
              <ContractTableItem v-for="contract in contracts" :key="contract.id" :item="contract"/>
            </tbody>
          </table>
        </div>
      </template>
    </CustomerManager>
    <Loading v-show="loading"/>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import CustomerManager from "../../components/container/layout/CustomerManager.vue";
import ContractTableItem from "../../components/auth/contract/ContractTableItem.vue";
import {contractStore} from "../../stores/contract"
  export default defineComponent({
    data() {
      return {
        column: ["...", "Mã hợp đồng", "Trạng thái", "Phí dịch vụ", "Phí dịch vụ đã thanh toán", 'Nợ tiền hàng', "Ngày cập nhật"],
      };
    },
  
    mounted() {
      this.getContracts()
    },
  
    computed: {

      contracts(){
        return contractStore().contracts
      },

      loading(){
        
      },
    },
  
    methods: {
      getContracts(){
        return contractStore().getContracts(1)
      }


    },
  
    components: { CustomerManager, ContractTableItem },
  });
  </script>
  