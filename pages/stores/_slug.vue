<template>
<div class="page store-page my-4">
	  
	   <div  v-for="vstore in store"> 
       
		 <div class="w-full"><img v-bind:src="rooturl + '/uploads/' + vstore.storeimage" class="bg-cover bg-center w-full"></div>
		 <div class="w-full flex justify-center my-4">
		  <div class="w-3/4 flex my-4 justify-between">
			<div class="w-1/2 store-name px-4 flex">
				<div class="store-logo w-2/5">
					<img v-bind:src="rooturl + '/uploads/'+vstore.storelogo" class="w-24 h-24">			
				</div>
				<div class="">
					<h1 class="text-2xl font-bold">{{ vstore.name }}</h1>
					<div class="store-description text-justify leading-loose text-sm my-2">
						{{ vstore.description }}
					</div>
					<div class="store-address text-justify leading-loose content-center flex my-2">
						<img src="~assets/images/address.svg" class="h-6 mr-2">{{ vstore.address }}
					</div>
					<div class="store-address text-justify leading-loose content-center flex border border-grey justify-center py-1 my-2">
						<img src="~assets/images/heart.svg" class="h-5 mr-2 mt-1"><span>Favourite shop</span>
					</div>
				</div>

			   </div>
				<div class="">
						<div class="store-address">
							<h1 class="text-base font-bold text-center">Store Owner</h1>
							<div class="store-logo flex justify-center my-2">
								<img :src="'http://admin-app.test/uploads/'+ vstore.storelogo" class="w-24 h-24">			
							</div>
							<div class="store-address text-justify leading-loose my-2 text-center">
								{{ vstore.address }}
							</div>
						</div>
				</div>
		    </div>
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
        <div class="w-1/4 flex" v-for="(product,index) in vstore.product">
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
             <!--  <img src="gegocart/p1.jpg">     -->
             <div v-if="product.productgallery.length>0">
             <nuxt-link :to="{  name: 'products-slug',params:{slug:product.slug}  }">
          <img v-bind:src="rooturl + 'uploads/' + product.productgallery[0].imagepath" style="width:250px;height: 250px"></nuxt-link>       
          </div>   
        </div>
      <div class="flex px-2 py-4">
          <div class="w-5/6 mr-1">
            <nuxt-link :to="{name: 'products-slug',params:{slug:product.slug}}"> 
            <p class="my-1 text-sm">{{product.name.slice(0, 20)}}...</p>
            <p class="my-1 font-semibold text-sm">{{product.price}}</p>
            <p class="my-1 font-semibold text-sm"> {{product.user.name}}</p>
           </nuxt-link>
          <div class="flex px-2 py-4">
              <div v-for="rating in total_rating">
                    <div v-if="product.rate >= rating">
                      <img src="/images/star_half.svg" class="h-4">
                    </div>
                    <div v-else>
                    <img src="/images/star.svg" class="h-4"></div>
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
</div>

</template>

<script>
export default{
	layout:'blank',
	data() {
		return {
			store: [],
			rooturl:process.env.SITEURL,
			total_rating:5,
			products: [],
	        sellers:[],
	        stockavailable:0,
	        outofstock:0,
	        searchuserid:[],
	        chkboxtype:[],
	        useridlist:[],
	        page: 1,
	        page_count: 0,
	        total:'',
	        open:false,
	        productcount:0,
		}
	},
	  middleware: [
      'redirectIfGuest'
    ],
   
	async asyncData ({ params, app }) {
      //let response = await app.$axios.$get(`stores/${params.slug}`)
      let response = await app.$axios.$get(`storeproduct/${params.slug}`)
      
       return {
        store: response.data
      }
    },
     methods:{
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
               async searchBrand(userid)
              {
              
                 this.useridlist.push(userid);
                                
                 let response = await this.$axios.$get('products/searchbrand/' + userid);
                // console.log(response.data);
                this.products=response.data;
              },
                 productredirect(product){
                this.$router.replace({
                    name: 'products-slug',
                    params: { slug:product.slug }
                  })
              },
    },
    created () {
          this.getSellers();
         },

}
</script>
<style>
.content {
  position: relative;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
}

.content .content-overlay {
  background: rgba(0,0,0,0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.content:hover .content-overlay{
  opacity: 1;
}

.content-image{
  width: 100%;
}

.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-details{
  top: 50%;
  left: 50%;
  opacity: 1;
}
.fadeIn-top{
  top: 20%;
}

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