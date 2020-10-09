<template>
  <div class="section">
    <div class="px-4">
      <div class="container mx-auto flex justify-center my-6 lg:my-20">
        <div class="md:w-1/3 lg:w-1/3 w-full border border-grey p-4 lg:p-8 bg-white">
          <h2 class="uppercase mb-4 text-center font-semibold text-xl lg:text-2xl">Sign in</h2>
          <hr class="border border-grey my-4">
          <form action="" @submit.prevent="signin">
            <div class="field my-2">
              <label class="label my-2">Email</label>
              <div class="control">
                <input class="input my-2 input-type" type="email" placeholder="e.g. buyer@gegocart.com" v-model="form.email" :class="{ 'is-danger': errors.email }" >
                 <p class="text-red-dark" v-if="errors.email">
                    {{ errors.email[0] }}
                  </p>
              </div>
            </div>

            <div class="field my-2">
              <label class="label my-2">Password</label>
              <div class="control">
                <input class="input my-2 input-type" type="password" v-model="form.password" placeholder="*********"> 
                <p class="text-red-dark" v-if="errors.password">
                    {{ errors.password[0] }}
                  </p>
              </div>
            </div>
              <div class="flex justify-between my-4">
                  <div class="flex self-center">
                     <input type="checkbox" class="self-center"><span class="text-xs lg:text-sm ml-2 text-grey-dark">Remember me</span>
                   </div>
                   <div class="flex self-center">
                       <nuxt-link :to="{ name: 'auth-forgot-password' }" class="text-xs lg:text-sm text-black no-underline">
                      Forgot your password?
                     </nuxt-link>
                   </div>
                </div>
                 <div class="w-full flex my-2 justify-center">        
                   <button class="w-3/4 button is-info is-medium bg-shop-primary px-4 py-2 text-white rounded-full hover:bg-black text-lg lg:text-xl">Sign in</button>
                 </div>                
                 <div class="w-full"> 
                   <p class="text-center text-grey-dark text-sm my-2">Don't have an account</p> 
                   <div class="flex justify-center">
                      <nuxt-link :to="{ name: 'auth-registration' }" class="text-shop-primary no-underline hover:font-semibold">
                           Click here to Sign up
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
      layout: 'blank',
    data () {
      return {
        form: {
          email: '',
          password: ''
        }
      }
    },

    middleware: [
      'redirectIfAuthenticated'
    ],

    methods: {
      async signin () {
        await this.$auth.loginWith('local', {
          data: this.form
        }).then((response) => {
                
                if (this.$route.query.redirect) {
                  this.$router.replace(this.$route.query.redirect)
                  return
                }

                this.$router.replace({
                  name: 'index'
                })
                
             }).catch((error) => {
            
            //this.errors=error.response.data.errors;
              //console.log(error);
            });

      }
    }
  }
</script>
