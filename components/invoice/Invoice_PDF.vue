<template>
	<div>
 
    <div v-for="invoicedetail in invoicedetails" style="width:100%;display:grid" class="invoice p-3 mb-3" id="mydiv">     
        <div style="display:inline-flex;margin-bottom:.75rem">
            <div style="width:10%;">
                <img src="/gegocart-logo.png" class="h-16" style="max-width:80px;height:27px">
            </div>
            <div style="width:22%;text-align: right">
                 <p style="font-size:10px;"><span style="font-weight: 700">Tax Invoice/Bill of Supply/Cash Memo</span> <br/>(Orginial for Recipient)</p>
            </div>
        </div>
        <div style="width:32%;display:flex;justify-content:space-between;;margin-bottom:.75rem">
        <div>
                <p style="font-size:10px;">Sold By:{{invoicedetail.stores.sellername}}</p>
        </div>
        <div style="text-align: right;">
             <p style="font-size:10px;">Billing Address:<br></p>
               <p style="font-size:10px;">{{invoicedetail.address.firstname}} {{invoicedetail.address.lastname}}<br></p>
               <p style="font-size:10px;">{{invoicedetail.address.address_1}},<br>
               {{invoicedetail.address.address_2}}</p>
               <p style="font-size:10px;">{{invoicedetail.address.city}}<br></p>
               <p style="font-size:10px;">{{invoicedetail.address.state}}-{{invoicedetail.address.postal_code}}<br></p>
               <p style="font-size:10px;">{{invoicedetail.address.country.code}}<br></p>
        </div>
        </div>
        <div style="width:32%;display:flex;justify-content:flex-end;margin-bottom:.75rem">
        <div style="text-align: right;">
             <p style="font-size:10px;">Shipping Address:<br></p>
               <p style="font-size:10px;">{{invoicedetail.address.firstname}} {{invoicedetail.address.lastname}}<br></p>
               <p style="font-size:10px;">{{invoicedetail.address.address_1}},<br>
               {{invoicedetail.address.address_2}}<br></p>
               <p style="font-size:10px;">{{invoicedetail.address.city}}<br></p>
               <p style="font-size:10px;">{{invoicedetail.address.state}}-{{invoicedetail.address.postal_code}}<br></p>
               <p style="font-size:10px;">{{invoicedetail.address.country.code}}<br></p>
        </div>
        </div>
           <div style="width:32%;display:flex;justify-content:space-between;margin-bottom:.75rem">
            <div>
                    <p style="font-size:10px;">Order No.: {{invoicedetail.orderno}}<br></p>
                    <p style="font-size:10px;">Order Date: {{invoicedetail.orderdate}}<br></p>
                     <p v-if="invoicedetail.payment_method.card_type=='PayTM'">
                  <div v-if="invoicedetail.transactions.length>0">
                   <p style="font-size:10px;text-align: right;" v-if="invoicedetail.payment_method.card_type=='PayTM'" > PAYTM MAILID : 
                   {{invoicedetail.transactions[0].request}}</p>
                  </div>
                 </p>
            </div>
            <div>
                 <p style="font-size:10px;text-align: right;" >
                 Invoice No.: {{invoicedetail.invoice[0].invoiceno}}</p>
                <p style="font-size:10px;text-align: right;" >
                 Invoice Date: {{invoicedetail.invoice[0].invoicedate}}</p>
            </div>
        </div>
        <div style="width:32%;display:flex;justify-content:space-between;background-color:#eeeeee;padding:10px;">
            <div>
                    <p style="font-size:10px;font-weight:700;">Payment Method</p>
            </div>
            <div>
                 <p style="font-size:10px;font-weight:700;text-align: right;">Amount {{invoicedetail.currency}}</p>
            </div>
        </div>
         <div style="width:32%;display:flex;justify-content:space-between;padding:5px;margin-bottom:.75rem">
            <div>
                    <p style="font-size:10px;">{{invoicedetail.payment_method.card_type}}</p>
            </div>
            <div>
                 <p style="font-size:10px;text-align: right;">{{invoicedetail.overalltotal}}</p>
            </div>
        </div>
        <div style="width:32%;display:flex;justify-content:space-between;background-color:#eeeeee;padding:10px;">
          <!-- <div style="width:4%;">
                    <p style="font-size:10px;font-weight:700;">S.No</p>
            </div> -->
            <div style="width:15%;">
                    <p style="font-size:6px;font-weight:700;">Description</p>
            </div>
            <div style="width:8%;">
                 <p style="font-size:6px;font-weight:700;text-align: right;">Price ({{invoicedetail.currency}})</p>
            </div>
             <div style="width:8%;">
                    <p style="font-size:6px;font-weight:700;text-align: right;">Qty</p>
            </div>
            <div style="width:8%;">
                 <p style="font-size:6px;font-weight:700;text-align: right;">Net Amount ({{invoicedetail.currency}})</p>
            </div>
             <div style="width:8%;">
                 <p style="font-size:6px;font-weight:700;text-align: right;">Shipping ({{invoicedetail.currency}})</p>
            </div>
             <div style="width:8%;">
                 <p style="font-size:6px;font-weight:700;text-align: right;">Tax Rate & Type</p>
            </div>
             <div style="width:8%;">
                 <p style="font-size:6px;font-weight:700;text-align: right;">Tax Amount ({{invoicedetail.currency}})</p>
            </div>
            <div style="width:8%;">
                 <p style="font-size:6px;font-weight:700;text-align: right;">Total Amount ({{invoicedetail.currency}})</p>
            </div>
        </div>
       
         <div style="width:32%;display:flex;justify-content:space-between;padding:5px;margin-bottom:.5rem"  
         v-for="productlist in invoicedetail.product_detail">


               <!--  <div style="width:8%;">
                    <p style="font-size:10px;">{{index+ 1}}</p>
            </div> -->
           <div style="width:15%;">
                    <p style="font-size:7px;">{{productlist.products.product.name}}</p>
            </div>
            <div style="width:8%;">
                 <p style="font-size:7px;text-align: right;">
                 {{(productlist.products.variation.price/100).toFixed(2)}}</p>
            </div>
            <div style="width:8%;">
                    <p style="font-size:7px;text-align: right;">
                    {{productlist.products.variation.quantity}}</p>
            </div> 
            <div style="width:8%;">
                 <p style="font-size:7px;text-align: right;">{{productlist.subtotal}}</p>
            </div>
            <div style="width:8%;">
                 <p style="font-size:7px;text-align: right;">
                 {{(productlist.shippingprice).toFixed(2)}}</p>
            </div>
            <div style="width:8%;">
                 <p style="font-size:7px;text-align: right;">
                 {{productlist.products.tax_type.tax_rate}}% GST</p>
            </div>
            <div style="width:8%;">
                 <p style="font-size:7px;text-align: right;">{{Number(productlist.shippingtaxprice)+Number(productlist.itemtax)}}</p>
            </div>
            <div style="width:8%;">
                 <p style="font-size:7px;text-align: right;">{{productlist.grandtotal}}</p>
            </div>
        </div>
          

         <div style="width:32%;display:flex;justify-content:space-between;margin-bottom:.5rem;padding:5px;">
            <div>
                <p style="font-size:7px;">Total:</p>
                <p style="font-size:7px;">{{invoicedetail.overalltotal}}</p>
            </div>
            <div >
                  <p style="font-size:7px;">Amount in Words:</p>
                  <p style="font-size:7px;">{{invoicedetail.numberinwords}}</p>
            </div>
        </div>
      </div>


		<div class="invoice p-3 mb-3" id="mydiv">
          
          <div class="div-dont-want-to-display">
</div>
          <!-- AND MANY MORE DIV'S -->
          
          <!--BUTTON TO DOWNLOAD PDF-->
            <a  @click.prevent="createPDF()" class="btn btn-primary float-right pointer">
              <i class="fa fa-download"></i> Generate PDF </a>
          </div>
         </div>


</template>
<script>
	import html2pdf from 'html2pdf.js'
//var loadingTask = pdf.createLoadingTask('https://cdn.mozilla.net/pdfjs/tracemonkey.pdf');

	export default {
      props:['orderid','userid','sellerid','orderitemid'],
    data() {
      return {
      	 invoicedetails:[],
         test:'',
         form:{
          pdfstring:'',
         invoiceid:0
         }
         
      	 //orderid:1
      }
  },

   components: {
    html2pdf
  },
  computed:{
    totaltaxamount(){
        let total=0;
        return this.invoicedetails.reduce(function(total,tax){
          total =Number(tax.producttaxamount) + Number(tax.shippingpricetaxamt)
          return total.toFixed(2);
        },0)
       }
  },
middleware: [
     'redirectIfGuest'
    ],
	  methods:{

       // async storepdf()
       //  {
       //     this.form.pdfstring=this.test;
       //     debugger
       //    let response = await this.$axios.$post('invoice/savepdfstring',this.form).then((response) => {
       //                              debugger
       //                           }).catch(function (error) {
       //                               debugger
       //                            });
           
       //  },
        // createPDF(){
          
        //    this.storepdf();
        // },
      
	  	 createPDF() {
          var element = document.getElementById('mydiv');

          var opt = {
            margin: 0,
            filename: 'invoice.pdf',
            image: {type: 'jpeg',quality: 0.98},
            html2canvas: {scale: 2},
            jsPDF: {
              unit: 'mm',
              format: [280, 350],
              orientation: 'portrait'
            }
          };

        //   html2pdf().from(element).toPdf().output('datauristring').then(function (pdfAsString) {
        //     // The PDF has been converted to a Data URI string and passed to this function.
        //     // Use pdfAsString however you like (send as email, etc)! For instance:
        //     console.log(pdfAsString)
        //     debugger
        //     this.test=pdfAsString;
            

        // });
         
        
           
          html2pdf().set(opt).from(element).save();
	  },

     

	  async getInvoiceDetails()
              {
                let response = await this.$axios.$get('invoice/getinvoicedetail/'+this.orderid 
                  + '/' + this.userid + '/' + this.orderitemid + '/' + this.sellerid);
              
                 this.invoicedetails=response.data;
                 // for (var i =0;i<this.invoicedetails.length;i++) {
                 //    this.form.invoiceid=this.invoicedetails[i].invoice[i].id;
                 // }
                 //  this.createPDFtest();
                 
              },
	},

	created(){
		this.getInvoiceDetails();
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