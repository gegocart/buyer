<template>

	<div class="w-full flex flex-wrap">
  <div class="container w-full flex justify-center">
      <div class="w-3/4 flex my-8 bg-grey-lightest flex-wrap">
            <div class="w-full flex flex-col p-4">
                <h4 class="my-4">Description</h4>
                <p class="leading-loose">By default Tailwind provides 15 fixed width utilities, 12 percentage-based utilities, an auto utility, and a utility for setting the width of an element to match the viewport width. You change, add, or remove these by editing the width section of your Tailwind config.</p>
            </div>
             <div class="w-full flex flex-wrap p-4">
                <h4 class="my-4">Ratings</h4>
                <div class="w-full flex">
      <div class="w-1/3 p-2">
        <div class="flex my-4">
          <span class="custom-font mr-2">User Rating</span>
          <span class="fa fa-star text-shop-primary"></span>
          <span class="fa fa-star text-shop-primary"></span>
          <span class="fa fa-star text-shop-primary"></span>
          <span class="fa fa-star text-shop-primary"></span>
          <span class="fa fa-star"></span>
        </div>
        <p class="custom-font my-4">4.1 average based on 254 reviews.</p>
        </div>
           <div class="w-1/3 p-2">
        <div class="flex w-full justify-between my-2">
          <div class="w-1/4 mr-2">
            <p>5 star</p>
          </div>
          <div class="w-full bg-grey-lighter mr-2">
            <div class="w-3/4 h-4 bg-green"></div>
          </div>
          <div class="w-1/4">
            <p class="float-right">149</p>
          </div>
        </div>
        <div class="flex w-full justify-between my-2">
          <div class="w-1/4 mr-2">
            <p>4 star</p>
          </div>
          <div class="w-full bg-grey-lighter mr-2">
            <div class="w-2/3 h-4 bg-orange"></div>
          </div>
          <div class="w-1/4">
            <p class="float-right">100</p>
          </div>
        </div>
        <div class="flex w-full justify-between my-2">
          <div class="w-1/4 mr-2">
            <p>3 star</p>
          </div>
          <div class="w-full bg-grey-lighter mr-2">
            <div class="w-3/5 h-4 bg-teal-dark"></div>
          </div>
          <div class="w-1/4">
            <p class="float-right">78</p>
          </div>
        </div>
        <div class="flex w-full justify-between my-2">
          <div class="w-1/4 mr-2">
            <p>2 star</p>
          </div>
          <div class="w-full bg-grey-lighter mr-2">
            <div class="w-1/2 h-4 bg-blue-lighter"></div>
          </div>
          <div class="w-1/4">
            <p class="float-right">19</p>
          </div>
        </div>
        <div class="flex w-full justify-between my-2">
          <div class="w-1/4 mr-2">
            <p>1 star</p>
          </div>
          <div class="w-full bg-grey-lighter mr-2">
            <div class="w-1/4 h-4 bg-purple-light"></div>
          </div>
          <div class="w-1/4">
            <p class="float-right">6</p>
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
  props:['slug'],
	layout:'product',
        data(){
            return {
               products:[],
                   item1:true,
                    item2:false,
                    item3:false,
                     open: false,
                     tab:'item1',
                    
              }

    },
      methods:{
 
           settab(tabname)
            {
         
             this.tab=tabname;
            },
         
            async asyncData ({ params, app }) {
             
              let response = await app.$axios.$get(`products/${params.slug}`)
               
              return {
                products: response.data
              }
            }


        }
}
</script>
