<template>
	<div class="w-full flex flex-wrap border-t-2 border-grey-lighter p-4">
    <div class="w-full flex flex-col p-4">
        <h3 class="my-4">Reviews ({{reviewcount}})</h3>
        <div class="w-full flex border-b-2 border-grey-darker my-2 p-4" 
        v-for="review in reviews">        
          <div class="w-24">
            <img src="~assets/images/user.svg" class="h-8 mr-8 mt-2">
          </div>
          <div class="w-full flex flex-col">
            <div class="w-full flex justify-between">
              <div class="flex flex-col">
                <p class="custom-font my-2"> {{review.customer_name}} <span class="text-grey-darker"> Verified buyer</span></p>
                <div class="flex flex-row">
                    <div v-for="rating in total_rating">
                      <div v-if="review.rating >= rating">
                         <img src="/images/star_half.svg" class="h-4"/>
                        <!-- <span class="fa fa-star text-shop-primary"></span> -->
                        
                      </div>
                      <div v-else>
                        <img src="/images/star.svg" class="h-4"/>
                      <!-- <span class="fa fa-star-o text-shop-primary"></span> -->
                     
                      
                    </div>
                 </div>
                </div>
              </div>
              <p class="custom-font text-grey-darker my-2">{{review.created_at}}</p>
            </div>
            <div class="w-full flex flex-col">
              <p class="font-semibold my-2">{{review.title}}</p>
              <p class="text-grey-darker">{{review.description}}</p>
            </div>
          </div>
       </div> 

      <!--  <div class="w-full flex border-b-2 border-grey-darker my-2 p-4">
          <div class="w-24">
            <img src="~assets/images/user.svg" class="h-8 mr-8 mt-2">
          </div>
          <div class="w-full flex flex-col">
            <div class="w-full flex">
              <div class="flex flex-col w-full">
                <p class="my-2"> karthi <span class="text-grey-darker"> Verified buyer</span></p>
                <div class="flex flex-row">
                     <span class="fa fa-star text-shop-primary"></span>
                    <span class="fa fa-star text-shop-primary"></span>
                    <span class="fa fa-star text-shop-primary"></span>
                    <span class="fa fa-star text-shop-primary"></span>
                    <span class="fa fa-star text-shop-primary"></span>
                </div>
              </div>
              <p class="custom-font text-grey-darker">24/02/19</p>
            </div>
            <div class="w-full flex flex-col">
              <p class="font-semibold my-2">Good quality</p>
              <p class="text-grey-darker">Nice product</p>
            </div>
          </div>
       </div> -->
        </div>
      </div>
</template>
<script>
export default{
  props:['slug'],
          data(){
            return {
               product:[],
               productid:'',
               reviews:[],
               total_rating:5,
               reviewcount:0,
              params:this.$route.params.slug,
              }

    },
      
      methods:{

         async getproduct()
              {
               
                let response = await this.$axios.$get(`products/` +this.params);
               // console.log('prod');
                //debugger;
                 this.product=response.data;
                 this.productid=response.data.id;

                let responsetest = await this.$axios.$get('getrating/'+this.productid);
              
                 this.reviews=responsetest.data;
                 this.reviewcount=this.reviews.length;                 
              },
 
           async getreview()
              {
                 this.getproduct();
                // console.log('d');
                 //console.log(this.product);
               //debugger;

                 let response = await this.$axios.$get('getrating/'+this.productid);
              
                 this.reviews=response.data;
                 this.reviewcount=this.reviews.length;
              },

             

        },
         created () {
          
         this.getproduct();
        },
}
</script>
