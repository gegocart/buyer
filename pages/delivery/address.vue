<template>
    <div class="w-full container flex justify-center my-20">
          <div class="w-1/2 flex">
              <div class="w-1/2 flex flex-wrap">
              <h4 class="my-4 uppercase">Add Address</h4>
          <form action="" class="w-full border-r border-grey pr-16">
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
        <div class="w-1/2">
          <div class="w-5/6 flex flex-col pl-16">
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
        </div>
              </div>
          </div>
</template>
<script>
	export default {
		layout: 'sign',
		data() {
			return {
         signinshow:true,
         showaddress:false,
      }
		},
    methods:{
      async showdiv(){
           this.showaddress=true;
           this.signinshow=false;
      }
    }
	}
</script>