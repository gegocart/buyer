<template>
    <div class="w-3/4 p-8"><!--  w-3/4 -->
      <form action="#" > 
        <h5 class="text-center uppercase text-shop-primary font-semibold self-center bg-shop-primary text-white p-4">Payment method</h5>
          <div class="flex">
            <div class="w-1/3 h-70 bg-grey">
              <ul class="list-reset" v-for="paymentmethod in paymentMethods">

                 <li @click="settab(paymentmethod.gateway_name,paymentmethod.id)" class="p-4 uppercase text-sm font-semibold cursor-pointer hover:bg-shop-primary" v-bind:class="[{'bg-shop-primary text-white' : tab ==paymentmethod.gateway_name}]">{{paymentmethod.card_type}}</li>
                  </ul>
             <!--  <ul class="list-reset">
                  <li @click="settab('credit')" class="p-4 bg-shop-primary uppercase text-sm font-semibold" v-bind:class="[{'bg-white border-2 border-shop-primary' : tab === 'credit'}]">Credit Card</li>                  
                  <li @click="settab('debit')" class="p-4 bg-shop-primary uppercase text-sm font-semibold" v-bind:class="[{'bg-white border-2 border-shop-primary' : tab === 'debit'}]">Debit Card</li>
                  <li @click="settab('cod')" class="p-4 bg-shop-primary uppercase text-sm font-semibold" v-bind:class="[{'bg-white border-2 border-shop-primary' :tab === 'cod'}]">Cash on Delivery</li>
              </ul> -->
            </div>
            <div class="w-2/3">
                    <div class="w-full flex bg-grey-lighter flex-col p-8 h-70" v-if="this.tab=='cd'">
                          <input type="text" placeholder="Card Number" class="p-2 w-3/4 my-2">
                           <div class="flex my-2">
                            
                            <select class="w-1/3 mr-12 p-2">
                              <option>Select month</option>
                              <option v-for="day in days" :value="numberRange(day)" >{{numberRange(day)}}</option>
                             
                            </select> 
                          
                             <select class="w-1/3 p-2">
                              <option value="">Select Year</option>
                              <option v-for="year in years" :value="year">{{year}}</option>
                              </select>      
                          </div>  
                          <div class="flex my-2">                            
                            <input type="text" placeholder="Name on Card" class="my-2 w-3/4 p-2 ">
                          </div>
                          <div class="flex my-2">                            
                            <input type="text" placeholder="cvv" class="my-2 w-1/2 p-2">
                          </div>                            
                          <div class="flex my-2">                            
                            <a href="" class="text-center w-1/2   self-center no-underline bg-blue px-6 py-3 text-white rounded hover:shadow-md">Add card details</a>
                          </div>              
                          <p class="text-sm text-grey my-2">Your Card details would be securely saved for faster payments. Your CVV will not be stored.</p>
                     </div>
                     <div class="w-full flex bg-grey-lighter flex-col p-8 h-70" v-if="this.tab=='cod'">
                          <div class="flex flex-col">              
                          <p class="my-2">Amount payable at the time of delivery</p>
                          <!-- <button class="text-center w-1/2 no-underline bg-blue px-6 py-3 text-white rounded hover:shadow-md">Confirm</button> -->
                         <!--  <a href="#" class="text-center w-1/2 no-underline bg-blue px-6 py-3 text-white rounded hover:shadow-md" >Confirm</a> -->
                          </div>
                      </div>
                      <div class="w-full flex bg-grey-lighter flex-col p-8 h-70" v-if="this.tab=='paytm'">
                          <div class="flex flex-col">      
                          <p>Pay TM</p>  
                        
                          <!-- <button class="no-underline bg-blue px-6 py-4 text-white rounded hover:shadow-md" @click="store">Continue</button>     -->  
                          <nuxt-link :to="{ name: 'checkout-paytm', 
                          params: { payment_id: paymentid ,orderid:order_id} }" class="w-32 text-center mt-6 no-underline bg-blue px-4 py-2 text-white rounded hover:shadow-md">Continue</nuxt-link>
                          </div>
                          
                      </div>
            </div>
          </div>
        </form>
      <!--   <div class="w-1/4 flex p-8 flex-col">  
            <div class="flex flex-col">
            <h4 class="my-4 uppercase">Price details</h4>
            <div class="w-full flex justify-between my-2">
              <p>Order Total</p>
              <p>Rs.500</p>
            </div>
            <div class="w-full flex justify-between my-2">
              <p>Delivery Charges</p>
              <p class="text-shop-primary">Free</p>
            </div>
            <div class="font-semibold w-full flex justify-between my-2 border-t border-grey pt-4">
              <p>Total</p>
              <p>Rs.500</p>
            </div>
          </div>
          <div class="mt-8">            
                <nuxt-link :to="{ name: 'delivery-price_details' }" class="no-underline bg-blue px-6 py-4 text-white rounded hover:shadow-md">Continue</nuxt-link>
          </div>
        </div> -->
  </div>
</template>
<script>


  export default {
    props:['order_id'],
    layout: 'home',
    data() {
      return {
       
          /*  credit_debit:true,
            //debit:false,
            cod:false,
           paytm:false,
           // tab:'credit',*/
           days:12,
           year:new Date().getFullYear(),
           noofyear:12,
           tab:'cod',
            paymentMethods:[],
            form:{
              user_id:'',
              card_type:'',
              last_four:'',
              default:true,
              provider_id:''
            },
            data:[],
            rooturl:process.env.BASEURL,
            paymentid:''
      };
    },
     props: {
      order_id: {
        required: true,
        type: Number
      }
    },
    middleware: [
          'redirectIfGuest'
        ],
        computed : {
          years () {
            const year = new Date().getFullYear()
            return Array.from({length: 20}, (value, index) => year + index)
          }
        },
          methods:{
         numberRange(day) {
   
            return (day < 10 ? '0' : '') + day
        },
      
         settab(tabname,id)
          {
           ///alert(tabname)
         
          /*  if(tabname==="cash on delivery")
            {
              this.tab="cod";
            }
            else if(tabname==="Credit/Debit Card"){
               this.tab="credit_debit";  
            }
            else if(tabname==="paytm"){
              this.tab="paytm";  
              this.paymentid=id;
            }*/
           
             this.tab=tabname;
              this.paymentid=id;
            this.$nuxt.$emit('getpaymentid',id,tabname);

          },

          // async store(){
           
          //    let response = await this.$axios.$post('payment-methods/orderpaytm',this.form)
          //                                   .then((response) => {
                                          
          //                                     this.$nuxt.$emit('getpayment',true);        
          //                                     }).catch((error) => {
                                                
          //                                         console.log(error);
          //                                     });
          // },

          store(){
            
            this.form.user_id=this.$auth.user.id
            if(this.tab==="cod")
            {
               this.form.card_type='cashondelivery';
               this.form.last_four='test';
               this.form.default=true;
               this.form.provider_id=3;


            }
             else if(this.tab==="paytm")
            {
               this.form.card_type='paytm';
               this.form.last_four='1523';
               this.form.default=true;
               this.form.provider_id=4;


            }
      
             if(this.tab==="paytm"){
             this.paytmstore();
              }
              else{
               //this.$nuxt.$emit('getpayment',true);       
                       
              }
      
          
          },

          async getpaymentmethods(){
             //var userid=this.$auth.user.id
             let paymentmethod = await this.$axios.$get('paymentmethods')
             this.paymentMethods=paymentmethod;

             let paymentmethod_id=this.paymentMethods[this.tab]['id'];
             let paymentmethod_gateway_name=this.paymentMethods[this.tab]['gateway_name'];
             this.settab(this.gateway_name,this.paymentmethod_id);
           
                         
           }

        },

        created(){

          this.getpaymentmethods();


        
          }
        }
</script>