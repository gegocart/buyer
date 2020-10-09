<template>
	<div>
		<paytm></paytm>
	</div>
</template>
<script>
	 import paytm from '@/components/checkout/paytm'
	   export default {
         layout: 'blank',  
    		components: {
      		paytm
     	},
     	 middleware: [
          'redirectIfGuest'
        ],
}
</script>