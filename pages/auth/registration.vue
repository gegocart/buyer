<template>
  <div class="section">
    <div class="px-4">
      <div class="container mx-auto flex justify-center my-6 lg:my-20">
        <div class="lg:w-1/3 md:w-1/2 w-full border border-grey p-4 lg:p-8 bg-white">
          <h3 class="uppercase mb-4 text-center text-xl lg:text-2xl">Registration</h3>
          <hr class="border border-grey my-4">
          <form action="">
            <div class="field my-2">
              <label class="label  my-2">Enter Name</label>
              <div class="control">
                <input class="input my-2 border border-grey p-2 w-full rounded" type="text" placeholder="Enter Name" v-model="form.name">
              </div>
              <p class="text-red-dark" v-if="errors.name">
                    {{ errors.name[0] }}
                  </p>
            </div>

            <!-- <div class="field my-2">
              <label class="label  my-2">Mobile Number</label>
              <div class="control">
                <input class="input my-2 border border-grey p-2 w-full rounded" type="text"  placeholder="Mobile Number"> 
              </div>
            </div> -->
            <div class="field my-2">
              <label class="label  my-2">Email ID</label>
              <div class="control">
                <input class="input my-2 border border-grey p-2 w-full rounded" type="email"  placeholder="Enter Email ID" v-model="form.email"> 
              </div>
              <p class="text-red-dark" v-if="errors.email">
                    {{ errors.email[0] }}
                  </p>
            </div>
            <div class="field my-2">
              <label class="label  my-2">Password</label>
              <div class="control">
                <input class="input my-2 border border-grey p-2 w-full rounded" type="password"  placeholder="Enter Password" v-model="form.password"> 
              </div>
              <p class="text-red-dark" v-if="errors.password">
                    {{ errors.password[0] }}
                  </p>
            </div>

            <div class="field my-2">
              <label class="label  my-2">Confirm Password</label>
              <div class="control">
                <input class="input my-2 border border-grey p-2 w-full rounded" type="password"  placeholder="Confirm Password" v-model="form.password_confirmation"> 
              </div>
            </div>

            <div class="w-full my-4">
                <div class="flex self-center justify-center">
                   <a href="#" @click="register()" class="text-center no-underline w-3/4 button is-info is-medium bg-shop-primary px-4 py-2 text-white rounded-full hover:bg-black">Sign up</a>
                 </div>
                 <p class="text-center text-grey-dark text-sm my-2">Have an account</p> 
                 <div class="flex justify-center">        
                     <nuxt-link :to="{ name: 'auth-signin' }" class="sub-menu-item">
                       <span class="text-shop-primary hover:font-semibold">Sign in</span>
                     </nuxt-link>                   
                 </div>
            </div>
                <p class="text-center my-4">OR</p>
               <div class="flex justify-center">
                    <img src="~assets/images/facebook.svg" class="w-10 h-8">
                    <img src="~assets/images/twitter.svg" class="w-10 h-8">
                    <img src="~assets/images/g+.svg" class="w-10 h-8">
                </div>
            
          </form>
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
        errors:[],
        form: {
          name: '',
          password: '',
          email: '',
          password_confirmation:'',
          usergroup_id: 4,
        }
      }
		},
     middleware: [
      'redirectIfAuthenticated'
    ],
    methods: {
       async register () {
        
        let response = await this.$axios.$post('auth/register', this.form).then((response) => {
                if (this.$route.query.redirect) {
                  this.$router.replace(this.$route.query.redirect)
                  return
                }
                
                 this.$router.replace({
                    name: 'index'
                  })
                
             }).catch((error) => {
            
             this.errors=error.response.data.errors;
              //console.log(error);
            });
       
        //console.log(response.data)
      }
    }
	}
</script>