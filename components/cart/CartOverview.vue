<template>
  <div class="bg-white p-4 mb-4">
      <CartOverviewProduct
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
        <div class="flex justify-end my-2">
          <p class="text-xl">Sub total</p>
        </div>
        <div class="flex justify-end my-2">
          <p class="text-shop-primary font-semibold text-xl">{{ subtotal }}</p>
        </div>

        <!-- <div class="flex justify-end mt-8">
          <a href="#" class="no-underline w-64 bg-shop-primary font-semibold text-2xl text-white p-2 text-center">Checkout</a>
        </div> -->
      <slot name="rows" />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import CartOverviewProduct from '@/components/cart/CartOverviewProduct'

  export default {
    computed: {
      ...mapGetters({
        products: 'cart/products',
        subtotal: 'cart/subtotal',
         getCart: 'cart/getCart',
      })
    },

    components: {
      CartOverviewProduct
    }
  }
</script>
