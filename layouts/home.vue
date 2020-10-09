<template>
  <div class="flex flex-col min-h-screen bg-grey-lighter">
    <div class="header">
      <TheAlert />
      <Navigation />
      <Topmenu />     
    </div>
    <div class="w-full bg-grey-lighter min-h-screen">   
       <nuxt/>           
    </div>
    <div class="">
        <Footer />
    </div>
  </div>
</template> 

<script>
  import Navigation from '@/layouts/partials/Navigation'
  import TheAlert from '@/components/globals/TheAlert'
  import Topmenu from '@/layouts/partials/Topmenu'
  import Footer from '@/layouts/partials/Footer'
  export default {
    components: {
      Navigation,
      TheAlert,
      Topmenu,
      Footer
    }
  }
</script>
