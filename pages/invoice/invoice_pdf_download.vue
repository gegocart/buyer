<template>
	<div>
		<Invoice :orderid="order_id" :userid="user_id" :sellerid="seller_id" 
     :orderitemid="order_item_id"></Invoice>
	</div>
</template>
<script>
	import Invoice from '@/components/invoice/Invoice_PDF'
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
      Invoice
    },
}
</script>