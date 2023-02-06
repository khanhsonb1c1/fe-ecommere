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
            <wallet-table-item
              v-for="wallet in wallet_list"
              :key="wallet.id"
              :item="wallet"
            />
          </tbody>
        </table>
      </div>
    </template>
  </CustomerManager>
  <Loading />
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import CustomerManager from "../../components/container/layout/CustomerManager.vue";
import { useAuthStore } from "../../stores/auth";
import { accountingStore } from "../../stores/accounting";
import WalletTableItem from "../../components/auth/wallet.vue/WalletTableItem.vue";
import _ from "lodash";
export default defineComponent({
  data() {
    return {
      column: [
        "...",
        "Mã ví",
        "Loại tiền tệ",
        "Số dư",
        "Số dư khả dụng",
        "Ngày cập nhật",
      ],
    };
  },

  created() {
    this.getWalletList();
  },

  watch:{
    id_user(){
      this.getWalletList()
    }
  },

  computed: {

    id_user() {
      return useAuthStore().get_id_user;
    },
    wallet_list() {
     

      return accountingStore().wallets;
    },
  },

  methods: {
    
    getWalletList() {
      if (_.isEmpty(this.id_user)) {
        return;
      }
      accountingStore().getWallets(this.id_user);
    },
  },

  components: { CustomerManager, WalletTableItem },
});
</script>
  