<template>
  <div class="page page-change-password container flex my-20 justify-center">
    <div class="w-3/4 flex">
    <div class="w-3/4 p-8 border-r border-grey">
        <h5 class="uppercase text-shop-primary font-semibold self-center bg-shop-primary text-white p-4">Payment method</h5>
          <div class="flex">
            <div class="w-1/3 h-70 bg-shop-primary">
              <ul class="list-reset">
                  <li @click="settab('credit')" class="p-4 bg-shop-primary uppercase text-sm font-semibold" v-bind:class="[{'bg-white border-2 border-shop-primary' : tab === 'credit'}]">Credit Card</li>                  
                  <li @click="settab('debit')" class="p-4 bg-shop-primary uppercase text-sm font-semibold" v-bind:class="[{'bg-white border-2 border-shop-primary' : tab === 'debit'}]">Debit Card</li>
                  <li @click="settab('cod')" class="p-4 bg-shop-primary uppercase text-sm font-semibold" v-bind:class="[{'bg-white border-2 border-shop-primary' :tab === 'cod'}]">Cash on Delivery</li>
              </ul>
            </div>
            <div class="w-2/3">
                    <div class="flex bg-grey-lighter flex-col p-8 h-70" v-if="this.tab=='credit'">
                          <input type="text" placeholder="Card Number" class="p-2 w-3/4 my-2">
                           <div class="flex my-2">
                            <select class="w-1/3 mr-12 p-2">
                              <option>Select month</option>
                              <option>01</option>
                              <option>02</option>
                              <option>03</option>
                              <option>04</option>
                              <option>05</option>
                              <option>06</option>
                              <option>07</option>
                              <option>08</option>
                              <option>09</option>
                              <option>10</option>
                              <option>11</option>
                              <option>12</option>
                            </select>      
                             <select class="w-1/3 p-2">
                              <option>Select Year</option>
                              <option>2019</option>
                              <option>2020</option>
                              <option>2021</option>
                              <option>2022</option>
                              <option>2023</option>
                              <option>2024</option>
                              <option>2025</option>
                              <option>2026</option>
                            </select>      
                          </div>  
                          <div class="flex my-2">                            
                            <input type="text" placeholder="Name on Card" class="my-2 w-3/4 p-2 ">
                          </div>
                          <div class="flex my-2">                            
                            <input type="text" placeholder="cvv" class="my-2 w-1/2 p-2">
                          </div>                            
                          <div class="flex my-2">                            
                            <a href="" class="text-center w-1/2 self-center no-underline bg-blue px-6 py-3 text-white rounded hover:shadow-md">Pay</a>
                          </div>              
                          <p class="text-sm text-grey my-2">Your Card details would be securely saved for faster payments. Your CVV will not be stored.</p>
                     </div>
                         <div class="flex bg-grey-lighter flex-col p-8 h-70" v-if="this.tab=='debit'">
                          <input type="text" placeholder="Card Number" class="p-2 w-3/4 my-2">
                           <div class="flex my-2">
                            <select class="w-1/3 mr-12 p-2">
                              <option>Select month</option>
                              <option>01</option>
                              <option>02</option>
                              <option>03</option>
                              <option>04</option>
                              <option>05</option>
                              <option>06</option>
                              <option>07</option>
                              <option>08</option>
                              <option>09</option>
                              <option>10</option>
                              <option>11</option>
                              <option>12</option>
                            </select>      
                             <select class="w-1/3 p-2">
                              <option>Select Year</option>
                              <option>2019</option>
                              <option>2020</option>
                              <option>2021</option>
                              <option>2022</option>
                              <option>2023</option>
                              <option>2024</option>
                              <option>2025</option>
                              <option>2026</option>
                            </select>      
                          </div>  
                          <div class="flex my-2">                            
                            <input type="text" placeholder="Name on Card" class="my-2 w-3/4 p-2 ">
                          </div>
                          <div class="flex my-2">                            
                            <input type="text" placeholder="cvv" class="my-2 w-1/2 p-2">
                          </div>                            
                          <div class="flex my-2">                            
                            <a href="" class="text-center w-1/2 self-center no-underline bg-blue px-6 py-3 text-white rounded hover:shadow-md">Pay</a>
                          </div>              
                          <p class="text-sm text-grey my-2">Your Card details would be securely saved for faster payments. Your CVV will not be stored.</p>
                     </div>
                     <div class="flex bg-grey-lighter flex-col p-8 h-70" v-if="this.tab=='cod'">
                          <div class="flex flex-col">              
                          <p class="my-2">Amount payable at the time of delivery</p>
                          <a href="" class="text-center w-1/2 no-underline bg-blue px-6 py-3 text-white rounded hover:shadow-md">Conform</a>
                          </div>
                      </div>
            </div>
          </div>
        </div>
        <div class="w-1/4 flex p-8 flex-col">  
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
                <nuxt-link :to="{ name: 'delivery-price_details' }" class="no-underline bg-blue px-6 py-4 text-white rounded hover:shadow-md">Continue</nuxt-link>
          </div>
        </div>
    </div>
  </div>
</template>
<script>


  export default {
    layout: 'blank',
    data() {
      return {
            credit:true,
            debit:false,
            cod:false,
            tab:'credit',
      };
    },
          methods:{
 
   settab(tabname)
    {
 
     this.tab=tabname;
 }
}
  }
</script>