<template>
	<div>
		<TaxInvoice :orderid="order_id" :userid="user_id" :sellerid="seller_id" 
     :orderitemid="order_item_id"></TaxInvoice>
	</div>
</template>
<script>
	import TaxInvoice from '@/components/invoice/TaxInvoice'
	export default {
    layout: 'blank',
    data() {
      return {
         order_id:this.$route.params.orderid,
         order_item_id:this.$route.params.orderproductid,
         user_id:this.$auth.user.id,
        // user_id:this.$route.params.userid,
         seller_id:this.$route.params.sellerid
      }
  },
  components: {
      TaxInvoice
    },
    created(){
      // console.log(this.$route.params.orderid)
      // console.log(this.$route.params.userid)
    }
}
</script>