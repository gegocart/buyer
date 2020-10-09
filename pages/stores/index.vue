<template>
	<div class="page store-page my-4">
		<div class="flex justify-between">
			<h1 class="text-2xl font-bold">Browse By Stores 
				<span class="text-xl">( {{ stores.length }} )</span></h1>
			<div class="filter-bar">
				<ul class="list-reset flex"> 
					<li class="font-bold mx-2">A-Z</li>
					<li class="font-bold mx-2">T</li>
				</ul>
			</div>
		</div>
		<div class="store-wrapper flex flex-wrap">
			<template v-for="store in stores">
				<div class="w-full lg:w-1/4 p-2">
					<div class="border bg-white p-2">
						<div class="flex justify-around "><img v-bind:src="'http://admin-app.test/uploads/' + store.storelogo" class="h-64"></div>
						<!-- <img src="https://placehold.it/340x160"> -->
						<h1 class="font-bold text-xl my-2"><nuxt-link :to="{ name: 'stores-slug', params: { slug: store.slug } }">{{ store.name }}</nuxt-link></h1>
						<p class="my-2 leading-normal text-gray-400">{{ store.description }}</p>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>
<script>
	import { mapActions } from 'vuex'
export default{
	layout:'blank',
	data() {
		return {

			stores:[]
			// stores: [
			// 	{
			// 		"name": "Alpha Flowers",
			// 		"description" : "Description for alpha flowers"
			// 	},
			// 	{
			// 		"name": "Beta Bakery",
			// 		"description" : "Description for beta bakery"
			// 	},
			// 	{
			// 		"name": "Cool cakes",
			// 		"description" : "Description for cool cakes"
			// 	},
			// 	{
			// 		"name": "Dazlling Fashion",
			// 		"description" : "Description for cool cakes"
			// 	},
			// 	{
			// 		"name": "Elite Watches",
			// 		"description" : "Description for cool cakes"
			// 	},
			// ]
		}
	},
	 methods:{
		 async getstores () {
     
        let response = await this.$axios.$get('activestores')
        //console.log(response.data);
        this.stores = response.data;
      },
    },
     created () {
        this.getstores()
      },

	
	// async asyncData ({ app }) {
 //      let response = await app.$axios.$get(`stores`)

 //      return {
 //        stores: response.data
 //      }
 //    }

}
</script>