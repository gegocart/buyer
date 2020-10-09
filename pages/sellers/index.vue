<template>
	<div class="page all-sellers=page">
		<h1 class="text-2xl">All Sellers <small class="text-base"> ({{ sellers.length }})</small></h1>
		<div  class="w-full flex flex-wrap">
			<template v-for="seller in sellers">
					<div class="w-1/6">
						<div class="mx-4 bg-white p-4">
							<div class="flex justify-center"><img src="/images/profile.png" class="w-64"></div>
						<p class="my-2">
							<nuxt-link :to="{ name: 'sellers-slug', params: { slug: seller.name } }" class="text-blue-dark font-semibold no-underline">{{ seller.name }} </nuxt-link></p>
						<p class="text-grey-dark my-2">{{ seller.email }} </p>
						<p class="text-sm">Lorem Ipsum is simply dummy text of the printing......</p>
						<div class="flex mt-4 border-t border-grey-light">	
						<div class="flex my-4">						
							<img src="/images/star_half.svg" class="w-4 h-4 mr-2">
							<img src="/images/star_half.svg" class="w-4 h-4 mr-2">
							<img src="/images/star_half.svg" class="w-4 h-4 mr-2">
							<img src="/images/star.svg" class="w-4 h-4 mr-2">
						</div>
						</div>
					</div>
					</div>
			</template>
	    </div>
	</div>
</template>
<script>
	export default {
		layout: 'blank', 
		data() {
			return {
				sellers : []
			}
		},
		async asyncData ({ app }) {
      	let response = await app.$axios.$get(`sellers`)
	      return {
	        sellers: response.data
	      }
    	}
	}
</script>