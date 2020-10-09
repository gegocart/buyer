<template>
	<div class="w-full flex flex-wrap">
  <div class="container w-full p-4">
            <div class="w-full flex flex-col p-4">
                <h4 class="my-4">Description</h4>
                <p class="leading-loose">{{product.description}}</p>
            </div>
             <div class="w-full flex flex-wrap p-4">
                <h4 class="my-4">Ratings</h4>
                <div class="w-full flex">
               
      <div class="w-1/3 p-2">
        
        <div class="flex my-4">
             
          <span class="custom-font mr-2">User Rating</span>
          
          <div v-for="rating in total_rating">
                      <div v-if="product.rate >= rating">
                         <img src="/images/star_half.svg" class="h-4">
                      </div>
                      <div v-else>
                       <img src="/images/star.svg" class="h-4">
                     </div>
             </div>
       
        </div>
        
        <p class="custom-font my-4">{{totalrate}} average based on {{product.reviewcount}} reviews.</p>
        </div>
      <div class="w-1/3 p-2">
        <div class="flex w-full justify-between my-2">
          <div class="w-1/4 mr-2">
            <p>5 star</p>
          </div>
          <div class="w-full bg-grey-lighter mr-2">
            <div class="w-3/4 h-4 bg-green" style="width: 0%;"></div>
          </div>
          <div class="w-1/4">
            <p class="float-right">{{bar5}}</p>
          </div>
        </div>
        <div class="flex w-full justify-between my-2">
          <div class="w-1/4 mr-2">
            <p>4 star</p>
          </div>
          <div class="w-full bg-grey-lighter mr-2">
            <div class="w-2/3 h-4 bg-orange" style="width: 0%;"></div>
          </div>
          <div class="w-1/4">
            <p class="float-right">{{bar4}}</p>
          </div>
        </div>
        <div class="flex w-full justify-between my-2">
          <div class="w-1/4 mr-2">
            <p>3 star</p>
          </div>
          <div class="w-full bg-grey-lighter mr-2">
            <div class="w-3/5 h-4 bg-teal-dark" style="width: 0%;"></div>
          </div>
          <div class="w-1/4">
            <p class="float-right">{{bar3}}</p>
          </div>
        </div>
        <div class="flex w-full justify-between my-2">
          <div class="w-1/4 mr-2">
            <p>2 star</p>
          </div>
          <div class="w-full bg-grey-lighter mr-2">
            <div class="w-1/2 h-4 bg-blue-lighter" style="width: 0%;"></div>
          </div>
          <div class="w-1/4">
            <p class="float-right">{{bar2}}</p>
          </div>
        </div>
        <div class="flex w-full justify-between my-2">
          <div class="w-1/4 mr-2">
            <p>1 star</p>
          </div>
          <div class="w-full bg-grey-lighter mr-2">
            <div class="w-1/4 h-4 bg-purple-light" style="width: 0%;"></div>
          </div>
          <div class="w-1/4">
            <p class="float-right">{{bar1}}</p>
          </div>
        </div>
        </div>
      </div>
            </div>    
  </div>
	</div>

</template>
<script>
  import $ from "jquery";
export default{
  props:['slug'],
	//layout:'product',
        data(){
            return {
               product:[],
                   item1:true,
                    item2:false,
                    item3:false,
                     open: false,
                     tab:'item1',
                    params:this.$route.params.slug,
                    total_rating:5,
                    ratings:[],
                    productid:'',
                    reviews:[],
                    reviewcount:0,
                    totalreview:0,
                    bar1:0,
                    bar2:0,
                    bar3:0,
                    bar4:0,
                    bar5:0
                    
              }

    },
    computed:{
         totalrate(){
           let total=0;
           let usercount=0;
           let ratetotal=0;
           if(this.product.ratetotal!=''){
             ratetotal = this.product.ratetotal;
             usercount=this.product.reviewcount;
             total=this.product.ratetotal/usercount;
           return total.toFixed(2);
           }
            return total;
         },

       
    },
 
      methods:{
 
           settab(tabname)
            {
         
             this.tab=tabname;
            },
         
              async getproduct()
              {
                
                 let response = await this.$axios.$get(`products/` +this.params);
                // console.log(response.data);
                this.product=response.data;
                this.productid=response.data.id;

                this.bar1=this.product.rateproduct1;
                this.bar2=this.product.rateproduct2;
                this.bar3=this.product.rateproduct3;
                this.bar4=this.product.rateproduct4;
                this.bar5=this.product.rateproduct5;
                let bartotal5=0;
                let bartotal4=0;
                let bartotal3=0;
                let bartotal2=0;
                let bartotal1=0;
                bartotal5=(this.bar5/this.product.reviewcount)
                $('.bg-green').css('width',bartotal5 + '%');

                bartotal4=(this.bar4/this.product.reviewcount)
                $('.bg-orange').css('width',bartotal4 + '%');
                
                bartotal3=(this.bar3/this.product.reviewcount)
                $('.bg-teal-dark').css('width',bartotal3 + '%');
                
                bartotal2=(this.bar2/this.product.reviewcount)
                $('.bg-blue-lighter').css('width',bartotal2 + '%');
                
                  bartotal1=(this.bar1/this.product.reviewcount)
                $('.bg-purple-light').css('width',bartotal1 + '%');
                
              },
              
              

        },
         created () {
          this.getproduct()
         
         },
}
</script>
