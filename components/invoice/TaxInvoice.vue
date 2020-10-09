<template>
	<div class="container mx-auto flex justify-center">
		<div class="w-full lg:w-3/4 my-4" v-for="tax in taxdetails">
			<div class="mb-4 bg-grey-light p-4">
			<h2 class="my-2 text-lg lg:text-2xl">Tax invoice/Bill of supply/Cash memo</h2>
			<div class="my-2 flex flex-col lg:flex-row justify-between">
				<p class="my-2 lg:my-0">Number: {{tax.invoice[0].invoiceno}}  <span>Date: {{tax.invoice[0].invoicedate}}</span></p>
				<p v-if="tax.payment_method.card_type=='PayTM'">
                    <p class="my-2 lg:my-0" v-if="tax.payment_method.card_type=='PayTM'">PaytmMail Order ID: {{tax.transactions[0].request}}</p>
                 </p>
				
			</div>
			</div>
			<div class="w-full flex justify-center">
				<div class="w-full lg:w-5/6">
					<div class="flex flex-col lg:flex-row my-2">
						<div class="w-full lg:w-1/3">
							<h4 class="my-1">Sold by: {{tax.stores.sellername}}</h4>
							<p class="my-1">{{tax.stores.selleraddress}}</p>
							<!-- <p class="my-1">107, Ground floor,</p>
							<p class="my-1">Sp road,</p>
							<p class="my-1">Bangalore, Karnataka</p> -->
						</div>
						<div class="w-full lg:w-1/3">
							<h4 class="my-1">Shipping Address: {{tax.address.firstname}} {{tax.address.lastname}}</h4>
							<p class="my-1">{{tax.address.address_1}},{{tax.address.address_2}}</p>
							<!-- <p class="my-1">Ponmeni,</p> -->
							<p class="my-1">{{tax.address.city}}</p>
							<p class="my-1">{{tax.address.state}}-{{tax.address.postal_code}}</p>
						</div>
						<div class="w-full lg:w-1/3">
							<h4 class="my-1">Billing Address: {{tax.address.firstname}} {{tax.address.lastname}}</h4>
							<p class="my-1">{{tax.address.address_1}},{{tax.address.address_2}}</p>
							<!-- <p class="my-1">Ponmeni,</p> -->
							<p class="my-1">{{tax.address.city}}</p>
							<p class="my-1">{{tax.address.state}}-{{tax.address.postal_code}}</p>
						</div>
					</div>
					<div class="w-full border-b border-grey-light" >
						
						<div class="flex bg-grey-light p-4">
							<p class="w-1/5 font-semibold">Item</p>
							<p class="w-1/6 font-semibold">Qty</p>
							<p class="w-1/6 font-semibold">Price ({{tax.currency}})<!-- (INR) --></p>
							<p class="w-1/6 font-semibold">Tax rate & Type</p>
							<p class="w-1/6 font-semibold">Tax Amount ({{tax.currency}})</p>
							<p class="w-1/6 font-semibold">Total Amount ({{tax.currency}})</p>
						</div>
					<div v-for="product_list in tax.product_detail">
						<div >
						<div class="flex p-4">
							<div class="w-1/5">
								<p class="my-1 text-base font-semibold">{{product_list.products.product.name}}</p>
								<!-- <p class="my-1 text-base font-semibold">HSN Code : 852</p>
								<p class="my-1 text-base font-semibold">IMEI/Serial no.#M<br>4598752</p> -->
							</div>
							<p class="w-1/6">{{product_list.products.variation.quantity}}</p>
							<p class="w-1/6">{{product_list.products.variation.price/100}}</p>
							
						<p class="w-1/6">{{product_list.products.tax_type.tax_rate}}% GST</p>
						<!-- <p>{{}}</p> -->
							<p class="w-1/6">{{product_list.itemtax}}</p>
							<p class="w-1/6 text-right font-semibold">{{product_list.itemtotal}}</p>
						</div>
						<div class="flex p-4 border-t border-grey-light">
							<p class="w-1/5 font-semibold">Shipping Charges</p>
							<p class="w-1/6"></p>
							<p class="w-1/6">{{product_list.shippingprice}}</p>
							<p class="w-1/6">{{product_list.shippingtaxrate}}% GST</p>
							<p class="w-1/6">{{product_list.shippingtaxprice}}</p>
							<p class="w-1/6 text-right font-semibold">{{product_list.shippingtaxtotal}}</p>
						</div>
						
						
							
						</div>
						
					</div>
					<div class="flex p-4 border-t border-grey-light">
							<p class="w-1/5 font-semibold">Grand Total</p>
							<p class="w-1/6"></p>
							<p class="w-1/6"></p>
							<p class="w-1/6"></p>
							<p class="w-1/6"></p>
							<p class="w-1/6 text-right font-semibold">{{tax.overalltotal}}</p>
							<!-- <p class="w-1/6 text-right font-semibold">{{tax.overalltotal}}</p> -->
						</div>
					</div>
					<div class="flex justify-end p-4">
							<p>Total Amount in words: <span class="font-semibold uppercase ">{{tax.numberinwords}}</span></p>
						</div>
					<div class="flex justify-between">
						<div class="w-1/2 py-4">
							<p class="font-semibold my-2">Declaration</p>
							<p>We declare that this invoice shows the actual price of the goods described above and that all particulars are true and correct. The goods sold are intended for end user consumption and not for resale.</p>
						</div>
						<div class="w-1/4 py-4">
							<p class="self-center">* This is a computer generated invoice and does not require a physical signature</p>
						</div>
					</div>
					<div class="border-b border-grey-light py-4">
						<p class="font-semibold my-2">Customer Acknowledgement:</p>
						<p>I {{tax.address.firstname }} {{tax.address.lastname}} confirm that the said products are being purchased for my internal/person consumption and not for re-sale.</p>
					</div>
			  </div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
     props:['orderid','userid','sellerid','orderitemid'],
    data() {
      return {
      	taxdetails:[],
      	orderdetails:[],

      }
  },
   middleware: [
     'redirectIfGuest'
    ],
    computed:{
       
       totalamount(){
       	let total=0;
       	 return this.taxdetails.reduce(function(total, tax){
       	 	total=Number(tax.pricevalue) + Number(tax.producttaxamount);
       	 	return total.toFixed(2);
       	 },0);
          
       },
       shippingtotalamount(){
       	let total=0;
       	 return this.taxdetails.reduce(function(total, tax){
       	 	total=Number(tax.shippingprice) + Number(tax.shippingpricetaxamt);
       	 	return total.toFixed(2);
       	 },0);
       },
       totalquantity(){
       	let total=0;
       	return this.taxdetails.reduce(function(total,tax){
       		total =Number(tax.quantity);
       		return total;
       	},0)
       },
       totalprice_shippingprice(){
       	let total=0;
       	return this.taxdetails.reduce(function(total,tax){
       		total =Number(tax.pricevalue) + Number(tax.shippingprice)
       		return total.toFixed(2);
       	},0)
       },
       totaltaxamount(){
       	let total=0;
       	return this.taxdetails.reduce(function(total,tax){
       		total =Number(tax.producttaxamount) + Number(tax.shippingpricetaxamt)
       		return total.toFixed(2);
       	},0)
       }
    },
  methods:{

     async getInvoicedetails() {
     	 let response = await this.$axios.$get('invoice/getinvoicedetail/'+ this.orderid 
        	+ '/' + this.userid + '/' + this.orderitemid + '/' + this.sellerid);
        
          this.taxdetails = response.data
        },
      async getOrderdetail() {
        let response = await this.$axios.$get('orderdetailview/'+ this.orderid + '/' + this.userid);
        this.orderdetails = response.data;
       },
        priceval(variation){
           let price =(variation.price/100).toFixed(2) * variation.quantity;
           return price
        },
  },
   created(){
      this.getInvoicedetails();
     // this.getOrderdetail();
    }
}
</script>