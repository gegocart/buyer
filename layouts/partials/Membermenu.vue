<template>
<div class="h-full">
    <div class="w-full p-4 bg-white shadow">
       <!--   <div class="member-menu-seperator">
          <h4 class="member-menu-heading">Overview</h4>
        </div> --><!-- to do -->
      <!--   <div class="member-menu-seperator">
        <h4 class="member-menu-heading">Orders</h4>
          <ul class="list-reset">
            <li class="member-menu-item">Orders & Returns</li>
          </ul>
        </div> --><!-- to do -->
<!--         <div class="member-menu-seperator">
        <h4 class="member-menu-heading">Credits</h4>
        <ul class="list-reset">
          <li class="member-menu-item">Gego credit</li>
          <li class="member-menu-item">Gego coupon</li>
          <li class="member-menu-item">Wallet</li>
          <li class="member-menu-item">Rewards</li>
          <li class="member-menu-item">Gego points</li>
        </ul>
        </div> --><!-- to do -->
          <div class="my-2">
        <h4 class="member-menu-heading">Account</h4>
        <ul class="list-reset flex flex-col">
          <nuxt-link :to="{ name: 'profile' }" class="member-menu-item">
                View Profile
          </nuxt-link>
         <nuxt-link :to="{ name: 'profile-cards' }" class="member-menu-item">
                Saved Cards
          </nuxt-link>
         <nuxt-link :to="{ name: 'profile-addresses' }" class="member-menu-item">
                Addresses
          </nuxt-link>
        </ul>
        </div>
    </div>
</div>
</template>

<script>

export default {
   data () {
      return {}
  }
}
</script>
