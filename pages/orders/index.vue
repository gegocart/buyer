<template>
  <div>
  <div class="container mx-auto my-4">
          <h1 class="title is-4">Your orders</h1>

          <article class="message" v-if="orders.length">
            <div class="message-body">
             <!--  {{orders}} -->
              <p></p> 
                  <Order
                    v-for="order in orders"
                    :key="order.id"
                    :order="order"
                  />
            </div>
          </article>
          <p v-else>
            You have no orders
          </p>
  </div>
</div>
</template>

<script>
  import Order from '@/components/orders/Order'
  import { mapActions } from 'vuex'
  export default {
    layout: 'home',
    data () {
      return {
        orders: []
      }
    },

    middleware: [
      'redirectIfGuest'
    ],

    components: {
      Order
    },

    // async asyncData ({ app }) {
    //   let response = await app.$axios.$get('orders')

    //   return {
    //     orders: response.data
    //   }
    // },
    methods:{
        async getMyOrderdetail()
        {
         
           // let response = await this.$axios.$get('myorders/' + this.$auth.user.id);
            let response = await this.$axios.$get('orders');
            this.orders=response.data;
            
         }

    },
    created(){
      this.getMyOrderdetail();
    }
  }
</script>
