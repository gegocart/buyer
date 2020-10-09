<template>
  <div class="page page-change-password container flex my-20 justify-center">
    <div class="w-3/4 flex">
    <div class="w-2/3 p-8 border-r border-grey">
        <h5 class="uppercase text-shop-primary font-semibold self-center mb-8">Addresses</h5>
        <div class="flex">
        <div class="w-1/3 border border-grey p-4">
          <div class="h-48">
            <h4 class="my-2">Delivery address</h4>
            <p class="my-2">Karthiga. S </p>
            <p class="my-2">2, Ponmeni pudhur,</p>
            <p class="my-2">Kalavasal.</p>
            <p class="my-2">Madurai.</p>
          </div>
          <div class="justify-between flex">
            <a href="#" class="no-underline text-shop-primary">Edit</a>
            <a href="#" class="no-underline text-shop-primary">Delete</a>
          </div>
         </div>
          <div class="w-1/3 border border-grey p-4 ml-8" @click="showBrokerModal = true">
              <div class="flex flex-col justify-center-center h-48 pt-20">
                  <img src="~assets/images/plus.svg" class="h-8">
                  <p class="text-center my-4">Add new address</p>
              </div>
          </div>
        </div>
        </div>
        <div class="w-1/3 flex p-8 flex-col">        
          <p class="text-grey uppercase text-sm">Estimated delivery date</p> 
            <div class="flex mt-8 border-b border-grey pb-4">
                <img src="~assets/images/item1.png" class="h-10 border border-grey p-1"><span class="ml-8 flex self-center">01 June</span>
            </div>
            <div class="flex flex-col">
            <h4 class="my-4 uppercase">Price details</h4>
            <div class="w-full flex justify-between my-2">
              <p>Order Total</p>
              <p>Rs.500</p>
            </div>
            <div class="w-full flex justify-between my-2">
              <p>Delivery Charges</p>
              <p class="text-shop-primary">Free</p>
            </div>
            <div class="font-semibold w-full flex justify-between my-2 border-t border-grey pt-4">
              <p>Total</p>
              <p>Rs.500</p>
            </div>
          </div>
          <div class="mt-8">            
                <nuxt-link :to="{ name: 'delivery-payment' }" class="no-underline bg-blue px-6 py-4 text-white rounded hover:shadow-md">Continue</nuxt-link>
          </div>
        </div>


        
            <modal v-if="showBrokerModal" @close="showBrokerModal = false">
                    <div class="container mx-auto modal_container">                      
                       <form action="" class="w-full">
                        <button class="modal-default-button text-2xl py-1 float-right" id="close_modal" @click="$emit('close')">x</button><br>
            <div class="field my-2">
              <label class="label text-shop-primary my-2">Select your Country</label>
              <div class="control">
                <select class="input-type my-2">
                    <option>Afghanistan</option>
                    <option>Aland Islands</option>
                    <option>India</option>
                </select>
              </div>
            </div>
             <div class="field my-2">
              <label class="label text-shop-primary my-2">Select your State</label>
              <div class="control">
                <select class="input-type my-2">
                    <option>Tamilnadu</option>
                    <option>Kerla</option>
                    <option>kerla</option>
                </select>
              </div>
            </div>

            <div class="field my-2">
              <label class="label text-shop-primary my-2">Full Name</label>
              <div class="control">
                <input class="input-type my-2" type="password"  placeholder="Full Name"> 
              </div>
            </div>
            <div class="field my-2">
              <label class="label text-shop-primary my-2">Mobile Number</label>
              <div class="control">
                <input class="input-type my-2" type="password"  placeholder="Enter 10 digit Number"> 
              </div>
            </div>
            <div class="field my-2">
              <label class="label text-shop-primary my-2">Pincode</label>
              <div class="control">
                <input class="input-type my-2" type="password"  placeholder="6 digit (0 to 9)"> 
              </div>
            </div>
               <div class="field my-2">
              <label class="label text-shop-primary my-2">Street Address</label>
              <div class="control">
                <input class="input-type my-2" type="password"  placeholder="Door no"> 
              </div>
                <div class="control">
                <textarea class="input-type my-2"></textarea>  
              </div>
            </div>            
            <div class="field my-2">
              <label class="label text-shop-primary my-2">City</label>
              <div class="control">
                  <select class="input-type my-2">
                    <option>Madurai</option>
                    <option>Theni</option>
                    <option>Chennai</option>
                </select>
              </div>
            </div>
            <div class="field my-2">
            <label class="label text-shop-primary my-2">Type of address</label>
              <div class="control flex">
                <input type="radio" class="mr-2 my-2" value="home" name="address"><span class="flex self-center">Home</span>
                <input type="radio" class="mx-2 my-2" value="office" name="address"><span class="flex self-center">Office</span>
              </div>
            </div>
            <div class="field my-2">
              <div class="control flex">
                <input type="checkbox" class="mr-2 my-2"><span class="flex self-center">Make this my default address</span>                
              </div>
            </div>
            <div class="flex justify-between">
                <div class="flex self-center">
                <nuxt-link :to="{ name: 'delivery-price_details' }" class="no-underline bg-blue px-4 py-2 text-white rounded">Add Address</nuxt-link>
                 </div>
                </div>
            
          </form>
                    </div>
            </modal>
    </div>
  </div>
</template>
<script>
import VueSwal from 'vue-swal';
  export default {
    layout: 'blank',
    data() {
      return {

        showUserModal: false,
        showBrokerModal: false,
        showBuyModal: false,
      }
    },
      component:
    {
      VueSwal
    }
  }
</script>
<style>
 modal
{
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease;
}
.modal_container
{
      margin: 0 auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    width:25%;
    margin-top: 2rem;
}
</style>