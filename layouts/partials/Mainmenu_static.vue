<template>
     
<div>
   <div class="block sm:hidden">
                  <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                  </button>
                </div> 
      <div class="container flex">
        <div class="w-48">
           <ul class="list-reset bg-grey-lightest shadow-md">
                <li class="cursor-pointer font-semibold hover:text-shop-primary hover:font-bold pl-2 py-2" @mouseover="women=true" @mouseleave="women=false"> <img src="~/assets/images/product.svg" class="h-4 mr-2"><span class="text-sm">Women</span></li>
                <li class="cursor-pointer font-semibold hover:text-shop-primary hover:font-bold pl-2 py-2" @mouseover="men=true" @mouseleave="men=false"> <img src="~/assets/images/product.svg" class="h-4 mr-2"><span class="text-sm">Men</span></li>
                <li class="cursor-pointer font-semibold hover:text-shop-primary hover:font-bold pl-2 py-2" @mouseover="product3=true" @mouseleave="product3=false"> <img src="~/assets/images/product.svg" class="h-4 mr-2"><span class="text-sm">Product 3</span></li>
                <li class="cursor-pointer font-semibold hover:text-shop-primary hover:font-bold pl-2 py-2" @mouseover="product4=true" @mouseleave="product4=false"> <img src="~/assets/images/product.svg" class="h-4 mr-2"><span class="text-sm">Product 4</span></li>
                <li class="cursor-pointer font-semibold hover:text-shop-primary hover:font-bold pl-2 py-2" @mouseover="product5=true" @mouseleave="product5=false"> <img src="~/assets/images/product.svg" class="h-4 mr-2"><span class="text-sm">Product 5</span></li>
                <li class="cursor-pointer font-semibold hover:text-shop-primary hover:font-bold pl-2 py-2" @mouseover="product6=true" @mouseleave="product6=false"> <img src="~/assets/images/product.svg" class="h-4 mr-2"><span class="text-sm">Product 6</span></li>
                <li class="cursor-pointer font-semibold hover:text-shop-primary hover:font-bold pl-2 py-2" @mouseover="product7=true" @mouseleave="product7=false"> <img src="~/assets/images/product.svg" class="h-4 mr-2"><span class="text-sm">Product 7</span></li>
                <li class="cursor-pointer font-semibold hover:text-shop-primary hover:font-bold pl-2 py-2" @mouseover="product8=true" @mouseleave="product8=false"> <img src="~/assets/images/product.svg" class="h-4 mr-2"><span class="text-sm">Product 8</span></li>
                <li class="cursor-pointer font-semibold hover:text-shop-primary hover:font-bold pl-2 py-2" @mouseover="product9=true" @mouseleave="product9=false"> <img src="~/assets/images/product.svg" class="h-4 mr-2"><span class="text-sm">Product 9</span></li>
                <li class="cursor-pointer font-semibold hover:text-shop-primary hover:font-bold pl-2 py-2" @mouseover="product10=true" @mouseleave="product10=false"> <img src="~/assets/images/product.svg" class="h-4 mr-2"><span class="text-sm">Product 10</span></li>
          </ul>
    </div>
        <div class="w-2/5 bg-white flex h-78  z-10"  v-show="women" @mouseover="women=true" @mouseleave="women=false">
        <template>
                <div class="w-full flex container mx-auto shadow-md bg-grey-lightest p-8 bg-img">
                    <div class="w-1/3">
                      <h4 class="text-shop-primary font-medium uppercase">New In</h4>
                     <ul class="list-reset">
                        <li class=""><a href="#" class="text-sm no-underline text-black hover:text-shop-primary">New In Clothing</a></li>
                        <li class=""><a href="#" class="text-sm no-underline text-black hover:text-shop-primary">New In Footwear</a></li>
                        <li class=""><a href='#' class="text-sm no-underline text-black hover:text-shop-primary">New In Bags</a></li>
                     </ul>
                  <h4 class="text-shop-primary font-medium uppercase mt-4">Bags</h4>
                     <ul class="list-reset">
                        <li class=""><a href="#" class="text-sm no-underline text-black hover:text-shop-primary">Back Bags</a></li>
                        <li class=""><a href="#" class="text-sm no-underline text-black hover:text-shop-primary">Wallet</a></li>
                        <li class=""><a href='#' class="text-sm no-underline text-black hover:text-shop-primary">Laptop Bags</a></li>
                        <li class=""><a href='#' class="text-sm no-underline text-black hover:text-shop-primary">Travel Bags</a></li>
                     </ul>
                  </div>
                  <div class="w-1/3">
                  <h4 class="text-shop-primary font-medium uppercase">Ethnic wear</h4>
                     <ul class="list-reset">
                        <li class=""><a href="#" class="text-sm no-underline text-black hover:text-shop-primary">Kurtas & Kurtis</a></li>
                        <li class=""><a href="#" class="text-sm no-underline text-black hover:text-shop-primary">Suits Sets</a></li>
                        <li class=""><a href='#' class="text-sm no-underline text-black hover:text-shop-primary">Sarees & Dress Material</a></li>
                        <li class=""><a href='#' class="text-sm no-underline text-black hover:text-shop-primary">Lingerie</a></li>
                     </ul>
                  </div>
                  <div class="w-1/3">
                  <h4 class="text-shop-primary font-medium uppercase">Foot wear</h4>
                     <ul class="list-reset">
                        <li class=""><a href="#" class="text-sm no-underline text-black hover:text-shop-primary">Flats</a></li>
                        <li class=""><a href="#" class="text-sm no-underline text-black hover:text-shop-primary">Sandals</a></li>
                        <li class=""><a href='#' class="text-sm no-underline text-black hover:text-shop-primary">Bellies</a></li>
                        <li class=""><a href='#' class="text-sm no-underline text-black hover:text-shop-primary">Boots</a></li>
                     </ul>                     
                     <img src="~assets/images/sample.jpg">
                  </div>               
                  </div>
          </template>
            </div>
            <div class="w-2/5 bg-white flex h-78  z-10"  v-show="men" @mouseover="men=true" @mouseleave="men=false">
        <template>
                <div class="w-full flex container mx-auto shadow-md bg-grey-lightest p-8 bg-img">
                    <div class="w-1/3">
                  <h4 class="text-shop-primary font-medium uppercase">New In</h4>
                     <ul class="list-reset">
                        <li class=""><a href="#" class="text-sm no-underline text-black hover:text-shop-primary">New In Clothing</a></li>
                        <li class=""><a href="#" class="text-sm no-underline text-black hover:text-shop-primary">New In Footwear</a></li>
                        <li class=""><a href='#' class="text-sm no-underline text-black hover:text-shop-primary">New In Bags</a></li> 
                        <li class=""><a href='#' class="text-sm no-underline text-black hover:text-shop-primary">New In Watches</a></li>
                     </ul>
                  <h4 class="text-shop-primary font-medium uppercase mt-4">Bags</h4>
                     <ul class="list-reset">
                        <li class=""><a href="#" class="text-sm no-underline text-black hover:text-shop-primary">Back Bags</a></li>
                        <li class=""><a href="#" class="text-sm no-underline text-black hover:text-shop-primary">Wallet</a></li>
                        <li class=""><a href='#' class="text-sm no-underline text-black hover:text-shop-primary">Laptop Bags</a></li>
                        <li class=""><a href='#' class="text-sm no-underline text-black hover:text-shop-primary">Travel Bags</a></li>
                     </ul>
                  </div>
                  <div class="w-1/3">
                  <h4 class="text-shop-primary font-medium uppercase">Clothing</h4>
                     <ul class="list-reset">
                        <li class=""><a href="#" class="text-sm no-underline text-black hover:text-shop-primary">Polos & Tees</a></li>
                        <li class=""><a href="#" class="text-sm no-underline text-black hover:text-shop-primary">Casual Shirts</a></li>
                        <li class=""><a href='#' class="text-sm no-underline text-black hover:text-shop-primary">Jeans</a></li>
                        <li class=""><a href='#' class="text-sm no-underline text-black hover:text-shop-primary">Casual Trousers</a></li>                        
                        <li class=""><a href='#' class="text-sm no-underline text-black hover:text-shop-primary">Formal Shirts</a></li>
                        <li class=""><a href='#' class="text-sm no-underline text-black hover:text-shop-primary">Formal Trousers</a></li>
                     </ul>
                  <h4 class="text-shop-primary font-medium uppercase">Watches</h4>
                     <ul class="list-reset">
                        <li class=""><a href="#" class="text-sm no-underline text-black hover:text-shop-primary">Analog</a></li>
                        <li class=""><a href="#" class="text-sm no-underline text-black hover:text-shop-primary">Chronograph</a></li>
                        <li class=""><a href='#' class="text-sm no-underline text-black hover:text-shop-primary">Digital</a></li>
                        <li class=""><a href='#' class="text-sm no-underline text-black hover:text-shop-primary">Watch Cases</a></li>
                     </ul>
                  </div>
                  <div class="w-1/3">
                  <h4 class="text-shop-primary font-medium uppercase">Foot wear</h4>
                     <ul class="list-reset">
                        <li class=""><a href="#" class="text-sm no-underline text-black hover:text-shop-primary">Flats</a></li>
                        <li class=""><a href="#" class="text-sm no-underline text-black hover:text-shop-primary">Sandals</a></li>
                        <li class=""><a href='#' class="text-sm no-underline text-black hover:text-shop-primary">Bellies</a></li>
                        <li class=""><a href='#' class="text-sm no-underline text-black hover:text-shop-primary">Boots</a></li>
                     </ul>
                  </div>
                  </div>
          </template>
            </div>

</div>
</div>
</template>
<style>
.bg-img
{
   background-image: url("/assets/images/sample.png");
}
</style>
<script>
export default {
   data () {
      return {
               women:false,
                men:false,
                product3:false,
                product4: false,

      }
    },
    methods: {
        mouseOver: function(){
            this.active = !this.active;   
        },
               async toggle() {
          alert('hi');
        this.open = !this.open
    }
    }
    
  }

// var demo = new Vue({
//     el: '#demo',
//     data: {
//         active: false
//     },
//     methods: {
//         mouseOver: function(){
//             this.active = !this.active;   
//         }
//     }
// });
</script>