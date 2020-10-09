<template>
<div>
<!-- <tr>
    <td width="120" v-if="product.product.productgallery.length>0" >
      <img v-bind:src="rooturl + product.product.productgallery[0].thumbnailimage" alt="">
    </td>
    <td>
      {{ product.product.name }} / {{ product.type }} {{ product.name }}
    </td>
    <td width="160">
      <div class="field">
        <div class="control">
          <div class="select is-fullwidth">
            <select v-model="quantity">
              <option value="0" v-if="product.quantity == 0">0</option>
              <option
                :value="x"
                v-for="x in product.stock_count"
                :key="x"
                :selected="x == product.quantity"
              >
                {{ x }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </td>
    <td>
      {{ product.total }}
    </td>
    <td>
      <a href="" @click.prevent="destroy(product.id)">Remove</a>
    </td>
  </tr>  -->
  <div class="container mx-auto">
      <div class="flex my-4 border-b border-grey pb-2">
          <div class="w-1/6 p-1 flex justify-center mr-4" v-if="product.product.productgallery.length>0">
              <img v-bind:src="rooturl + product.product.productgallery[0].thumbnailimage" class="h-10 border border-grey ">
          </div>
          <div class="w-1/2 mr-4">
             <nuxt-link class="text-blue-light" :to="{name: 'products-slug',params:{slug:product.product.slug}}">
              {{ product.product.name }}
             </nuxt-link>
              
          </div>
            <div class="w-1/4 mr-4">
              <p class="text-grey">{{ product.type }} / {{ product.name }}</p>
          </div>
        <!--   <div class="w-1/6 mr-4">
              <select class="border border-grey p-3 w-1/2">
                  <option>Size</option>
                  <option>M</option>
              </select>
          </div> -->
          <div class="w-1/4 mr-4">
              <select v-model="quantity" class="border border-grey p-3 w-1/2">
              <option value="0" v-if="product.quantity == 0">0</option>
              <option
                :value="x"
                v-for="x in product.stock_count"
                :key="x"
                :selected="x == product.quantity"
              >
                {{ x }}
              </option>
            </select>
          </div>
          <div class="w-1/2 mr-4">
              <p class="text-shop-primary font-semibold text-2xl">{{ product.total }}</p>
          </div>
          <div class="w-1/6 mr-4 flex justify-end">
             <a href="" class="no-underline text-bold text-black" @click.prevent="destroy(product.id)">X</a>
          </div>
      </div>
  </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    data(){
       return{
         rooturl:process.env.SITEURL,
       }
    },
    computed: {
      quantity: {
        get () {
          return this.product.quantity
        },
        set (quantity) {
          this.update({ productId: this.product.id, quantity })
        }
      }
    },
    props: {
      product: {
        required: true,
        type: Object
      }
    },
    methods: {
      ...mapActions({
        destroy: 'cart/destroy',
        update: 'cart/update',
         getCart: 'cart/getCart',
      })
    }
  }
</script>