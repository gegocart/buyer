  <template> 
  <div> 		
  	<nav class="">
 
<menus/>
	</nav>
	 
	</div>
  </template>
  <script>
  import { mapGetters } from 'vuex'
  import menus from '@/layouts/partials/Mainmenu'
	export default {

      computed: {
      ...mapGetters({
        categories: 'categories',
      })
    },
     components: {
      menus
    }
    
    }
</script>