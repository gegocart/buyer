<template>
  <footer class="footer flex">
      <ul class="w-3/4 lg:w-1/4 md:w-1/4 list-reset flex flex-col justify-center">
        <nuxt-link :to="{ name: 'categories' }" class="footer-link">
              All Categories
        </nuxt-link>
        <nuxt-link :to="{ name: 'stores' }" class="footer-link">
              All Stores
        </nuxt-link>
        <nuxt-link :to="{ name: 'sellers' }" class="footer-link">
              All Sellers
          </nuxt-link>
        <nuxt-link :to="{ name: 'sell' }" class="footer-link">
             Sell on GegoCart
          </nuxt-link>
        <!-- <nuxt-link :to="{ name: 'invoice-invoice_pdf_download' }" class="footer-link">
             Invoice
          </nuxt-link>
          <nuxt-link :to="{ name: 'invoice-tax' }" class="footer-link">
             Tax
          </nuxt-link> -->
      </ul>
       <ul class="w-1/4 list-reset flex flex-col justify-center">
        <nuxt-link :to="{ name: 'cms-slug', params: {slug: 'about'}}" class="footer-link"> About </nuxt-link>
        <nuxt-link :to="{ name: 'cms-slug', params: {slug: 'privacy'}}" class="footer-link"> Privacy </nuxt-link>
        <nuxt-link :to="{ name: 'cms-slug', params: {slug: 'fees'}}" class="footer-link"> Fees </nuxt-link>
      </ul>
  </footer>
</template>

<script>

  export default {
  
  }
</script>




