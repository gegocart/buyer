<template>
  <div class="section">
    <div class="px-4">
      <div class="container flex justify-center my-20" v-show="signinshow">
        <div class="lg:w-1/4 md:w-1/4 w-full border border-grey p-8">
          <h3 class="uppercase mb-4 text-center text-shop-primary">Registration</h3>
          <hr class="border border-grey my-4">
          <form action="">
            <div class="field my-2">
              <label class="label text-shop-primary my-2">Enter Name</label>
              <div class="control">
                <input class="input-type my-2" type="email" placeholder="Enter Name">
              </div>
            </div>

            <div class="field my-2">
              <label class="label text-shop-primary my-2">Mobile Number</label>
              <div class="control">
                <input class="input-type my-2" type="password"  placeholder="Mobile Number"> 
              </div>
            </div>
            <div class="field my-2">
              <label class="label text-shop-primary my-2">Email ID</label>
              <div class="control">
                <input class="input-type my-2" type="password"  placeholder="Enter Email ID"> 
              </div>
            </div>
            <div class="field my-2">
              <label class="label text-shop-primary my-2">Choose Password</label>
              <div class="control">
                <input class="input-type my-2" type="password"  placeholder="Enter Password"> 
              </div>
            </div>
            <div class="flex justify-between">
                <div class="flex self-center">
                   <a href="#" @click="showdiv()" class="bg-blue text-white rounded px-4 py-2 no-underline">Signup</a>
                 </div>
                 <div class="flex self-center text-sm">        
                       <p>Already have an account? <nuxt-link :to="{ name: 'auth-signin' }" class="sub-menu-item">
                <span class="text-shop-primary">Signin</span>
            </nuxt-link></p>                      
                 </div>
                </div>
                <hr class="border border-grey">
                <p class="text-center my-4">OR</p>
               <div class="flex justify-center">
                    <img src="~assets/images/facebook.svg" class="w-10 h-8">
                    <img src="~assets/images/twitter.svg" class="w-10 h-8">
                    <img src="~assets/images/g+.svg" class="w-10 h-8">
                </div>
            
          </form>
        </div>
      </div>
       <div class="container flex justify-center my-20" v-show="showaddress">
        <div class="lg:w-1/4 md:w-1/4 w-full border border-grey p-8">
          <h3 class="uppercase mb-4 text-center text-shop-primary">Add your Address</h3>
          <hr class="border border-grey my-4">
          <form action="">
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
                <input class="input-type my-2" type="password"  placeholder="Enter City"> 
              </div>
            </div>
            <div class="flex justify-between">
                <div class="flex self-center">
                   <button class="button is-info is-medium bg-blue px-4 py-2 text-white rounded">Add Address</button>
                 </div>
                 <div class="flex self-center text-sm">        
                       <nuxt-link :to="{ name: '' }" class="text-shop-primary no-underline">
                          Skip >>>
                      </nuxt-link>
                      
                 </div>
                </div>
            
          </form>
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