<template>
  <div>
    <div class="container mx-auto my-4">
        <a class="font-semibold text-blue text-sm" href="/" >Home</a>
        <span class="mx-2">/</span>
        <a class="font-semibold text-blue text-sm">
          <span v-if="product.category.length>0">{{product.category[0].name}}</span>
        </a>
        
  </div>
  <div class="flex flex-col min-h-screen bg-grey-lighter">
    <div class="main flex-wrap w-full flex">
      <div class="w-full container mx-auto bg-white">
          <div class="w-full flex my-2">
          <div class="w-2/5 flex border-r border-grey-lighter justify-center mt-8">
              <gallery  slug="slug"  />
          </div>
          <div class="w-3/5 flex">
              <productdetails slug="slug" />
          </div>
          </div>
      </div>
       <div class="w-full container mx-auto bg-white">
              <product slug="slug" />
      </div>
        <div class="w-full container mx-auto bg-white">
           <!--  <nuxt /> -->
          <div class="w-full flex justify-center">
                  <reviews  slug="slug"/>
          </div>
        </div>
    </div>
  </div>
</div>
</template>
<script>

  import gallery from '@/pages/products/gallery'
  import productdetails from '@/pages/products/product_details'
   import product from '@/pages/products/product'
  import reviews from '@/pages/products/reviews'

    
  export default {
    props:['slug'],
   layout:'home',
    components: {
      
      gallery,
      productdetails,
      reviews,
      slug:'',
      product
      //productid:''
    },
        
   async asyncData ({ params, app }) {
     
      let response = await app.$axios.$get(`products/${params.slug}`)
      
       return {
        product: response.data
        }
      
        this.slug=params.slug;
    },
     methods:{
      
     }

  }
</script>