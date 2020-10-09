<template>
<div class="w-full container mx-auto my-10">
 <!--   <ul class="w-full list-reset my-4">
      <li class="text-red">Steps to follow</li>
      <li>1.Add Address Details</li>
      <li>2.Select Payment Method</li>
      <li>3.Place Order</li>
    </ul> -->
    <div class="w-full flex">   
       <!-- <div class="w-3/4 flex"> -->
       

          <div class="w-3/5 mr-16 bg-white p-10 shadow">
            <p class="text-red-dark mr-5" v-if="errors.shipping_method_id">
                    {{errors.shipping_method_id[0]}}
                  </p>

          <div class="w-3/5 mr-16 bg-white px-6 py-3 shadow">
                <ShippingAddress
                  v-model="form.address_id"
                 />
                 
          </div>
        </div>
        <div class="w-2/5">
        <div class="bg-white shadow p-4">
          <p class="text-center text-xl border-b border-grey pb-2  mb-4">Price Details</p>
              
              <div class="flex justify-between my-4">
                <!-- <p>Items</p> -->
                <!-- <p>{{product.quantity}}</p> -->
                <p>Price ({{products.length}} items)</p>
                <p>{{subtotal}}</p>
              </div>
              <div class="flex justify-between my-4">
                <p>Item Tax Amount ({{products.length}} items)</p>
                <p>{{itemtaxrate}}</p>
              </div>
               <!-- <div class="flex justify-between my-4">
                 <p>Item Tax</p>
                <p>{{taxrate}} % GST</p>
               </div> -->
                <div class="flex justify-between my-4">
                   <p>Shipping Tax Amount</p>
                <p>{{shippingtaxrate}} </p>
                </div>
                 <div class="flex justify-between my-4">
                   <p>Shipping</p>
                   <p>{{shippingtotal}}</p>
                 </div>
                  <div class="flex justify-between my-4">
                    <p class="font-semibold">Total Payable</p>
                    <p class="font-semibold text-shop-primary">{{total}}</p>
                  </div>
             <!--  <div class="flex justify-between border-b border-grey pb-2 my-4">
                <p>Sub Total</p>
                <p>{{subtotal}}</p>
              </div>
              <div class="flex justify-between my-2">
                <p class="font-semibold">Total</p>
                <p class="font-semibold text-custom">{{total}}</p>
              </div> -->
        </div>
        
          </div>
          <!-- </div> -->
         
</div>


 <div class="w-full container mx-auto bg-white p-6 shadow my-4"> 
  <p class="text-red-dark" v-if="errors.payment_method_id">
                    {{errors.payment_method_id[0]}}
                  </p>  
       <div class="w-full flex justify-center">
            <PaymentMethods
           :order_id="orderid" 
           v-model="form.payment_method_id"
           />

                <!--  <PaymentMethods
            :payment-methods="paymentMethods"
            v-model="form.payment_method_id"
           /> -->
          </div>
        <article class="message">
            <div class="message-body">
              <button
                class="button is-info is-fullwidth is-medium no-underline w-48 no-underline bg-shop-primary hover:bg-black p-3 text-white rounded-full font-semibold outline-none"
                :disabled="empty || submitting" v-show="btnshow"
                @click.prevent="order"
              >
                Place order
              </button>
            </div>
        </article>
</div>

 
</div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  import CartOverview from '@/components/cart/CartOverview'
  import ShippingAddress from '@/components/checkout/Address'
  import PaymentMethods from '@/components/checkout/Payment'
 

  export default {
    props:['addressid'],
    layout: 'home',
    data () {
      return {
        errors:[],
        submitting: false,
        addresses: [],
        shippingMethods: [],
        paymentMethods: [],
        refresh:false,
        ispayment:false,
        product:[],
         shippingprice:0,
        orderid:0,
        form: {
          address_id: null,
          payment_method_id: null,
          orderno:'',
       //   user_id:this.$auth.user.id,
          type:'credit',
          status:'pending',
          action:'COD',
          request:'',
          response:'',
          comment:'',
          entity_id:'',
          entity_name:'',
          balance_before:'',
          balance_after:'',
          
        },
        btnshow:true,
      }
    },

    middleware: [
      'redirectIfGuest'
    ],

    watch: {
      'form.address_id' (addressId) {
        this.getShippingMethodsForAddress(addressId).then(() => {
          this.setShipping(this.shippingMethods[0])
        })
      },

      shippingMethodId () {
        this.getCart()
      }
    },

    components: {
      CartOverview,
      ShippingAddress,
      PaymentMethods
    },

    computed: {
      ...mapGetters({
        total: 'cart/total',
        products: 'cart/products',
        empty: 'cart/empty',
        shipping: 'cart/shipping',
        subtotal: 'cart/subtotal',
         itemtaxrate:'cart/itemtaxrate',
        taxrate:'cart/taxrate',
        shippingtaxrate:'cart/shippingtaxrate',
        shippingtotal:'cart/shippingtotal'
      }),

      shippingMethodId: {
        get () {
          return this.shipping ? this.shipping.id : ''
        },
        set (shippingMethodId) {
          this.setShipping(
            this.shippingMethods.find(s => s.id === shippingMethodId)
          )
        }
      }
    },

    methods: {
      ...mapActions({
        setShipping: 'cart/setShipping',
        getCart: 'cart/getCart',
        flash: 'alert/flash'
      }),

      // async order () {
      //  this.submitting = true
      //    let response = await this.$axios.$get('getorderno')
      //  this.form.orderno=response;
      //   try {
      //     await this.$axios.$post('orders', {
      //       ...this.form,
      //       shipping_method_id: this.shippingMethodId
      //     })

      //     await this.getCart()

      //     this.$router.replace({
      //       name: 'orders'
      //     })
      //   } catch (e) {
      //     this.flash(e.response.data.message)

      //     this.getCart()
      //   }

      //   this.submitting = false
      // },
      async order () {
        if(this.form.payment_method_id==2){
          this.form.status="pending";
          this.form.action="cod";
        }
         this.submitting = true
         let response = await this.$axios.$get('getorderno')
       this.form.orderno=response.orderno;
        try {
         
         let result= await this.$axios.$post('orders', {
            ...this.form,
            shipping_method_id: this.shippingMethodId
          })

          await this.getCart()
           if(this.form.action=="paytm"){
             this.orderid=result.data.id;
           }
           if(this.form.action!=="paytm"){
             // console.log(result.data.id);
              this.$router.replace({
                name: 'orders'
              })
           }
        } catch (e) {
        
          //console.log(e.response.data.errors)
          this.errors=e.response.data.errors;
          //alert(e.response.data.errors)
          //this.flash(e.response.data.message)
          // console.log(e.response.data.message)
          this.getCart()
        }

        this.submitting = false
      },

      async getShippingMethodsForAddress (addressId) {
        let response = await this.$axios.$get(`addresses/${addressId}/shipping`)

        this.shippingMethods = response.data

        return response
      },

      
      async getaddresses(){
        let addresses = await this.$axios.$get('addresses')
        //let addresses = await this.$axios.$get('addresses')
         this.addresses=addresses.data;
            if(this.addresses.length>0){
         this.form.address_id=this.addresses[0].id;
         this.getShippingMethodsForAddress(this.form.address_id).then(() => {
            this.setShipping(this.shippingMethods[0]);
            this.shippingprice=this.shippingMethods[0].price;
       });
       }
     },

     async getpaymentmethods(){
       //var userid=this.$auth.user.id
       let paymentmethod = await this.$axios.$get('paymentmethods')
       this.paymentMethods=paymentmethod.data;
        // this.form.payment_method_id=this.paymentMethods[0].id;
       
     },

     async getorderno(){
       let response = await this.$axios.$get('getorderno')
       this.form.orderno=response.orderno;
     },
     setShippingAddress(address_id){
              this.form.address_id=address_id;
         this.getShippingMethodsForAddress(address_id).then(() => {
            this.setShipping(this.shippingMethods[0]);
            this.shippingprice=this.shippingMethods[0].price;
       });
       
     },
    },
    created(){
      this.getpaymentmethods();
      this.getaddresses();
      this.product=this.products;
      this.$nuxt.$on('getaddresses', data => {
          this.refresh=data;
         
           if(this.refresh===true)
           {
              this.getaddresses();
           }
        
        });

      this.$nuxt.$on('getpaymentid', (data,name) => {
   
         this.form.payment_method_id=data;
          this.btnshow=true;
          if(name=="paytm"){
              this.form.status="pending";
               this.form.action="paytm";
              this.order();
               this.btnshow=false;
            }
            else if(name=="cod"){
               this.form.status="pending";
               this.form.action="COD";

            }
          
          });
     this.$nuxt.$on('address_id', data => {
         
              this.setShippingAddress(data);
   
        
        });

      
    }


     
    // async asyncData ({ app }) {
    //   debugger;
    //   let addresses = await app.$axios.$get('addresses')
    //   debugger;
    //   let paymentMethods = await app.$axios.$get('payment-methods')

    //   return {
    //     addresses: addresses.data,
    //     paymentMethods: paymentMethods.data
    //   }
    // }
  }
</script>

