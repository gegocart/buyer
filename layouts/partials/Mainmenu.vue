<template>
  <div>
  <div class="bg-shop-primary">
    <div class="flex mx-auto">
      <div class="hidden lg:block">
         <ul class="w-full list-reset flex">                  
             <li class="flex cursor-pointer font-semibold text-shop-primary self-center p-4 mr-10" @mouseover="openMenu()">
             <svg class="fill-current text-white h-6 mr-4" xmlns="http://www.w3.org/2000/svg" id="Layer_1" enable-background="new 0 0 512 512" height="512px" viewBox="0 0 512 512"><g><path d="m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z" data-original="#000000" class="active-path" data-old_color="#000000"/><path d="m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z" data-original="#000000" class="active-path" data-old_color="#000000"/><path d="m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z" data-original="#000000" class="active-path" data-old_color="#000000"/></g> </svg>
             <span class="text-white self-center font-bold">All Categories</span></li>
             <li class="self-center mr-8 font-bold"><span class="text-white">Materials</span></li>
             <li class="self-center mr-8 font-bold"><span class="text-white">Services</span></li>
             <li class="self-center font-bold"><span class="text-white">Sellers</span></li>
          </ul>
          <div>
      </div>
      </div>
      <div class="block lg:hidden">
          <button @mouseover="openMenu()"  @click="toggle" class="m-2 flex items-center p-1 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
             <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
         </button>
      </div> 
     </div>
   </div>

<div class="w-full lg:px-3 main-menu z-10" v-bind:class="[this.submenu=='1'?'block':'disp-none']">      
      <div class=" mx-auto flex flex-col lg:flex-row" @mouseleave="leaveMenu()">

        <!-- desktop view start -->
         <div class="hidden lg:block w-full lg:w-64 z-40">
           <ul class="list-reset bg-white text-white " v-for="(category,index) in categories">
                   <li class="item-center border-b border-grey-light flex cursor-pointer font-semibold hover:bg-grey-light hover:font-bold p-3" @mouseover="showByIndex(index)"> 
                    <div class="w-1/6 flex items-center">
                      <img src="~/assets/images/product.svg" class="h-2">
                    </div>
                    <div class="w-5/6 flex justify-between items-center">
                      <span class="text-xs text-black">{{category.name}}</span>                    
                      <img src="~/assets/images/next.svg" class="h-2">
                  </div>
                </li>                
          </ul>
      </div>

    <div class="hidden lg:block">
      <div class="w-full lg:w-64 flex h-full z-10"  v-bind:class="[this.category_id!=''?'block':'disp-none']" @mouseleave="leaveMenu()" >       
            <div class="w-full flex flex-col container mx-auto bg-white bg-img">
              <ul class="bg-white flex flex-col list-reset" v-for="children in subcategories[this.category_id]" >
                 <li class="p-3 border-b border-grey-light flex cursor-pointer font-semibold  hover:bg-grey-light hover:font-bold">  
                     <nuxt-link
                       :to="{ name: 'categories-slug', query:{childid:children.id,parentname:categories[category_id].slug},
                        params: { slug: children.slug ,parentname:categories[category_id].slug} }"   
                        class="text-xs no-underline text-black"
                        :key="children.slug">
                        {{ children.name }}
                     </nuxt-link>                         
                  </li>                       
              </ul>  
            </div>         
      </div>
   </div>

   <!-- desktob view end -->
 <!-- mobile view start -->

 <div class="lg:hidden w-full lg:w-64 z-40">
           <ul class="list-reset bg-white text-white " v-for="(category,index) in categories">    
            <li class="flex cursor-pointer font-semibold hover:font-bold p-2 border-b border-grey">
              <div class="w-full flex flex-col"  @click="showChild(index)" >
                  <div class="w-full flex justify-between">
                      <span class="text-sm p-2 text-black font-bold">{{category.name}}</span>                         
                  </div>
                 <div v-bind:class="[indexId==index?'block':'disp-none']" class="lg:hidden">
                  <div  class="w-full lg:w-64 flex h-auto z-10"  v-bind:class="[category_id!=''?'block':'disp-none']" @click="leaveMenu()" >       
                    <div class="w-full flex flex-col container mx-auto bg-img">
                      <ul class="flex flex-col list-reset" v-for="children in subcategories[category_id]" >
                         <li class="w-full flex cursor-pointer font-semibold text-white bg-grey-light hover:font-bold p-3 mx-3 border-b border-white hover:bg-shop-primary">  
                             <nuxt-link
                               :to="{ name: 'categories-slug', query:{parentname:categories[category_id].slug},
                                params: { slug: children.slug ,parentname:categories[category_id].slug} }"
                                class="text-xs no-underline text-black"
                                :key="children.slug" >
                                {{ children.name }}
                             </nuxt-link>                         
                          </li>                       
                      </ul>  
                    </div>         
                 </div>
                </div>       
            </div>
            </li>                
          </ul>
      </div>
    </div>
  </div>
</div>
</template>
<style>
    .bg-img
    {
    /*background-image: url("/assets/images/sample.png");*/
    }
</style>
<script>
  import { mapGetters } from 'vuex'
export default {
   data () {
      return {
               women:false,
                men:false,
                product3:false,
                product4: false,
               // showByIndex: null,
                categories:[],
                subcategories:[],
                category_id:'',
                submenu:0,
                indexId:'',

      }
    },
    // computed: {
    //   ...mapGetters({
    //     categories: 'categories',
    //   })
    // },
    methods: {
        mouseOver: function(){
            this.active = !this.active;   
        },

        showChild(index)
          {
             console.log('showChild'+index);
             this.indexId=index;
             this.category_id=index;
          },

        async toggle() {
          //alert('hi');
            this.open = !this.open
         },

          showByIndex(categoryid){
             this.category_id=categoryid;
          },
          // leaveMenu(){
          //   this.category_id='';
          // },


         async getcategory(){
          let response = await this.$axios.$get('buyermenucategorylist');
          this.categories=response['category'];
          this.subcategories=response['subcategory'];

         },
        openMenu()
        {
          this.submenu=!this.submenu;
          this.indexId='';
          this.category_id='';
        },
         leaveMenu()
        {
          this.submenu=!this.submenu;
          this.category_id='';
          this.indexId='';
        },
    },
    created(){
      this.getcategory()
    }
    
  }
</script>
<style type="text/css">
  .disp-none{
    display:none !important;
  }
  .main-menu {
    position: absolute;
  }
</style>