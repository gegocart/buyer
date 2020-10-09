<template>
	<div class="page store-page my-4 container mx-auto">
		<div class="flex flex-col justify-between">
			<h1 class="text-2xl font-bold my-4">{{ page.title }}</h1>
			<div class="leading-loose bg-white p-6">{{ page.content }}</div>
		</div>
	</div>
</template>
<script>
 import { mapActions } from 'vuex'
export default{
	layout:'blank',
	data() {
		return { 
			page: null
		}
	},
	async asyncData ({ params, app }) {
      let response = await app.$axios.$get(`cms/${params.slug}`)
      return {
        page: response.data
      }
    }
}
</script>