<template>
  <div>
     <div class="container mx-auto my-4">
        <a class="font-semibold text-blue text-sm" href="/" >Home</a>
        <span class="mx-2">/</span>
        <a class="font-semibold text-blue text-sm">Products</a>
        
  </div>
    <div class="container mx-auto w-full flex justify-center  mb-10">   
       
    <div class="w-full flex">
      <div class="w-1/6 flex mr-1 flex-col">
        <div class="bg-white w-full">   
          <p class="ml-1 p-4 text-shop-primary font-bold">Brands</p>
          <ul class="list-reset ml-3 p-2" v-for="(seller,index) in sellers">
            <li class="text-xs justify-between flex"><a href="#" @click="searchBrand(seller.id)" class="cursor-pointer no-underline text-black hover:text-grey">{{seller.name}}</a><span></span></li>
            <!-- <li class="mb-4 text-xs justify-between flex"><a href="#" class="no-underline text-black hover:text-grey">Brand</a><span>10</span></li>
            <li class="mb-4 text-xs justify-between flex"><a href="#" class="no-underline text-black hover:text-grey">Top sale</a><span>60</span></li>
            <li class="mb-4 text-xs justify-between flex"><a href="#" class="no-underline text-black hover:text-grey">Ratings</a><span>50</span></li>
            <li class="mb-4 text-xs justify-between flex"><a href="#" class="no-underline text-black hover:text-grey">On sale</a><span>25</span></li>
            <li class="mb-4 text-xs justify-between flex"><a href="#" class="no-underline text-black hover:text-grey">Brand</a><span>75</span></li>
            <li class="mb-4 text-xs justify-between flex"><a href="#" class="no-underline text-black hover:text-grey">Top sale</a><span>80</span></li> -->
          </ul>
         </div>
          <div class="bg-white">
           <div class="bg-white w-full">   
             <p class="ml-1 p-4 text-shop-primary font-bold">Price</p>
              <ul class="list-reset ml-3 p-2">                
                <li class="text-xs justify-between flex p-2"><span>
                  <input type="checkbox" class="mr-1">100-500</span><span><!-- 50 --></span></li>
                <li class="text-xs justify-between flex p-2"><span>
                  <input type="checkbox" class="mr-1">500-1000</span><span><!-- 10 --></span></li>
                <li class="text-xs justify-between flex p-2"><span>
                  <input type="checkbox" class="mr-1">1000-3000</span><span><!-- 100 --></span></li>
                <li class="text-xs justify-between flex p-2"><span>
                  <input type="checkbox" class="mr-1">3000-6000</span><span><!-- 66 --></span></li>
                
              </ul>
           </div>
        </div>
        <!-- <div class="bg-grey-lightest">
         <p class="ml-1 p-4 text-shop-primary font-bold">Discount %</p>
        <ul class="list-reset ml-3 p-4">                
          <li class="mb-4 text-xs justify-between flex"><span><input type="checkbox" class="mr-1">0 - 10</span><span>50</span></li>
          <li class="mb-4 text-xs justify-between flex"><span><input type="checkbox" class="mr-1">10 - 20</span><span>10</span></li>
          <li class="mb-4 text-xs justify-between flex"><span><input type="checkbox" class="mr-1">20 - 30</span><span>100</span></li>
          <li class="mb-4 text-xs justify-between flex"><span><input type="checkbox" class="mr-1">30 - 40</span><span>66</span></li>
          <li class="mb-4 text-xs justify-between flex"><span><input type="checkbox" class="mr-1">40 -50</span><span>11</span></li> 
        </ul>
        </div> -->
      </div>
      <div class="w-5/6 flex flex-wrap">
        <div class="w-1/4 flex" v-for="(product,index) in products">
          <div class="port mb-2 p-2 bg-white mr-2">
      <div class="flex flex-col">
        <div class="flex justify-end">
          <div class="portfolioDisc absolute flex flex-col p-2">        
            <a href='#' class="text-center no-underline text-white p-2 bg-grey-light my-1 hover:text-grey" title="wishlist">
              <img src="gegocart/wish.svg" class="h-4">
            </a>
            <a href='#' class="text-center no-underline text-white p-2 bg-grey-light my-1 hover:text-grey" title="compare">
              <img src="gegocart/compare.svg" class="h-4">
            </a>
            <a href='#' class="text-center no-underline text-white p-2 bg-grey-light my-1 hover:text-grey" title="Quick view">
              <img src="gegocart/view.svg" class="h-4">
            </a>
          </div>
        </div>
        <div  v-if="product.productgallery.length>0">
             <!--  <img src="gegocart/p1.jpg">     -->
          <nuxt-link :to="{name: 'products-slug',params:{slug:product.slug}}">
            <img v-bind:src="rooturl + 'uploads/' + product.productgallery[0].imagepath" style="width:250px;height: 250px"></nuxt-link>  
            </div>        
        </div>
      <div class="flex px-2 py-4">
          <div class="w-5/6 mr-1">
            <nuxt-link :to="{name: 'products-slug',params:{slug:product.slug}}"> 
            <p class="my-1 text-sm"  v-bind:title="product.name">{{product.name.slice(0, 20)}}...</p>
            <p class="my-1 font-semibold text-sm">{{product.price}}</p>
             <p class="my-1 font-semibold text-sm"> {{product.user.name}}</p>
             </nuxt-link>     
           <div class="flex px-2 py-4">
                <div v-for="rating in total_rating">
                    <div v-if="product.rate >= rating">
                      <img src="/images/star_half.svg" class="h-4">
                    </div>
                    <div v-else>
                       <img src="/images/star.svg" class="h-4">
                    </div>
                </div>
         </div>

         </div>
          <div class="w-1/6 portfolioDisc"> 
            <p @click="productredirect(product)" class="p-2 bg-shop-primary text-white text-center rounded hover:bg-black font-semibold"><img src="/images/cart.svg" class="h-4"></p> 
          </div>
      </div>
    </div>
    </div>
       
</div>
</div>
   </div>
 </div>
</template>
<script>
 import { mapActions } from 'vuex'

  export default {
    layout: 'home',
    //props:['searchq'],
    data() {
      return {
        products:[],
        sellers:[],
        stockavailable:0,
        outofstock:0,
        searchuserid:[],
        chkboxtype:[],
        useridlist:[],
        rooturl:process.env.SITEURL,
        total_rating:5,
        page: 1,
        page_count: 0,
        total:'',
        open:false,
        //searchparam:this.$route.params.searchq, //params
        searchparam:this.$route.query.searchq, //query
       
      }
    },

    components:{
      //Paginate
    },
         watch: {
    '$route.query.searchq': function () {
      this.getproduct();
    }
  },
  computed: {
        cheapestprice: function () {
          
             return this.products.reduce(function(item){
             
              return a.price - b.price;
            },0);
        }
    },
     methods:{
       toggle() {
            this.open = !this.open
        },
            
             async getproduct(page =1)
              {
               
               if(this.$route.query.searchq==undefined){
                this.searchparam='';
               }
               let response = await this.$axios.$get('products?search=' + this.searchparam +'&page='+page);
               
                this.products=response.data;
                this.page_count = response.meta.last_page;
                this.total = response.meta.total;


                // var k=0;
                // var j=0;
                // for (var i = 0; i <this.products.length; i++) {
                  
                //    var instock=this.products[i].in_stock;
                //    if(instock==true){
                //      k=k+1;
                //    }
                //    else{
                //     j=j+1;
                //    }
                //    this.stockavailable=k;
                //    this.outofstock=j;
                  
                // }
              },
             
              async getSellers()
              {
               
                 let response = await this.$axios.$get('sellers');
                // console.log(response.data);
                this.sellers=response.data;
              },

               async searchPrice(priceval)
              {

                 let response = await this.$axios.$get('products/pricefilter/' + priceval);
                // console.log(response.data);
                this.products=response.data;
              },

               // async search(){
                 
               //    this.$router.replace({
               //        name: 'products-productlist',
               //        params: { searchq: this.searchquery, }
               //      });
               // } ,
                productredirect(product){
                this.$router.replace({
                    name: 'products-slug',
                    params: { slug:product.slug }
                  })
              },

               async searchBrand(userid)
              {
              //alert(this.chkboxtype.length)
              //debugger;
               this.useridlist.push(userid);
                // for (var i = 0; i < this.useridlist.length; i++) {
                //   if(this.$refs["chkboxtype[index]"][i].checked==true){
                //     this.searchuserid.push(this.$refs["chkboxtype[index]"][i]._value);
                //        // if(userid==''){
                          
                //        // }
                //        // else{
                //        //   this.searchuserid =this.$refs["chkboxtype[index]"][i]._value + ',' + userid;
                //        // }
                //   }

                //   // if(this.$refs["chkboxtype[index]"][i].checked==false){
                //   //   this.searchuserid.splice(i,this.$refs["chkboxtype[index]"][i]._value);
                //   // }
                  

                // }
                 
                
                 let response = await this.$axios.$get('products/searchbrand/' + userid);
                // console.log(response.data);
                this.products=response.data;
              },


        },
         watch: {
            // call again the method if the route changes
            '$route': 'getproduct'
          },
         created () {
         
          this.getproduct();
         
          this.getSellers();
          /*   this.$nuxt.$on('productsearch_query', data => {
              console.log('dfgdfg');
                  this.searchparam = data;
                    this.getproduct();
                });
          */
      
         },
  }
</script>
<style lang="css">
.pagination {
  list-style: none;
  display: flex;
      align-items: center;
      margin-top: 1rem;
      margin-bottom: 1rem;
}
.page-item {
  border: 2px solid;
    padding: 9px;
    margin-right: 1px;
}
.prev-text
{
  background-color:#d8d8d8;
    padding: 9px;
    margin-right: 1px;
}
.next-text
{
background-color:#d8d8d8;
    padding: 9px;
    margin-right: 1px;
}
.disabled
{

}
.prev
{
  background-color:#d8d8d8;
    padding: 9px;
    margin-right: 1px;
}
.next
{
 background-color:#d8d8d8;
    padding: 9px;
    margin-right: 1px; 
}
.page-item active
{
  background-color: white;
  border:2px solid #d8d8d8;
}
</style>

