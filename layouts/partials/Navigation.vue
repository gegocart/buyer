<template>
  <nav class="navbar">
    <div class="flex px-4 py-2 justify-between items-center">
      <div class="flex navbar-brand">
        <nuxt-link :to="{ name: 'index' }" class="">
          <img src="/gegocart-logo.png" class="h-6 lg:h-10">
        </nuxt-link>
        <div class="navbar-burger burger" data-target="nav">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

       <!--<div class="flex-1 ml-auto">
        <template v-for="category in categories">
          <template v-if="category.children.length">
            <div class="navbar-item is-hoverable has-dropdown" :key="category.slug">
              <nuxt-link
                :to="{ name: 'categories-slug', params: { slug: category.slug } }"
                class="navbar-link"
              >
                {{ category.name }}
              </nuxt-link>

              <div class="navbar-dropdown">
                <nuxt-link
                  :to="{ name: 'categories-slug', params: { slug: child.slug } }"
                  class="navbar-item"
                  v-for="child in category.children"
                  :key="child.slug"
                >
                  {{ child.name }}
                </nuxt-link>
              </div>
            </div>
          </template>
          <template v-else>
            <nuxt-link :to="{ name: 'categories-slug', params: { slug: category.slug } }" :key="category.slug" class="navbar-item">
              {{ category.name }}
            </nuxt-link>
          </template>
        </template> 
      </div>-->
 

      <div id="nav" class="navbar-menu">
        <div class="navbar-end flex">
          <template v-if="!$auth.loggedIn">
           <div class="rounded-full bg-shop-primary p-2 flex">
              <input class="w-32 lg:w-64 mx-1 text-white no-underline bg-transparent outline-none" v-on:keyup="keymonitor" v-model="searchquery" type="text" placeholder="Search">
              <button class="mx-1 self-center" @click="search()">
                <img src="/images/search-white.svg" class="h-4">
              </button>
           </div>
             <nuxt-link :to="{ name: 'auth-registration' }" class="self-center navbar-item">
              <div class="hidden lg:block">Sign Up</div>
              <div class="block lg:hidden"><img src="images/register.svg" class="h-4"></div>
            </nuxt-link>
            <nuxt-link :to="{ name: 'auth-signin' }" class="self-center navbar-item">
              <div class="hidden lg:block">Sign In</div>
              <div class="block lg:hidden"><img src="images/login.svg" class="h-4"></div>
            </nuxt-link>
          </template>
          <template v-else>
         <!--    <div class="flex float-left control w-full lg:w-3/4">
              <div>
  <vautocomplete :items="items" v-model="item" :get-label="getLabel" :component-item='template' @update-items="getSearchproduct">
  </vautocomplete>
</div>
            <input class="border-b  no-underline text-primary mr-4" v-on:keyup="keymonitor" 
            v-model="searchquery" type="text" placeholder="Search product.."><button class="border-b border-organic-primary no-underline text-primary mr-4" @click="search()">
             <img src="/images/search.svg" class="h-4 lg:h-6"></button>
           </div> -->
           <div class="flex items-center">      

            <div class="rounded-full bg-shop-primary p-2">
              <input class="mx-1 text-white no-underline bg-transparent outline-none" v-on:keyup="keymonitor" v-model="searchquery" type="text" placeholder="Search product..">
              <button class="mx-1 self-center" @click="search()">
                <img src="/images/search-white.svg" class="h-4">
              </button>
           </div>
            <nuxt-link :to="{ name: 'orders' }" class="self-center navbar-item">
              Orders
            </nuxt-link>
            <nuxt-link :to="{ name: 'cart' }" class="self-center navbar-item">
              Cart ({{ cartCount }})
            </nuxt-link>
             <nuxt-link :to="{ name: '' }" class="navbar-item"><img src="~assets/images/user.png" class="h-8" 
              @click="togglemenu">
            </nuxt-link>
          </div>
          </template>
        </div>
      </div> 
    </div>
      <div class="w-full flex justify-end absolute"  v-show="submenu" @mouseover="submenu=true"   @mouseleave="submenu=false">
        <template v-if="$auth.loggedIn"> 
          
          <div class="w-64 sub-menu flex items-start mx-4">
          <!-- <div class="user-info p-2 flex flex-col items-center">
            <div class="mb-2">
              <img src="https://placehold.it/80x80" class="rounded-full">
            </div>
            <div href="#" class="navbar-item">
                <p class="text-sm font-bold uppercase">{{ $auth.user.name }}</p>
            </div>
          </div> -->
          <div class="w-full p-2 flex flex-col">
            <p class="text-sm font-bold uppercase text-center text-grey-light border-b border-grey-light pb-2">{{ $auth.user.name }}</p>
            <nuxt-link :to="{ name: 'profile' }" class="sub-menu-item">
                View Profile
            </nuxt-link>
            <nuxt-link :to="{ name: 'profile-password' }" class="sub-menu-item">
                Change Password
            </nuxt-link>
            <nuxt-link :to="{ name: 'profile-notifications' }" class="sub-menu-item">
                Notifications
            </nuxt-link>
            <nuxt-link :to="{ name: 'profile-settings' }" class="sub-menu-item">
                Settings
            </nuxt-link>

          <!--   <nuxt-link :to="{ name: '' }"  @click="logout" class="sub-menu-item">
                Logout
            </nuxt-link> -->
          <!--   <a href="" @click="logout">logout</a>
          </div> -->
           <!--  <nuxt-link :to="{ name: '' }" class="sub-menu-item">
                Logout
            </nuxt-link> -->
            <a href="#" @click="logout" class="sub-menu-item">Logout</a>
           </div>

        </div>
        </template>
      </div> 
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex'
  import vautocomplete from 'v-autocomplete'

// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-autocomplete/dist/v-autocomplete.css'
import ItemTemplate from '@/layouts/partials/ItemTemplate'

  export default {
     data () {
      return {
        submenu:false,
        searchquery:'',
        products:[],
         page: 1,
        page_count: 0,
        total:'',
        item:{},
                // item: {id: 9, name: 'Lion', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
      items: [],
      template: ItemTemplate
      }
    },
    components:{
        vautocomplete
    },
    methods: {
        togglemenu: function(){
            this.submenu = !this.submenu;   
        },
         getLabel (item) {
          
             for (var i = 0; i <this.items.length; i++) {
                      this.item.id=this.items[i].id;
                      this.item.name=this.items[i].name;
                      this.item.description=this.items[i].description
                  }
             return item.name
          },
    //       updateItems (text) {
    //   yourGetItemsMethod(text).then( (response) => {
    //     this.items = response
    //   })
    // }
          updateItems (text) {
            this.$axios.$get('products').then(response => {
                  
                  this.items=response.data;
                 });
          },
           getSearchproduct()
              {
               
               
                 this.$axios.$get('products').then(response => {
                 
                  this.items=response.data;
                 });
                
                
               
                // this.page_count = response.meta.last_page;
                // this.total = response.meta.total;

        },
        async logout() {
          await this.$auth.logout();
         },
           async search(){
            console.log(this.searchquery);
            this.searchfunction();
               
         } ,
         async keymonitor(){
                  if(event.key == "Enter")
                   {
                      this.searchfunction();
                   }
            }, 

            searchfunction(){
              //alert(process.env.url)
             //this.$router.push('/products/productlist?search=' + this.searchquery)
              //redirect('/products/productlist?search=' + this.searchquery)
              //this.$route.router.go('/products/productlist?search=' + this.searchquery);
             // this.$emit('productsearch_query', this.searchquery);
              this.$router.push({
                name: 'products-productlist',
                redirect:'/products/productlist',
                query: {searchq: this.searchquery}
                //params: { searchq: this.searchquery, }
              });

              //window.location.href='/products/productlist?search=' + this.searchquery;
            }

    },

    computed: {
      ...mapGetters({
        categories: 'categories',
        cartCount: 'cart/count'
      })
    },
    created(){
      this.searchquery='';
      this.getSearchproduct();
    }
  }

</script>
<style>
  .vautocomplete{position:relative}
  .vautocomplete 
  .vautocomplete-list{position:absolute}
  .vautocomplete .vautocomplete-list .vautocomplete-list-item{cursor:pointer}
  .vautocomplete .vautocomplete-list .vautocomplete-list-item.vautocomplete-item-active{background-color:#f3f6fa}
.navbar a:hover, .dropdown:hover .dropbtn
{
  border:0px ! important;
}
</style>




