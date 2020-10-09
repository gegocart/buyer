<template>
 <div class="section">
   <div style="background-image:url('gegocart/home.jpg')">
    <div class="container mx-auto">
      <div class="flex justify-center">
         <div class="flex-col flex py-10 lg:py-32 px-10 lg:px-0">
            <h1 class="my-2 text-2xl lg:text-5xl text-white text-center">Ecommerce Online Shopping Store</h1>
         </div>
  </div>
  </div>
  </div>
   <product/>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import product from '@/pages/home/Product'
  export default {
  layout: 'home',
  data() {
    return {
       products:[],
        modvalue:0,
        rooturl:process.env.SITEURL,
        page: 1,
        page_count: 0,
        total:''
    }
  },
    components:{
      product
    },
     methods:{
             async getproduct(page = 1)
              {
               
                 let response = await this.$axios.$get('products?' +'&page='+page);
                // console.log(response.data);
                this.products=response.data;
                //this.modvalue=this.products.length % 4;
                 this.page_count = response.meta.last_page;
                 this.total = response.meta.total;
              },
              productredirect(product){
                this.$router.replace({
                    name: 'products-slug',
                    params: { slug:product.slug }
                  })
              }

        },
         created () {
           this.getproduct()
         },
    
  }
</script>
<style>
.portfolioDisc
 {
opacity: 0;
}
.port:hover
{
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

}
.port:hover .portfolioDisc {
opacity: 1;
   -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  
}
@media only screen and (max-width: 600px) {
.portfolioDisc
 {
opacity: 1;
}
}
</style>