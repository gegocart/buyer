<template>
	<div class="w-full ml-8 page-change-password bg-white">
		<div class="w-1/2 p-6">
            <div v-if="this.success!=null" class="w-1/2 my-4 bg-green-light p-4 flex justify-between" id="success-alert">
            <p class="text-white">{{this.success}}</p>
           <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="close()">
          </div>
           <div v-if="this.failure!=null" class="w-1/2 my-4 bg-red-light p-4 flex justify-between" id="success-alert">
            <p class="text-white">{{this.failure}}</p>
           <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="fclose()">
          </div>
			<h4 class="uppercase mb-4 font-semibold">Change Password</h4>
            <form action="" @submit.prevent="store">
				  <div class="field my-3 flex">
              		<label class="label w-1/4 self-center">Old Password</label>
             		<div class="flex flex-col w-1/2 control">
                	<input class="input border border-grey px-4 py-2 w-full rounded" type="password"  v-model="form.oldpassword" placeholder="Old password">
                    <p class="text-red-dark" v-if="errors.oldpassword">
                    {{ errors.oldpassword[0] }}
                  </p> 
                 	</div>
            	  </div>
            	   <div class="flex field my-3">
              		<label class="label w-1/4 self-center">New Password</label>
             		<div class="flex flex-col w-1/2 control">
                	<input class="input border border-grey px-4 py-2 w-full rounded" type="password" placeholder="New password" v-model="form.newpassword">
                    <p class="text-red-dark" v-if="errors.newpassword">
                    {{ errors.newpassword[0] }}
                  </p>  
                 	</div>
            	  </div>
            	   <div class="flex field my-3">
              		<label class="label w-1/4 self-center">Confim Password</label>
             		<div class="flex flex-col w-1/2 control">
                	<input class="input border border-grey px-4 py-2 w-full rounded" type="password" v-model="form.confirmpassword" placeholder="Confim password">
                    <p class="text-red-dark" v-if="errors.confirmpassword">
                    {{ errors.confirmpassword[0] }}
                  </p> 
                 	</div>
            	  </div>
                	<div class="flex mt-10">        
                    <button class="w-64 button is-info is-medium bg-blue px-4 py-2 text-white rounded hover:shadow-lg">Change Password</button>
                    </div>
         </form>
		</div>
	</div>
</template>
<script>
    export default {
        layout: 'blank',
        data() {
            return {
         // errors:[],
        form:{
           oldpassword:'',
           newpassword:'',
           confirmpassword:'',
           id:'',

        },
       
         success:null,
        failure:null,
      }
        },
    
    methods:{
       async close(){
         this.success=null;
      },
      async fclose(){
         this.failure=null;
      },
      async store(){
              this.form.id=this.$auth.user.id;
                 let response = await this.$axios.$post('users/passwordchange',this.form) 
                                .then((response) => {
                                 
                                       if(response.message=="Password is changed successfully"){
                                           this.success=response.message;
                                           this.form='';
                                       }
                                       else{
                                             this.failure=response.message;
                                       }
                                  }).catch((error) => {
                                    
                                   //this.errors=error.response.data.errors;
                                  
                                  });

      }
    }
    }
</script>