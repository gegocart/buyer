<template>
  <div class="flex flex-col min-h-screen">
    <div class="header">
      <TheAlert />
      <Navigation />
      <Topmenu />
    </div>
    <div class="main flex-1 flex bg-grey-lighter p-8">
       <div class="w-1/6">
          <Membermenu />      
        </div>
        <div class="w-5/6">
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
  import Membermenu from '@/layouts/partials/Membermenu'
  import Topmenu from '@/layouts/partials/Topmenu'
  import Footer from '@/layouts/partials/Footer'
  export default {
    components: {
      Navigation,
      TheAlert,
      Membermenu,
      Topmenu,
      Footer
    }
  }
</script>
