<template>
  <div>
     
	<div class="w-full p-8">      
  <div v-if="this.success!=null" class="w-1/2 my-4 bg-green-light p-4" id="success-alert">
    <p class="text-white" v-html="success">{{this.success}}</p>
      <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="close()">
  </div>  
  <div v-if="this.failure!=null" class="w-full my-4 bg-red-light p-4" id="failure-alert">
    <p class="text-white" v-html="failure">{{this.failure}}</p>
      <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="cancelclose()">
  </div>  
        <div class="w-full flex flex-wrap border-b border-grey-lighter pb-2">
              <div class="w-full flex justify-between my-2">
                  <h4 class="text-shop-primary">{{product.name}}</h4>
                  <img src="~assets/images/heart.svg" class="h-6">
              </div>
              <div class="w-full flex my-2">
                  <div class="text-sm mr-8 flex">
                          <div v-for="rating in total_rating">
                      <div v-if="product.rate >= rating">
                         <img src="/images/star_half.svg" class="h-4">
                      </div>
                      <div v-else>
                     <img src="/images/star.svg" class="h-4">
                    </div>
             </div>
                  </div>
                  <!-- <a href="#" class="no-underline text-sm text-blue mr-2 border-r border-grey-lighter pr-2">Be the first review</a> -->
                <nuxt-link :to="{ name: 'rating-productid', params: { productid : product.id } }" class="no-underline text-sm text-blue mr-2 border-r border-grey-lighter pr-2">
                      Be the first review
                </nuxt-link>
                  <a href="#" class="no-underline text-sm text-blue">Have a question?</a>
              </div>
          </div>
         <div class="border-b border-grey-lighter py-2" >
            <div >
              
              <div class="w-full flex my-2">
              <p class="text-grey">MRP. 
                    <strike>
                    <span >{{product.price}}
                    </span>
                    <!-- <span v-else>
                      {{product.price}}
                    </span> -->
                    </strike> &nbsp; <span>  (Inclusive of all taxes)</span></p>   
              </div>
              <div class="w-full flex my-2">
                  <h4 class="text-shop-primary text-bold text-lg">
                     <span>{{product.price}}
                    </span>
                   <!--  <span v-else>
                      {{product.price}}
                    </span> -->
                  </h4>
              </div>
              </div>
          </div>
          <!-- <div v-if="variationlength>0">
          <div class="border-b border-grey py-2" v-for="variation in product.variations">
            <div v-for="productvariation in variation">
              
              <div class="w-full flex my-2">
              <p class="text-grey">MRP. 
                    <strike>
                    <span v-if="productvariation.price_varies==true">{{productvariation.price}}
                    </span>
                    <span v-else>
                      {{product.price}}
                    </span>
                    </strike> &nbsp; <span>  (Inclusive of all taxes)</span></p>   
              </div>
              <div class="w-full flex my-2">
                  <h4 class="text-shop-primary text-bold text-lg">
                     <span v-if="productvariation.price_varies==true">{{productvariation.price}}
                    </span>
                    <span v-else>
                      {{product.price}}
                    </span>
                  </h4>
              </div>
              </div>
          </div>
          </div> -->
          <div class="my-2 flex w-full justify-between">
              <div class="flex" v-for="variation in product.variations">
                
                  <!--   <div class="flex" v-for="productvariation in variation">
                     
                      <div  v-if="productvariation.type.toLowerCase().trim()==='size'">
                          <p class="mr-16 self-center" >{{productvariation.type}}</p>
                          <div class="select is-fullwidth">
                            <select name="" id="" @change="sizechanged">
                              <option>select</option>
                              <option :value="productvariation.id" :key="productvariation.name">
                                {{ productvariation.name }}
                              </option>
                            </select>
                          </div>
                       
                      </div>

                    </div> -->
                    
                    <div class="flex">
                      <p class="mr-16 self-center">Stock: {{product.stock_count}}</p>
                      <p class="mr-16 self-center" v-if="product.in_stock==false">
                      Stock: OUT OF STOCK</p>
                         <!-- <p class="mr-16 self-center">Color</p>
                          <span v-for="(productvariation,index) in variation" 
                          class="border border-grey mr-2 p-2 rounded w-8 text-center dynamic" 
                          :key="productvariation.id" 
                          @click="getvariation(productvariation)" >
                          
                            <img src="/product/item3.png" class="h-4" > 
                            {{ productvariation.name }}
                          </span> -->
                          <!-- v-bind:style="{'border-color': color}" -->
                      </div>
                      
        <!--   <div class="flex">
             <p class="mr-16 self-center">Color</p>
              <span class="border border-grey mr-2 p-2 rounded w-8 text-center" >
                <img src="/product/item3.png" class="h-4"  ></span>
              <span class="border border-grey mr-2 p-2 rounded w-8 text-center">
                <img src="/product/item2.png" class="h-4"></span>
          </div> -->
                    <div class="flex">
                       <div>

                          <!-- <p class="mr-16 self-center" >{{productvariation.type}}</p> -->
                          <div class="select is-fullwidth">
                            <select name="" id=""   class="w-48" v-model="productattribute">
                               <option value="">select</option>
                              <option v-for="productvariation in variation" :value="productvariation.id" :key="productvariation.name" >
                                {{ productvariation.name }}-{{productvariation.price}}
                              </option>
                            </select>
                          </div>
                        
                      </div>


                     <!--  <div  v-if="productvariation.type.toLowerCase().trim()==='color'">
                          <p class="mr-16 self-center" >{{productvariation.type}}</p>
                          <div class="select is-fullwidth">
                            <select name="" id=""  @change="colorchanged">
                               <option>select</option>
                              <option :value="productvariation.id" :key="productvariation.name">
                                {{ productvariation.name }}
                              </option>
                            </select>
                          </div>
                        
                      </div>
                       <div  v-else>
                        <div v-if="productvariation.type.toLowerCase().trim()==='no variation'">
                          
                        </div>
                        <div v-else>
                          <p class="mr-16 self-center" >{{productvariation.type}}</p>
                          <div class="select is-fullwidth">
                            <select name="" id=""  @change="colorchanged">
                               <option>select</option>
                              <option :value="productvariation.id" :key="productvariation.name">
                                {{ productvariation.name }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </div> -->

                    </div>
                    
               
                    <!-- <p class="mr-16 self-center">Size</p>
                  <span class="border border-grey mr-2 p-2 rounded w-8 text-center">6</span>
                  <span class="border border-grey mr-2 p-2 rounded w-8 text-center">7</span>
                  <span class="border border-grey mr-2 p-2 rounded w-8 text-center">8</span>
                  <span class="border border-grey mr-2 p-2 rounded w-8 text-center">9</span> -->
              </div>
              <!-- <div class="flex self-center">
              <a href="#" style="display: none;" class="text-sm no-underline">Size chart</a>
              </div> -->
          </div>
          <!-- 
          <div class="flex">
             <p class="mr-16 self-center">Color</p>
              <span class="border border-grey mr-2 p-2 rounded w-8 text-center" >
                <img src="/product/item3.png" class="h-4"  ></span>
              <span class="border border-grey mr-2 p-2 rounded w-8 text-center">
                <img src="/product/item2.png" class="h-4"></span>
          </div> -->

          <div class="w-full flex justify-center mt-6" v-if="product.in_stock==true">
      <!--      <nuxt-link :to="{ name: 'cart' }" class="add_hover no-underline uppercase text-white bg-black p-4 w-64 text-center mr-8 font-semibold rounded">
              Add to cart
            </nuxt-link> -->

            <button class="no-underline uppercase text-white bg-shop-primary p-3 text-sm w-64 text-center font-semibold rounded-full hover:bg-black" v-show="showaddcart" @click="addcart()">Add to cart</button>
             <!--  <nuxt-link :to="{ name: 'delivery-address' }" class="buy_hover no-underline uppercase text-white bg-shop-primary p-4 w-64 text-center font-semibold rounded">
              Buy now
            </nuxt-link> -->
          </div>
          <div class="flex mt-4 items-center" v-if="product.in_stock==true"> 
              <div class="w-1/6 mr-4">
                <p class="custom-font">Delivery</p>
              </div>
              <div class="w-5/6">
                 <div class="flex">
                    <input class="text-sm w-1/4 bg-white p-2 custom-font border border-black" placeholder="Enter Pincode" v-model="form.pincode">
                    <div class="bg-black text-sm px-4 py-2">
                      <button class="text-white custom-font text-sm" 
                      @click="checkpincode">Check</button>
                    </div> 
                    <p class="ml-4 text-sm text-grey flex self-center">
                      <span class="ml-4 text-sm text-grey flex self-center">{{this.avaliable}}</span>
                    </p>
                 <!--  <p class="ml-4 text-sm text-grey flex self-center">Generally Delivered in 10 - 12 days</p> -->
                  </div>
              </div>
            </div>
			</div>
    </div>
</template>
<script>
  $(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});
});
</script>
<script>
   import { mapActions } from 'vuex'

export default{
  props:['slug'],

        data(){
            return {
               product:[],
                   item1:true,
                   item2:false,
                   item3:false,
                    open: false,
                    tab:'item1',
                    params:this.$route.params.slug,
                    products:{},
                    productvariations:[],
                    variationlength:0,
                    variationname:'',
                    novariationid:0,
                    total_rating:5,
                    selectcolor:'',
                    seller_id:'',
                    form:{
                      avaliable:null,
                      pincode:''
                    },
                    avaliable:null,
                    pincodelists:[],
                    showaddcart:true,
                    success:null,
                    failure:null,
                    productattribute:''
   
              }

    },
     methods:{
        ...mapActions({
              flash: 'alert/flash'
            }),
           settab(tabname)
            {
         
             this.tab=tabname;
            },
            // getvariation(variation){
            //   this.color=variation.name;
            //   document.querySelector(".dynamic").style.background = this.color;
             
            // },
            close(){
               this.success=null;
            },
            cancelclose(){
               this.failure=null;
            },
            async getproduct()
              {
                 
                 let response = await this.$axios.$get(`products/` +this.params);
                 this.product=response.data;

                 this.seller_id=this.product.user.id;
                  if(this.product.variations.length>0){   //in json output the variation value is "" :{} array
                  this.variationlength=this.product.variations[""].length;
                  for (var i =0;i<this.variationlength;i++) {
                    this.variationname=this.product.variations[""][i].name;
                    this.novariationid=this.product.variations[""][i].id;
                  }
                }
              },

              size:function(id){
                
                this.productvariations.push({ "id":id ,"quantity":1 })
              },
              color:function(id){
                  this.productvariations.push({ "id":id ,"quantity":1 })
              },
              sizechanged($event){
                //  alert($event.target.value);
                 this.$emit('input', $event.target.value)
                 this.productvariations.push({ "id":$event.target.value ,"quantity":1 })
               },
               colorchanged ($event) {
              // alert($event.target.value)
                 this.$emit('input', $event.target.value)
                // alert($event.target.value)
                 this.productvariations.push({ "id":$event.target.value ,"quantity":1 })
               },
              
      async addcart()
        {

        if(this.variationname.toLowerCase()!=='no variation')
        {
            if(this.productattribute==''){
              this.failure="select any one size or color";
            }
            else{
             this.productvariations.push({ "id":this.productattribute ,"quantity":1 })
             this.products['products']=this.productvariations;
            
               var self=this;
                   let response = await this.$axios.$post('cart',this.products) 
                                  .then((response) => {
                                   this.flash="added";
                                   this.$nuxt.$emit('getcart',true);
                                        this.$router.replace({
                                               name: 'cart',
                                            
                                              });
                                 }).catch(function (error) {
                                
                                    if(error.response.status==401){
                                      self.failure="Please Signin";
                                    }
                                  });
            }
         }
         else{
           this.productvariations.push({ "id":this.novariationid ,"quantity":1 })
            this.products['products']=this.productvariations;
               
                   let response = await this.$axios.$post('cart',this.products) 
                                  .then((response) => {
                                   this.flash="added";
                                   this.$nuxt.$emit('getcart',true);
                                        this.$router.replace({
                                               name: 'cart',
                                            
                                              });
                                 }).catch(function (error) {
                                 
                                     // if(error.message=="Request failed with status code 401"){
                                     //  this.$router.replace({
                                     //           name: 'index',
                                            
                                     //          })
                                     // }
                                  });

         }
           // this.products['products'] =[
           //   { "id":this.product.productvariations[i].id ,"quantity":2 }];
       // this.products['products']=[{ "id":3 ,"quantity":2 }];
         },
         checkpincode(){
            this.getpincodeavaliable();
         },
          async getpincodeavaliable()
          {

            let response = await this.$axios.$get('settings/pincodeavailable/' + this.seller_id
                                              + '/'+ this.form.pincode);

            this.pincodelists = response;
            
            if(this.pincodelists.length>0){
              for (var i =0;i<this.pincodelists.length;i++) {
                this.form.avaliable=this.pincodelists[i].pincode;
                 this.avaliable="Generally Delivered in " + this.pincodelists[i].delivered + " days";
                 this.showaddcart=true;
              }
               
             }
             else{
                 this.form.avaliable =null;
                 this.avaliable="Not Avaliable";
                 this.showaddcart=false;
             }
            }
        
        },
      created () {
          this.getproduct()
         },
  
}
</script>
<style>
.add_hover:hover
{
border-radius: 50px;
border-color: ##f68c23 !important;
transition: all 0.3s ease 0s;
background-color:#ff5139;
}
.buy_hover:hover
{
  border-radius: 50px;
border-color: black !important;
transition: all 0.3s ease 0s;
background-color:black;
}
.active {
  color: red;
 }
</style>