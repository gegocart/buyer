<template>
	<div>
       <h1>Transaction through PayTM has Failed</h1>
        <div>
       	<br/>
       	<br/>
        <nuxt-link :to="{ name: 'index' }" class="button is-info is-medium bg-blue px-4 py-2 text-white rounded">
          Go Back
        </nuxt-link>
    </div>
	</div>
</template>
<script>
	export default {
	    layout: 'blank',
	    data() {
	      return {
	      }
	     },
	      middleware: [
          'redirectIfGuest'
        ],
	}
</script>