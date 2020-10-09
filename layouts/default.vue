<template>
  <div class="flex flex-col min-h-screen">
    <div class="header">
      <TheAlert />
      <Navigation />
      <Topmenu />
    </div>
    <div class="main flex-1 flex bg-grey-lighter">
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
  import Mainmenu from '@/layouts/partials/Mainmenu'
  import Topmenu from '@/layouts/partials/Topmenu'
  import Footer from '@/layouts/partials/Footer'
  export default {
    components: {
      Navigation,
      TheAlert,
      Mainmenu,
      Topmenu,
      Footer
    }
  }
</script>
