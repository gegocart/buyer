<template>
  <div class="container mx-auto">
<h4 class="my-2 font-semibold text-xl">Order details</h4>
<div>
 <p class="my-2 font-semibold" >{{ order.orderno }} - {{ order.created_at }}</p>
 <p class="my-2 font-semibold">Order Status: {{order.status}} </p>
<div class="w-full" v-for="products in order.productstatus">

   <div v-for="productdetail in products">
    <div  class="bg-white shadow p-4" v-for="(list,index) in productdetail">
      <div>
 
      <p class="my-2 font-semibold">Product Status:{{list.status}} {{order.created_at}}</p>
      </div>
     
  
    <div >
    
    <div class="w-full flex" >  
     
      <div class="w-3/5 flex">
       <div >
        <img v-bind:src="rooturl +
         list.productdetail.productimage[0].thumbnailimage" class="h-16 w-16 mr-2">
         </div>
    <div class="w-1/2">
      <p class="font-semibold text-sm text-shop-primary">{{list.productdetail.product.name}}</p>
      <p class="text-sm font-semibold text-grey my-1">Sold by : {{list.productdetail.seller.name}}</p>
      <p class="text-sm" v-if="list.productdetail.variation.price">{{order.currency}} {{(list.productdetail.variation.price/100 * list.productdetail.variation.quantity).toFixed(2) }}</p>
      <p class="mt-4"> <nuxt-link :to="{name: 'products-slug',params:{slug:list.productdetail.product.slug}}"  
        class="no-underline bg-shop-primary text-white px-4 py-2 text-sm rounded-full hover:bg-black">Buy again</nuxt-link></p>
    </div>
  </div>
    <!-- <p class=""><a href="#" class="bg-gray-400 px-4 py-2">Write a product review</a></p> -->
    <div class="w-2/5 flex justify-end">
      <div class="w-3/4 flex flex-col">
       <a class="mb-1 mx-8 no-underline text-black text-center bg-grey-lighter hover:bg-grey p-2">
              Track Package
      </a>
    
      <nuxt-link :to="{ name: 'rating-productid', params: { productid : list.productdetail.product.id } }" class="mb-1 mx-8 no-underline text-black text-center bg-grey-light hover:bg-grey p-2">
              Write a product review
      </nuxt-link>

    <div v-if="(order.status=='completed')&&(index==0)"  class="mb-1 mx-8 text-center bg-grey-lighter hover:bg-grey p-2">

       <nuxt-link :to="{ name: 'invoice-tax', params: { orderid : order.id,sellerid:list.productdetail.seller.id,orderproductid:list.id} }" class="no-underline text-black text-center">
              Tax Invoice
      </nuxt-link>
    </div>
    <div v-if="(order.status=='completed')&&(index==0)" class="mx-8 text-center p-2 bg-grey-light hover:bg-grey">
      
      <nuxt-link :to="{ name: 'invoice-invoice_pdf_download', params: { orderid : order.id,sellerid:list.productdetail.seller.id,orderproductid:list.id} }" class="no-underline text-black text-center">
               Invoice 
      </nuxt-link>
     <!--  <a @click="pdfcreate(order.id,list.productdetail.seller.id,list.id)">button</a> -->
    
      </div>
     <!-- <div v-if="list.status=='completed'" class="mx-8 text-center p-2 bg-grey-light hover:bg-grey">
      <a href="#" @click.prevent="createPDF(order.id)"class="no-underline text-black">
              <i class="fa fa-download"></i> Invoice </a>
      </div> -->
    </div>
  </div>
 
</div>
</div>
</div>
  </div>


  </div>

  <div class="flex my-4">
    <div class="w-1/3 bg-white shadow p-4">
    <p class="my-2 font-semibold">Shipping Address</p>
      <p class="my-1">{{order.address.address_1}},{{order.address.address_2}}</p>
      <p class="my-1">{{order.address.city}}</p>
      <p class="my-1">{{order.address.state}}- {{order.address.postal_code}}</p>
      <p class="my-1">{{order.address.country.name}}</p>
    </div>
    <div class="w-1/3 bg-white shadow p-4 mx-4">
      <p class="my-2 font-semibold">Payment method</p>
      <p class="my-1">{{order.paymentMethod.card_type}}</p>
    </div>
    <div class="w-1/3 bg-white shadow p-4">
      <p class="my-2 font-semibold my-1">Order Summary</p>
     <div class="flex justify-between my-1"><p>Items(s) subtotal</p><p>{{order.subtotal}}</p></div>
      <div class="flex justify-between my-1"><p>Shipping</p><p>{{order.currency}}{{order.shippingtotal}}</p></div>
       <!-- <div class="flex justify-between"><p>Tax</p><p>{{order.taxrate}} % GST</p></div> -->
       <!-- <div class="flex justify-between"><p>Item Tax</p><p>{{order.currency}} {{order.taxamount}}</p></div>
      <div class="flex justify-between"><p>Shipping Tax Amount</p><p>
      {{order.currency}}  {{order.shippingtaxamount}}</p></div> -->
     <div class="flex justify-between my-1"><p>Total Tax Amount</p><p><!-- {{order.currency}} --> {{order.taxamount}}</p></div>
      <div class="flex justify-between border-t border-gray-300 py-2 my-2"><p class="font-semibold">Grand Total</p><p class="font-semibold">{{order.currency}}  {{order.overalltotal}}</p></div>
    </div>
  </div>
</div>

</div>
</template>

<script>
  import OrderStatusPaymentFailed from '@/components/orders/statuses/OrderStatusPaymentFailed'
  import OrderStatusPending from '@/components/orders/statuses/OrderStatusPending'
  import OrderStatusProcessing from '@/components/orders/statuses/OrderStatusProcessing'
  import OrderStatusCompleted from '@/components/orders/statuses/OrderStatusCompleted'
  //import html2pdf from 'html2pdf.js'
//import VueHtml2pdf from 'vue-html2pdf'
 

  export default {
    components: {
      'payment_failed': OrderStatusPaymentFailed,
      'pending': OrderStatusPending,
      'processing': OrderStatusProcessing,
      'completed': OrderStatusCompleted,
      // html2pdf,
       //VueHtml2pdf
    },

    data () {
      return {
        maxProducts: 2,
        orderitemid:'',
        sellerid:'',
        orderid:'',
        userid:'',
        rooturl:process.env.SITEURL,
        statusClasses: {
          'is-success': this.order.status === 'complete',
          'is-info': this.order.status === 'processing' || this.order.status === 'pending',
          'is-danger': this.order.status === 'payment_failed',
        },
        invoicedetails:[],
         
      }
    },

    props: {
      order: {
        required: true,
        type: Object
      }
    },
     middleware: [
     'redirectIfGuest'
    ],

    computed: {
      // products () {
      //   return this.order.products.slice(0, this.maxProducts)
      // },

      // moreProducts () {
      //   return this.order.products.length - this.maxProducts
      // },
       totaltaxamount(){
        let total=0;
        total=this.order.shippingtaxamount + this.order.taxamount;
        return total.toFixed(2);
      },
      productprice(productdetail){
         //return this.order.reduce(function(total,item){
              return Number(productdetail.price) * Number(productdetail.quantity)
         //},0);
         
      },

    },
     methods:{
      

         
               async getInvoiceDetails()
              {
                var userid=this.$auth.user.id;
                let response = await this.$axios.$get('invoice/getinvoicedetail/'
                  +this.orderid 
                  + '/' + userid + '/' + this.orderitemid + '/' + this.sellerid);
              
                 this.invoicedetails=response.data;
                               console.log(this.invoicedetails);
              },
     },
     created(){
        //this.getInvoiceDetails()
     }
  }
</script>
<style>
.invoice-box {
  max-width: 800px;
  margin: auto;
  padding: 30px;
  border: 1px solid #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 24px;
  font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
  color: #555;
}

.invoice-box table {
  width: 100%;
  line-height: inherit;
  text-align: left;
}

.invoice-box table td {
  padding: 5px;
  vertical-align: top;
}

.invoice-box table tr td:nth-child(n + 2) {
  text-align: right;
}

.invoice-box table tr.top table td {
  padding-bottom: 20px;
}

.invoice-box table tr.top table td.title {
  font-size: 45px;
  line-height: 45px;
  color: #333;
}

.invoice-box table tr.information table td {
  padding-bottom: 40px;
}

.invoice-box table tr.heading td {
  background: #eee;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}

.invoice-box table tr.details td {
  padding-bottom: 20px;
}

.invoice-box table tr.item td {
  border-bottom: 1px solid #eee;
}

.invoice-box table tr.item.last td {
  border-bottom: none;
}

.invoice-box table tr.item input {
  padding-left: 5px;
}

.invoice-box table tr.item td:first-child input {
  margin-left: -5px;
  width: 100%;
}

.invoice-box table tr.total td:nth-child(2) {
  border-top: 2px solid #eee;
  font-weight: bold;
}

.invoice-box input[type="number"] {
  width: 60px;
}

@media only screen and (max-width: 600px) {
  .invoice-box table tr.top table td {
    width: 100%;
    display: block;
    text-align: center;
  }

  .invoice-box table tr.information table td {
    width: 100%;
    display: block;
    text-align: center;
  }
}

/** RTL **/
.rtl {
  direction: rtl;
  font-family: Tahoma, "Helvetica Neue", "Helvetica", Helvetica, Arial,
    sans-serif;
}

.rtl table {
  text-align: right;
}

.rtl table tr td:nth-child(2) {
  text-align: left;
}

  
</style>
