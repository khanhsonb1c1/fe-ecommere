<template>
  <div class="row">
    <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
      <div
        class="bg-image hover-overlay hover-zoom ripple rounded "
        data-mdb-ripple-color="light"
      >
        <img :src="item.image_url" class="w-100" style="aspect-ratio: 1/1;"/>
        <a>
          <div
            class="mask"
            style="background-color: rgba(251, 251, 251, 0.2)"
          ></div>
        </a>
      </div>
    </div>

    <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
      <p style="padding: 5px 0px">
        <strong>{{ item.name }}</strong>
      </p>
      <p style="padding: 5px 0px">Phân loại: {{ item.category }}</p>
      <p style="padding: 5px 0px">Thuế: {{ item.tax_percent }}%</p>
      <p style="padding: 5px 0px">Giá ( Cả thuế ): {{ formatPrice(item.total_price) }}</p>

      <button
        type="button"
        class="btn btn-danger btn-sm me-1 mb-2"
        data-mdb-toggle="tooltip"
        title="Remove item"
        style="margin: 5px 0px"
      >
        <i class="fas fa-trash"></i>
      </button>
    </div>

    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
      <div class="d-flex mb-4" style="max-width: 300px">
        <button class="btn btn-primary px-3 me-2" @click="decreaseItem()">
          <i class="fas fa-minus"></i>
        </button>

        <div class="form-outline">
          <input
            id="form1"
            min="1"
            name="quantity"
            type="number"
            class="form-control"
            v-model="quantity"
          />
        </div>

        <button class="btn btn-primary px-3 ms-2" @click="increaseItem()">
          <i class="fas fa-plus"></i>
        </button>
      </div>
      <p class="text-start text-md-center">
        <strong>{{ formatPrice(get_price) }}</strong>
      </p>
    </div>
    <hr class="my-4" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMinxin } from "../../mixins/formatValue";
import { cartStore } from "../../stores/cart";
export default defineComponent({
  mixins: [formatValueMinxin],

  props: {
    item: {
      type: Object,
      default: {},
    },
  },

  data(){
    return {
      quantity: 0 as number,  
    }
  },

  mounted(){
    this.quantity = this.item.quantity;
  },

  computed:{
    get_price(){
        return this.item.total_price*this.item.quantity
    }


  },
  
  watch:{
    '[item.quantity]'(){
        this.quantity = this.item.quantity;
    },

    quantity(){
        this.changeQuantityInput()
    }
  },

  methods:{
    increaseItem(){
        this.quantity++;

    },

    decreaseItem(){
        this.quantity--;
    },


    changeQuantityInput(){
        cartStore().updateQuantity(this.item.product_id, this.quantity)
    },

    removeitem(){

    }
  }
});
</script>

<style>
strong{
    font-size: 1.1rem;
    color: #081828;
}

</style>