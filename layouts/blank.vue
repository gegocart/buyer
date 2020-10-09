<template>
 <div class="flex flex-col min-h-screen">
    <div class="header">     
      <TheAlert />
      <Navigation /> 
    </div>
    <div class="main flex-1 flex">
        <div class="w-full bg-grey-lighter">
          <nuxt/>
        </div>
    </div>
    <div class="">
        <Footer />
    </div>
  </div>
</template>

<script>
  import Navigation from '@/layouts/partials/Navigation'
  import TheAlert from '@/components/globals/TheAlert'
  import Footer from '@/layouts/partials/Footer'
  
  export default {
    components: {
      Navigation,
      TheAlert,
      Footer

    }
  }
</script>
