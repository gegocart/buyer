<template>
	<div class="page category-list-page my-4">
		<div class="flex justify-between">
			<h1 class="text-2xl font-bold mb-6">Browse By Categories </h1>
			<div class="filter-bar">
				<ul class="list-reset flex">
					<li class="font-bold mx-2">A-Z</li>
					<li class="font-bold mx-2">T</li>
				</ul>
			</div>
		</div>
		<div class="category-list-wrapper flex flex-wrap">
		<template v-for="category in categories">
          <template v-if="category.children.length">
            <div class="w-full lg:w-1/3 flex flex-col" :key="category.slug">
              <nuxt-link
                :to="{ name: 'categories-slug', params: { slug: category.slug } }" 
                class="category-heading">
                {{ category.name }}
              </nuxt-link>

              <div class="flex flex-col">
                <nuxt-link
                  :to="{ name: 'categories-slug', params: { slug: child.slug,parentname:category.name } }"
                  class="category-item"
                  v-for="child in category.children"
                  :key="child.slug"
                >
                  {{ child.name }}
                </nuxt-link>
              </div>
            </div>
          </template>
          <template v-else>
            <nuxt-link :to="{ name: 'categories-slug', params: { slug: category.slug } }" :key="category.slug" class="category-item">
              {{ category.name }}
            </nuxt-link>
          </template>
        </template>
		</div>
	</div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
  	layout: 'blank',
    data()
    {
      return{
       //stores:[]
      }
    },

     methods: {
      
      // async getstores () {
     
      //   let response = await this.$axios.$get('getstoreuser/' + this.$auth.user.id)
      //   console.log(response.data);
      //   debugger;
      //    this.stores = response.data;
      // },
    },
    computed: {
      ...mapGetters({
        categories: 'categories',
      })
    }
  }
</script>
