<template>
 <div class="flex flex-col min-h-screen">
    <div class="header">
      <TheAlert />
      <Navigation />
    </div>
    <div class="main flex-wrap w-full flex">
      <div class="container w-full flex justify-center">
          <div class="w-3/4 flex  my-8 bg-grey-lightest">
          <div class="w-2/5 flex">
              <gallery />
          </div>
          <div class="w-3/5 flex">
              <productdetails />
          </div>
          </div>
      </div>
        <div class="w-full">
            <nuxt />       
        <div class="w-full flex justify-center">
            <div class="w-3/4 flex">
                <reviews />
            </div>
        </div>
        </div>
    </div>
    <div class="">
        <Footer />
    </div>
  </div>
</template> 

<script>
  import Navigation from '@/layouts/partials/Navigation'
  import gallery from '@/pages/products/gallery'
  import productdetails from '@/pages/products/product_details'
  import reviews from '@/pages/products/reviews'
  import TheAlert from '@/components/globals/TheAlert'
  import Footer from '@/layouts/partials/Footer'
  
  export default {

    components: {
      Navigation,
      TheAlert,
      gallery,
      productdetails,
      reviews,
      Footer

    },
  

  }
</script>
