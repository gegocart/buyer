<template>
	<div class="ml-8 bg-white">
			<div class="w-full p-6" v-show="showprofile">
				<h4 class="uppercase mb-4 font-semibold">Profile Information</h4>
					<div class="w-1/2 flex my-4">
					<!-- 	<div class="w-2/5 md:w-1/5 lg:w-1/5">
							<p>First Name</p>
						</div> -->
						<div class="w-2/5 md:w-1/5 lg:w-32">
							<p>Name</p>
						</div>
						<div class="w-3/5 md:w-4/5 lg:w-1/2">
							<p>{{users.name}}</p>
						</div>
					</div>
					<!-- <div class="w-full flex my-4">
						<div class="w-2/5 md:w-1/5 lg:w-1/5">
							<p>Last Name</p>
						</div>
						<div class="w-3/5 md:w-4/5 lg:w-4/5">
							<p>Sakthi</p>
						</div>
					</div>
					<div class="w-full flex my-4">
						<div class="w-2/5 md:w-1/5 lg:w-1/5">
							<p>Gender</p>
						</div>
						<div class="w-3/5 md:w-4/5 lg:w-4/5">
							<p>Female</p>
						</div>
					</div>
					<div class="w-full flex my-4">
						<div class="w-2/5 md:w-1/5 lg:w-1/5">
							<p>Date of Birth</p>
						</div>
						<div class="w-3/5 md:w-4/5 lg:w-4/5">
							<p>-</p>
						</div>
					</div> -->
					<div class="w-1/2 flex my-4">
						<div class="w-2/5 md:w-1/5 lg:w-32">
							<p>E-mail ID</p>
						</div>
						<div class="w-3/5 md:w-4/5 lg:w-1/2">
							<p>{{users.email}}</p>
						</div>
					</div>
					<!-- <div class="w-full flex my-4">
						<div class="w-2/5 md:w-1/5 lg:w-1/5">
							<p>Mobile No</p>
						</div>
						<div class="w-3/5 md:w-4/5 lg:w-4/5">
							<p>9876543210</p>
						</div>
					</div>
					<div class="w-full flex my-4">
						<div class="w-2/5 md:w-1/5 lg:w-1/5">
							<p>Location</p>
						</div>
						<div class="w-3/5 md:w-4/5 lg:w-4/5">
							<p>India</p>
						</div>
					</div> -->
					<div class="my-4 mt-10">
						<a href="#" class="no-underline w-64 button is-info is-medium bg-blue px-4 py-2 text-white rounded hover:shadow-lg" @click="showdiv()">Edit</a>
					</div>
			</div>
			<div class="w-full p-6" v-show="showedit">
				<h4 class="mb-4 uppercase font-semibold">Profile Information</h4>
					<div class="w-full flex my-4">
						<div class="self-center w-2/5 md:w-1/5 lg:w-32">
							<!-- <p>First Name</p> -->
							<p>Name</p>
						</div>
						<div class="w-3/5 md:w-1/6 lg:w-1/6">
							<input type="text" v-model="userdetails.name" class="input-type">
						</div>
						<p class="text-red-dark" v-if="errors.name">
		                    {{ errors.name[0] }}
		                  </p>
					</div>
					<!-- <div class="w-full flex my-4">
						<div class="w-2/5 md:w-1/5 lg:w-1/5">
							<p>Last Name</p>
						</div>
						<div class="w-3/5 md:w-1/6 lg:w-1/6">
							<input type="text" value="Sakthi" class="input-type">
						</div>
					</div>
					<div class="w-full flex my-4">
						<div class="w-2/5 md:w-1/5 lg:w-1/5">
							<p>Gender</p>
						</div>
						<div class="w-3/5 md:w-1/6 lg:w-1/6">
							  <input type="radio" name="gender" value="male"> Male
  							  <input type="radio" name="gender" value="female" checked> Female
						</div>
					</div>
					<div class="w-full flex my-4">
						<div class="w-2/5 md:w-1/5 lg:w-1/5">
							<p>Date of Birth</p>
						</div>
						<div class="w-3/5 md:w-1/6 lg:w-1/6">
							<input type="date" class="input-type">
						</div>
					</div> -->
					<div class="w-full flex my-4">
						<div class="self-center w-2/5 md:w-1/5 lg:w-32">
							<p>E-mail ID</p>
						</div>
						<div class="w-3/5 md:w-1/6 lg:w-1/6">
							<input type="text" v-model="userdetails.email" class="input-type">
						</div>
						<p class="text-red-dark" v-if="errors.email">
		                    {{ errors.email[0] }}
		                  </p>
					</div>
					<!-- <div class="w-full flex my-4">
						<div class="w-2/5 md:w-1/5 lg:w-1/5">
							<p>Mobile No</p>
						</div>
						<div class="w-3/5 md:w-1/6 lg:w-1/6">
							<input type="text" name="" value="9876543210" class="input-type">
						</div>
					</div>
					<div class="w-full flex my-4">
						<div class="w-2/5 md:w-1/5 lg:w-1/5">
							<p>Location</p>
						</div>
						<div class="w-3/5 md:w-1/6 lg:w-1/6">
							<select class="input-type">
								<option>India</option>
								<option>USA</option>
							</select>
						</div>
					</div> -->
					<div class="my-4 mt-10">
						<a href="#" class="no-underline w-64 button is-info is-medium bg-blue px-4 py-2 text-white rounded hover:shadow-lg" @click="updateuser()">Change</a>
					</div>
			</div>
		</div>
	</div>
</template>
<script> 
 import { mapActions } from 'vuex'
export default{
	layout: 'member',
			data() {
			return {
          showprofile:true,
         showedit:false,
         users:[],
         userdetails:{
         	name:'',
         	email:'',
         	id:''
         }
      }
		},
    methods:{
      async showdiv(){
           this.showedit=true;
           this.showprofile=false;
      },
      async getuserdetails()
      {
      	var userid=this.$auth.user.id;
        let response = await this.$axios.$get('users/getuserdetails/' + userid);
      
         this.users=response;
         this.userdetails=response;
         
      },

      async updateuser(){
      	
         	let response = await this.$axios.$post('users/updateuser', this.userdetails).then((response) => {
                
                 this.showedit=false;
                 this.showprofile=true;
             }).catch((error) => {
            
            /// this.errors=error.response.data.errors;
              //console.log(error);
            });
      }
    },
    created(){
    	this.getuserdetails();
    }
}
</script>