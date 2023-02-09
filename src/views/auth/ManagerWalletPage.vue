<template>
  <CustomerManager>
    <template #order>
      <div class="container">
        <wallet-card v-for="wallet in wallet_list" :key="wallet.id" :wallet="wallet" />
      </div>
    </template>
  </CustomerManager>
  <!-- <Loading /> -->
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import CustomerManager from "../../components/container/layout/CustomerManager.vue";
import { useAuthStore } from "../../stores/auth";
import { accountingStore } from "../../stores/accounting";
import WalletCard from "../../components/container/card/WalletCard.vue";
import _ from "lodash";
export default defineComponent({
  data() {
    return {};
  },

  created() {
    this.getWalletList();
  },

  watch: {
    id_user() {
      this.getWalletList();
    },
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

  components: { CustomerManager, WalletCard },
});
</script>
  