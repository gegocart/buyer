<template>
  <div class="">
    <div class="" v-show="paymethod"><!--  w-3/4 p-8 border-r border-grey -->
      <!-- <form action="#" @submit.prevent="store" enctype="multipart/form-data"> -->
        <h4 class="my-4 uppercase">Payment method</h4>
          
                       <div class="w-full flex bg-grey-lighter flex-col p-8 h-70">
                          <div class="flex flex-col">      
                          <p>Pay TM</p>        
                          <a href="#" class="my-4 w-1/2 text-center no-underline bg-shop-primary hover:bg-black text-white p-3 rounded-full cursor-pointer" @click="store()"
                          >Pay To PayTM</a>
                      
                          </div>
                      </div>
                    <!-- </form> -->
        </div>

            <template>
               <div v-show="paytmdata">
                  <title>Merchant Checkout Page</title>
                  <center><h1>Please do not refresh this page...</h1></center>
                      <div >
                         
                          <form method='post' :action="data.url"  id="paytmsubmit"  name='paytm_form' >
                              <!-- <div  v-for="(keyvalue,index) in data"> -->
                                  <!-- <input type="hidden" name="REQUEST_TYPE"  value="DEFAULT" /> -->
                   
                    <input type="hidden" name="MID"  :value="data.mid"  />
                    <input type="hidden" name="ORDER_ID"  :value="data.orderid" />
                    <input type="hidden" name="CUST_ID"  :value="data.custid" />
                    <input type="hidden" name="INDUSTRY_TYPE_ID"  :value="data.industrytype" />
                    <input type="hidden" name="CHANNEL_ID"  :value="data.channelid" />
                    <input type="hidden" name="TXN_AMOUNT"  :value="data.amt" />
                    <input type="hidden" name="WEBSITE"  :value="data.website" />
                    <input type="hidden" name="CALLBACK_URL"  :value="data.callbackurl" />
                    <input type="hidden" name="MOBILE_NO"  :value="data.mobileno" />
                    <input type="hidden" name="EMAIL"  :value="data.email" />
                    <input type="hidden" name="CHECKSUMHASH" :value="data.checksum" />
                   <!--  <input type="hidden" name="PAYMENT_MODE_ONLY" value="Yes" /> -->
                    <input type="submit" name="submit" class="my-4 w-1/2 text-center no-underline bg-organic-primary hover:bg-black text-white p-3 center rounded-full cursor-pointer" @click="submit()"   value="Submit">
                   
                               
                          </form>
                      </div>
               </div>
            </template>
  </div>
</template>

<script>
   import { mapGetters, mapActions } from 'vuex'
  export default {
    layout: 'blank',

    data(){
      return{
        user:[],
        paymentMethods:[],
            testresponse:'',
            cod:false,
            paytmdata:false,
            paymethod:true,
             data:[],
             displayaddress:[],
             rooturl:process.env.BASEURL,
              rereshdiv:false,
              paymentid:this.$route.params.payment_id,
              payorderid:this.$route.params.orderid,
            paytmdetails:{
              mid:process.env.PAYTM_MERCHANT_ID,
              website:process.env.PAYTM_MERCHANT_WEBSITE,
              industrytype:process.env.PAYTM_INDUSTRY_TYPE,
              channelid:process.env.PAYTM_CHANNEL,
              orderid:0,
              custid:0,
              mobileno:'',
              email:'',
              txnamount:0,
              callbackurl:'',
              merchantkey:process.env.PAYTM_MERCHANT_KEY,
              request:'',
              response:'',
              apiurl:'https://securegw-stage.paytm.in/order/process'
            },
         }
       },
        middleware: [
          'redirectIfGuest'
        ],
        methods:{
             async store(){
                  this.paytmdetails.custid=this.$auth.user.id;
                  this.paytmdetails.callbackurl=this.rooturl + '/paymentmethods/payment/status';
                let response = await this.$axios.$post('paymentmethods/paytmparams',this.paytmdetails)
                                            .then((response) => {
                                            this.data=response;

                                            if(this.data.url!="")      {
                                              this.paytmdata=true;
                                              this.paymethod=false;
                                            }
                                              }).catch((error) => {
                                                
                                                  console.log(error);
                                              });
            },

              async submit() {
                     document.paytm_form.submit();       
                 //document.forms["paytmsubmit"].submit();
             },

             async getorderno(){
              
               let response = await this.$axios.$get('getpaytmorders/'+this.paymentid +'/' + this.payorderid)
              
               for (var i =0;i<response.data.length;i++) {
                 this.paytmdetails.orderid=response.data[i].id;
                 this.paytmdetails.txnamount=response.data[i].total;
               }
               
             },
             async getaddresses(){
                let addresses = await this.$axios.$get('addresses/'+ this.$auth.user.id)
                 this.addresses=addresses.data;
                 this.paytmdetails.mobileno=this.addresses[0].mobileno;
                 this.paytmdetails.email=this.addresses[0].email;
                 
             },
      },
       created(){
           this.getorderno();
           this.getaddresses();
         //document.forms["paytm_form"].submit();
       }

}
</script>