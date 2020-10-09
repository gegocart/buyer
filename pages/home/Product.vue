<template>	
<div>
<div class="container mx-auto my-10">
  <h2 class="text-center m-6">New arrivals</h2>
  <div class="flex flex-col lg:flex-wrap lg:flex-row mx-2">
    <div class="w-full lg:w-1/5 flex" v-for="(product,index) in products">
      <div class="port my-2 p-2 bg-white mr-2">
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
             <nuxt-link :to="{ name: 'products-productlist' }">
          <img v-bind:src="rooturl + 'uploads/' + product.productgallery[0].imagepath" style="width:250px;height: 250px"></nuxt-link>  
          </div>        
        </div>
         <div class="flex px-2 py-4">
          <div class="w-5/6 mr-1">
           <nuxt-link :to="{ name: 'products-productlist' }"> 
            <p class="my-1 text-sm"> {{product.name.slice(0, 20)}}...</p>
            <p class="my-1 font-semibold text-sm">{{product.price}}</p>
            <p class="my-1 font-semibold text-sm" > {{product.user.name}}</p>
            </nuxt-link>
          <div class="flex px-2 mt-2">
             <div v-for="rating in total_rating">
                 <div v-if="product.rate >= rating">
                   <img src="/images/star_half.svg" class="h-3">
                </div>
                <div v-else>
                  <img src="/images/star.svg" class="h-3"></div>
                </div>
          </div>
         </div>
          <div class="w-1/6 portfolioDisc"> 
            <p @click="productredirect(product)" class="p-2 bg-shop-primary text-white text-center rounded hover:bg-black font-semibold"><img src="images/cart.svg" class="h-4"></p> 
          </div>
      </div>
    </div>
    </div>
<div v-if="this.page_count>1">
     <paginate
       v-model="page"
       :page-count="this.page_count"
       :page-range="3"
       :margin-pages="1"
       :click-handler="getproduct"
       :prev-text="'<'"
       :next-text="'>'"
       :container-class="'pagination'"
       :page-class="'page-item'"
       :prev-link-class="'prev'"
       :next-link-class="'next'">
     </paginate>
     </div> 
   <!--  <div class="w-1/4 port my-2 p-2">
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
              <img src="gegocart/p2.jpg">              
        </div>
      <div class="flex justify-between px-2 py-4">
          <div>
            <p class="my-1">Green Cactus Flower</p>
            <p class="my-1 font-semibold">Rs.750</p>
         </div>
          <div class="portfolioDisc"> 
            <p class="px-4 py-2 bg-shop-primary text-white text-center rounded hover:bg-black font-semibold">Add to cart</p>   
          </div>
      </div>
    </div>
    <div class="w-1/4 port my-2 p-2">
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
              <img src="gegocart/p3.jpg">              
        </div>
        <div class="flex justify-between px-2 py-4">
          <div>
            <p class="my-1">Three-Way Table Lamp</p>
            <p class="my-1 font-semibold">Rs.550</p>
         </div>
          <div class="portfolioDisc"> 
            <p class="px-4 py-2 bg-shop-primary text-white text-center rounded hover:bg-black font-semibold">Add to cart</p>   
          </div>
      </div>
    </div>
    <div class="w-1/4 port my-2 p-2">
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
              <img src="gegocart/p4.jpg">              
        </div>
        <div class="flex justify-between px-2 py-4">
          <div>
            <p class="my-1">Vortex Arm Chair</p>
            <p class="my-1 font-semibold">Rs.1950</p>
         </div>
          <div class="portfolioDisc"> 
            <p class="px-4 py-2 bg-shop-primary text-white text-center rounded hover:bg-black font-semibold">Add to cart</p>   
          </div>
      </div>
    </div>
    <div class="w-1/4 port my-2 p-2">
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
              <img src="gegocart/p5.jpg">              
        </div>
        <div class="flex justify-between px-2 py-4">
          <div>
            <p class="my-1">Vortex Arm Chair</p>
            <p class="my-1 font-semibold">Rs.1950</p>
         </div>
          <div class="portfolioDisc"> 
            <p class="px-4 py-2 bg-shop-primary text-white text-center rounded hover:bg-black font-semibold">Add to cart</p>   
          </div>
      </div>
    </div>
      <div class="w-1/4 port my-2 p-2">
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
              <img src="gegocart/p6.jpg">              
        </div>
        <div class="flex justify-between px-2 py-4">
          <div>
            <p class="my-1">Vortex Arm Chair</p>
            <p class="my-1 font-semibold">Rs.1950</p>
         </div>
          <div class="portfolioDisc"> 
            <p class="px-4 py-2 bg-shop-primary text-white text-center rounded hover:bg-black font-semibold">Add to cart</p>   
          </div>
      </div>
    </div>
      <div class="w-1/4 port my-2 p-2">
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
              <img src="gegocart/p7.jpg">              
        </div>
        <div class="flex justify-between px-2 py-4">
          <div>
            <p class="my-1">Vortex Arm Chair</p>
            <p class="my-1 font-semibold">Rs.1950</p>
         </div>
          <div class="portfolioDisc"> 
            <p class="px-4 py-2 bg-shop-primary text-white text-center rounded hover:bg-black font-semibold">Add to cart</p>   
          </div>
      </div>
    </div>
      <div class="w-1/4 port my-2 p-2">
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
              <img src="gegocart/p8.jpg">              
        </div>
        <div class="flex justify-between px-2 py-4">
          <div>
            <p class="my-1">Vortex Arm Chair</p>
            <p class="my-1 font-semibold">Rs.1950</p>
         </div>
          <div class="portfolioDisc"> 
            <p class="px-4 py-2 bg-shop-primary text-white text-center rounded hover:bg-black font-semibold">Add to cart</p>   
          </div>
      </div>
    </div> -->
  </div>
</div>

<div class="my-10" style="background-image:url('gegocart/banner.jpg');background-repeat: no-repeat;background-size: cover;background-attachment: fixed;">
  <div class="container mx-auto py-10">
      <div class="flex flex-col lg:flex-wrap lg:flex-row">
        <div class="w-full lg:w-2/5 flex justify-center">
            <img src="gegocart/offer.png" class="h-32 lg:h-70">
        </div>
        <div class="w-full lg:w-3/5 flex items-center justify-center lg:justify-start">
            <div class="flex flex-col">
                <h3 class="text-grey-light text-xl lg:text-3xl my-2 text-center lg:text-left">Home Sweet Home</h3>
                <p class="text-white text-xl lg:text-4xl text-center lg:text-left">Buy home furniture items in one roof</p>
            </div>
       </div>
      </div>
  </div>
</div>


<div class="container mx-auto my-10">
  <h2 class="text-center m-6">Featured Product</h2>
  <div class="flex flex-col lg:flex-wrap lg:flex-row">
    <div class="w-full lg:w-1/5 flex" v-for="(product,index) in products">
      <div class="port my-2 p-2 mr-2 bg-white">
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
              <!-- <img src="gegocart/p1.jpg">   -->
              <div v-if="product.productgallery.length>0">
              <nuxt-link :to="{ name: 'products-productlist' }">
          <img v-bind:src="rooturl + 'uploads/' + product.productgallery[0].imagepath" style="width:250px;height: 250px"></nuxt-link> 
          </div>           
        </div>
          <div class="flex px-2 py-4">
          <div class="w-5/6 mr-1">
            <nuxt-link :to="{ name: 'products-productlist' }"> 
            <p class="my-1 text-sm">{{product.name.slice(0, 20)}}...</p>
            <p class="my-1 font-semibold text-sm">{{product.price}}</p>
            <p class="my-1 font-semibold text-sm"> {{product.user.name}}</p>
          </nuxt-link>
               <div class="flex px-2 mt-2">
             <div v-for="rating in total_rating">
                 <div v-if="product.rate >= rating">
                   <img src="/images/star_half.svg" class="h-3">
                </div>
                <div v-else>
                  <img src="/images/star.svg" class="h-3"></div>
                </div>
          </div>
         </div>
          <div class="w-1/6 portfolioDisc"> 
            <p @click="productredirect(product)" class="p-2 bg-shop-primary text-white text-center rounded hover:bg-black font-semibold"><img src="images/cart.svg" class="h-4"></p> 
          </div>
      </div>
    </div>
    </div>
   <!--  <div class="w-1/4 port my-2 p-2">
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
              <img src="gegocart/p2.jpg">              
        </div>
      <div class="flex justify-between px-2 py-4">
          <div>
            <p class="my-1">Green Cactus Flower</p>
            <p class="my-1 font-semibold">Rs.750</p>
         </div>
          <div class="portfolioDisc"> 
            <p class="px-4 py-2 bg-shop-primary text-white text-center rounded hover:bg-black font-semibold">Add to cart</p>   
          </div>
      </div>
    </div>
    <div class="w-1/4 port my-2 p-2">
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
              <img src="gegocart/p3.jpg">              
        </div>
        <div class="flex justify-between px-2 py-4">
          <div>
            <p class="my-1">Three-Way Table Lamp</p>
            <p class="my-1 font-semibold">Rs.550</p>
         </div>
          <div class="portfolioDisc"> 
            <p class="px-4 py-2 bg-shop-primary text-white text-center rounded hover:bg-black font-semibold">Add to cart</p>   
          </div>
      </div>
    </div>
    <div class="w-1/4 port my-2 p-2">
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
              <img src="gegocart/p4.jpg">              
        </div>
        <div class="flex justify-between px-2 py-4">
          <div>
            <p class="my-1">Vortex Arm Chair</p>
            <p class="my-1 font-semibold">Rs.1950</p>
         </div>
          <div class="portfolioDisc"> 
            <p class="px-4 py-2 bg-shop-primary text-white text-center rounded hover:bg-black font-semibold">Add to cart</p>   
          </div>
      </div>
    </div>
    <div class="w-1/4 port my-2 p-2">
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
              <img src="gegocart/p5.jpg">              
        </div>
        <div class="flex justify-between px-2 py-4">
          <div>
            <p class="my-1">Vortex Arm Chair</p>
            <p class="my-1 font-semibold">Rs.1950</p>
         </div>
          <div class="portfolioDisc"> 
            <p class="px-4 py-2 bg-shop-primary text-white text-center rounded hover:bg-black font-semibold">Add to cart</p>   
          </div>
      </div>
    </div>
      <div class="w-1/4 port my-2 p-2">
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
              <img src="gegocart/p6.jpg">              
        </div>
        <div class="flex justify-between px-2 py-4">
          <div>
            <p class="my-1">Vortex Arm Chair</p>
            <p class="my-1 font-semibold">Rs.1950</p>
         </div>
          <div class="portfolioDisc"> 
            <p class="px-4 py-2 bg-shop-primary text-white text-center rounded hover:bg-black font-semibold">Add to cart</p>   
          </div>
      </div>
    </div>
      <div class="w-1/4 port my-2 p-2">
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
              <img src="gegocart/p7.jpg">              
        </div>
        <div class="flex justify-between px-2 py-4">
          <div>
            <p class="my-1">Vortex Arm Chair</p>
            <p class="my-1 font-semibold">Rs.1950</p>
         </div>
          <div class="portfolioDisc"> 
            <p class="px-4 py-2 bg-shop-primary text-white text-center rounded hover:bg-black font-semibold">Add to cart</p>   
          </div>
      </div>
    </div>
      <div class="w-1/4 port my-2 p-2">
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
              <img src="gegocart/p8.jpg">              
        </div>
        <div class="flex justify-between px-2 py-4">
          <div>
            <p class="my-1">Vortex Arm Chair</p>
            <p class="my-1 font-semibold">Rs.1950</p>
         </div>
          <div class="portfolioDisc"> 
            <p class="px-4 py-2 bg-shop-primary text-white text-center rounded hover:bg-black font-semibold">Add to cart</p>   
          </div>
      </div>
    </div>
 -->

  </div>
</div>
      </div>
</template>

<script>
  import { mapGetters } from 'vuex'
    export default {
    layout: 'home',
    data(){
      return{
         products:[],
        modvalue:0,
        rooturl:process.env.SITEURL,
        page: 1,
        page_count: 0,
        total:'',
        total_rating:5,
      }
    },
    
    middleware: [
      'redirectIfGuest'
    ],
    methods:{
             async getproduct()
              {
               
                 let response = await this.$axios.$get('products');
                // console.log(response.data);
                this.products=response.data;
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
