<template>
	<div class="ml-8 bg-white">
		<div class="w-full  p-6">
			<!-- <div class="justify-between flex my-2">
				<h5 class="uppercase font-semibold self-center">Addresses</h5>
				<span class="bg-blue px-4 py-2 text-white rounded">Add Address +</span>
			</div> -->
      <div class="flex justify-end mb-3">
      <a href="#" class=" button is-info is-medium bg-blue px-4 py-2 text-white rounded hover:shadow-lg no-underline text-sm" @click="add()">Add</a>
      </div>
			 <div class="w-full" v-show="addaddress">
              <h4 class="mb-4 mt-4 uppercase">Add Address</h4>
          <form action="" @submit.prevent="store" class="w-full">
          <div class="flex my-2">
              <div class="w-1/2 field mr-2 flex">
                <label class="label my-2 w-1/5 self-center text-sm">First Name</label>
                <div class="control flex flex-col w-3/5">
                 <input class="input-type my-2" type="text" v-model="form.firstname">
                </div>
                  <p class="text-red-dark" v-if="errors.firstname">
                    {{ errors.firstname[0] }}
                  </p>
              </div>
              <div class="w-1/2 field flex">
                <label class="label my-2 w-1/5 self-center text-sm">Last Name</label>
                <div class="control flex flex-col w-3/5">
                 <input class="input-type my-2" type="text" v-model="form.lastname">
                </div>
                 <p class="text-red-dark" v-if="errors.lastname">
                    {{ errors.lastname[0] }}
                  </p>
              </div>
            </div>
             <div class="flex my-2">
              <div class="w-1/2 field mr-2 flex">
                <label class="label my-2 w-1/5 self-center text-sm">Email</label>
                <div class="control flex flex-col w-3/5">
                 <input class="input-type my-2" type="text" v-model="form.email">
                </div>
                 <p class="text-red-dark" v-if="errors.email">
                    {{ errors.email[0] }}
                  </p>
              </div>
              <div class="w-1/2 field flex">
                <label class="label my-2 w-1/5 self-center text-sm">Mobile Number</label>
                <div class="control flex flex-col w-3/5">
                 <input class="input-type my-2" type="text" v-model="form.mobileno">
                </div>
                 <p class="text-red-dark" v-if="errors.mobileno">
                    {{ errors.mobileno[0] }}
                  </p>
              </div>
            </div>
            <div class="flex w-full">
            <div class="w-1/2 field my-2 flex">
              <label class="w-1/5 self-center label my-2 text-sm">Address</label>
              <div class="control flex flex-col w-3/5">
               <!--  <textarea class="input-type my-2" v-model="form.address_1"></textarea> -->
                 <input class="input-type my-2" type="text" v-model="form.address_1">
                  <input class="input-type my-2" type="text" v-model="form.address_2">
              </div>
               <p class="text-red-dark" v-if="errors.address_1">
                    {{ errors.address_1[0] }}
                  </p>
            </div>
            <div class="w-1/2 my-2">
            <div class="field flex w-full">
              <label class="label my-2 w-1/5 self-center text-sm">City</label>
              <div class="control flex flex-col w-3/5">
                <!-- <select class="input-type my-2" v-model="form.city">
                    <option>Madurai</option>
                    <option>Theni</option>
                </select> -->
                <CityDropdown v-model="form.city" />
              </div>
              <p class="text-red-dark" v-if="errors.city">
                    {{ errors.city[0] }}
                  </p>
            </div>
            <div class="field flex w-full">
              <label class="label my-2 w-1/5 self-center text-sm">State</label>
              <div class="control flex flex-col w-3/5">
                 <StateDropdown v-model="form.state" />
                <!-- <select class="input-type my-2" v-model="form.state">
                     <option>TamilNadu</option>
                </select> -->
              </div>
                <p class="text-red-dark" v-if="errors.state">
                    {{ errors.state[0] }}
                  </p>
            </div>
          </div>
          </div>
            
          <div class="flex my-2">
            <div class="w-1/2 field my-2 flex">
              <label class="label my-2 w-1/5 self-center text-sm">Pincode</label>
              <div class="control flex flex-col w-3/5">
                <input class="input-type my-2" type="number"  placeholder="6 digit (0 to 9)" v-model="form.postal_code"> 
              </div>
              <p class="text-red-dark" v-if="errors.postal_code">
                    {{ errors.postal_code[0] }}
                  </p>
            </div>                          
              <div class="w-1/2 field my-2 flex">
                <label class="label my-2 w-1/5 self-center text-sm">Country</label>
                <div class="control flex flex-col w-3/5">
                  <div class="input-type my-2">
                    <CountryDropdown v-model="form.country_id" />
                  </div>
                   <p class="text-red-dark" v-if="errors.country_id">
                    {{ errors.country_id[0] }}
                  </p>
                </div>
              </div>
          </div>
                  <div class="flex my-2">
            <div class="w-1/2 field my-2 flex items-center">
            
              <div class="control flex flex-col w-6">
                <input class="input-type my-2" type="checkbox"  v-model="form.default"> 
              </div>
             <label class="label my-2 self-center text-sm">Set as default</label>
            </div>                          
            
          </div>
            <!-- <div class="flex justify-between">
                <div class="flex self-center">
                <nuxt-link :to="{ name: 'delivery-price_details' }" class="no-underline bg-blue px-4 py-2 text-white rounded">Add Address</nuxt-link>
                 </div>
                </div> -->
            <div class="flex justify-between">
                <div class="flex self-center my-6">
                  <button class=" button is-info is-medium bg-blue px-4 py-2 text-white rounded hover:shadow-lg text-sm">Submit</button>
                  <a href="#" @click="showaddress()" class=" no-underline bg-shop-primary hover:bg-black px-3 py-2 text-white rounded font-semibold outline-none mx-2 text-sm">Close</a>            
                </div>
            </div>            
          </form>
        </div>
				<div class="p-4 border" v-show="listaddress">
					<div class="">
						<h4 class="my-2">List Address</h4>
            <div class="flex flex-wrap">
						<div v-for="address in addresses" class="w-1/2  pr-5 my-3  h-full">
            <div class="px-3 py-2 bg-grey-lightest border">
            <div class="flex justify-between">
						<div>
              <p class="my-2">{{ address.name }} </p>
							<p class="my-2">{{ address.address_1 }}, {{address.address_2}} </p>
							<p class="my-2">{{ address.city }} - {{address.postal_code}}</p>
							<p class="my-2">{{ address.state }} </p>
              </div>
              <div>
                <p class="my-2 text-red text-sm font-semibold" v-if="address.default">Default </p>
              </div>
              </div>
							<div class="justify-between flex items-center mt-3">
						<!-- <button @click="showdiv(address.id)" class="w-64 button is-info is-medium bg-blue px-4 py-2 text-white rounded hover:shadow-lg">Edit</button> -->

                 <a href="#" @click="showdiv(address.id)" class=" no-underline bg-shop-primary hover:bg-black px-4 py-2 text-xs text-white rounded font-semibold outline-none">Edit </a>
						<!-- <a href="#">Delete</a> -->
					    </div>
						</div>
            </div>
						</div>
						</div>
					
				</div>
		 <div class="mx-4 lg:mx-0 w-full" v-show="showeditaddress">
          <h4 class="my-4 uppercase">Edit Address</h4>
          <form class="w-full">
          <div class="flex my-2">
              <div class="w-1/2 field flex">
                <label class="label my-2 w-1/5 self-center text-sm">First Name</label>
                <div class="control w-3/5">
                 <input class="input-type my-2" type="text" v-model="editaddress.firstname">
                </div>
                  <p class="text-red-dark" v-if="errors.postal_code">
                    {{ errors.firstname[0] }}
                  </p>
              </div>
              <div class="w-1/2 field flex">
                <label class="label my-2 w-1/5 self-center text-sm">Last Number</label>
                <div class="control w-3/5">
                 <input class="input-type my-2" type="text" v-model="editaddress.lastname">
                </div>
                 <p class="text-red-dark" v-if="errors.lastname">
                    {{ errors.lastname[0] }}
                  </p>
              </div>
            </div>
             <div class="flex my-2">
              <div class="w-1/2 field flex">
                <label class="w-1/5 self-center label my-2 text-sm">Email</label>
                <div class="control w-3/5">
                 <input class="input-type my-2" type="text" v-model="editaddress.email">
                </div>
                  <p class="text-red-dark" v-if="errors.email">
                    {{ errors.email[0] }}
                  </p>
              </div>
              <div class="w-1/2 field flex">
                <label class="w-1/5 self-center label my-2 text-sm">Mobile Number</label>
                <div class="control w-3/5">
                 <input class="input-type my-2" type="text" v-model="editaddress.mobileno">
                </div>
                 <p class="text-red-dark" v-if="errors.email">
                    {{ errors.mobileno[0] }}
                  </p>
              </div>
            </div>
            <div class="flex my-2">
            <div class="w-1/2 field flex">
              <label class="label my-2 w-1/5 self-center text-sm">Address</label>
              <div class="control w-3/5 flex flex-col">
              
                 <input class="input-type my-2" type="text" v-model="editaddress.address_1">
                  <input class="input-type my-2" type="text" v-model="editaddress.address_2">
              </div>
               <p class="text-red-dark" v-if="errors.email">
                    {{ errors.address_1[0] }}
                  </p>
            </div>
            <div class="w-1/2">
            <div class="w-full field flex">
              <label class="label my-2 w-1/5 self-center text-sm">City</label>
              <div class="control w-3/5">
            
                <select @change="citychanged" class="input-type my-2"
                v-model="editaddress.city">
                    <option value="">Please select</option>
                    <option :value="city.name" v-for="city in cities" :key="city.id">
                      {{ city.name }}
                    </option>
                  </select>
              </div>
               <p class="text-red-dark" v-if="errors.city">
                    {{ errors.city[0] }}
                  </p>
            </div>
            <div class="w-full field flex my-2">
              <label class="label my-2 w-1/5 self-center text-sm">State</label>
              <div class="control w-3/5">
                
                <select @change="statechanged" class="input-type my-2" v-model="editaddress.state">
                  <option value="">Please select</option>
                  <option :value="state.name" v-for="state in states" :key="state.id">
                    {{ state.name }}
                  </option>
                </select>
              </div>
               <p class="text-red-dark" v-if="errors.state">
                    {{ errors.state[0] }}
                  </p>
            </div>
          </div>
          </div>
            <div class="flex my-2">
            <div class="w-1/2 field flex items-center">
              <label class="label my-2 w-1/5 self-center text-sm">Pincode</label>
              <div class="control flex flex-col w-3/5">
                <input class="input-type my-2" type="number"  placeholder="6 digit (0 to 9)" v-model="editaddress.postal_code"> 
              </div>
                <p class="text-red-dark" v-if="errors.postal_code">
                    {{ errors.postal_code[0] }}
                  </p>
            </div>                          
           
            <div class="w-1/2 field my-2 flex">
                <label class="label w-1/5 self-center text-sm">Country</label>
                <div class="control flex  w-3/5">
                  <div class="input-type">
                       <select @change="changed" class="" v-model="editaddress.country_id">
                        <option value="">Please select</option>
                        <option :value="country.id" v-for="country in countries" :key="country.id">
                          {{ country.name }}
                        </option>
                      </select>
                  </div>
                    <p class="text-red-dark" v-if="errors.country_id">
                    {{ errors.country_id[0] }}
                  </p>
                </div>
            </div>
          </div>
            <div class="flex my-2">
            <div class="w-1/2 field my-2 flex items-center">
            <div class="control flex flex-col w-6">
                <input class="input-type my-2" type="checkbox"  v-model="editaddress.default"> 
              </div>
              <label class="label my-2 text-sm self-center">Set as default</label>
              
           
            </div>                          
            
          </div>
            <!-- <div class="flex justify-between">
                <div class="flex self-center">
                <nuxt-link :to="{ name: 'delivery-price_details' }" class="no-underline bg-blue px-4 py-2 text-white rounded">Add Address</nuxt-link>
                 </div>
                </div> -->
            <div class="flex justify-between">
                <div class="flex self-center my-6">
                  

                      <a href="#" @click="edit()" class="text-sm no-underline bg-grey-dark px-4 py-2 text-white rounded-full flex items-center justify-center hover:bg-black uppercase mr-4">Save</a>

                    <a href="#" @click="showaddress()" class="no-underline bg-shop-primary hover:bg-black px-3 py-2 text-white rounded-full font-semibold outline-none text-sm">Show Address</a>

                </div>
            </div>            
          </form>
         </div>

		</div>
	</div>
</template>
<script>
import { mapActions } from 'vuex'
import CountryDropdown from '@/components/form/CountryDropdown'
import StateDropdown from '@/components/form/StateDropdown'
import CityDropdown from '@/components/form/CityDropdown'
	export default {
		layout: 'member',
		data() {
			return {
				addresses: [],
          errors:[],
                  form: {
		          name: '',
		          firstname:'',
		          lastname:'',
		          address_1: '',
		          address_2: '',
		          city: '',
		          state:'',
		          email:'',
		          mobileno:'',
		          postal_code: '',
		          country_id: '',
		         // default: true,
		           default: false,
		        }, 
				editaddress: {
		          id:0,
		          name: '',
		          firstname:'',
		          lastname:'',
		          address_1: '',
		          address_2: '',
		          city: '',
		          state:'',
		          email:'',
		          mobileno:'',
		          postal_code: '',
		          country_id: '',
		        //  default: true,
              default: false,
		           
		        },
		        addaddress:true,
		         listaddress:false,
		         showeditaddress:false,
		         displayaddress:[],
		         editaddress:[],
		         countries: [],
             states:[],
             cities:[]
					}
		},
		components: {
		      CountryDropdown,
          StateDropdown,
          CityDropdown,
		    },
		methods:{
			showdiv(id){
			        this.getaddressdetails(id);
			           this.addaddress=false;
			            this.listaddress=false;
			            this.showeditaddress=true;
			            
			      },

			      showaddress(){
			            this.addaddress=false;
			            this.listaddress=true;
			            this.showeditaddress=false;
			      },

			     /* showeditaddress(){
			            this.addaddress=false;
			            this.listaddress=false;
			            this.showeditaddress=true;
			      },*/
            add()
            {
               this.addaddress=true;
            },
		       async getCountries () {
		        let response = await this.$axios.$get('countries')
		        this.countries = response.data
		      },
			async getaddresses(){
      
		        let addresses = await this.$axios.$get('addresses')
		         this.addresses=addresses;
            
		           if(Object.keys(this.addresses).length>0){
			              this.listaddress=true;
			              this.addaddress=false;
			              this.showeditaddress=false;
			            }
			            else{
			              this.listaddress=false;
			              this.addaddress=true;
			              this.showeditaddress=false;
			            }
		         
		         },
		            async store () {
				        this.form.name=this.form.firstname + ' ' + this.form.lastname;
				        let response = await this.$axios.$post('addresses', this.form).then((response) => {
                                   
                         if(response.message!=="Saved Successfully"){
                             this.getaddresses();

                         }
                           else{
                          
                            this.success="Saved Successfully";
                            this.form='';
                              
                           }
                          }).catch((error) => {
                             this.errors=error.response.data.errors;
                          });
				     
				      },
		         async edit () {
			         this.editaddress.name=this.editaddress.firstname + ' ' + this.editaddress.lastname;
			        let response = await this.$axios.$post('addresses/update/'+this.editaddress.id, 
			                                                                          this.editaddress);
			        this.showeditaddress=false;
			        this.getaddresses();        

			      },
			       async getaddressdetails(id)
				      {
				        let response = await this.$axios.$get('addresses/edit/' + id);
				        this.editaddress=response.data;
				        this.editaddress.id=response.data.id;
				        this.editaddress.country_id=response.data.country.id; 

				      },
				      changed ($event) {
				        this.$emit('input', $event.target.value)
				      },
               async getStates() {
                let response = await this.$axios.$get('states')
                this.states = response
              },

              async getCities () {
                let response = await this.$axios.$get('cities')
                this.cities = response;
              },

              statechanged ($event) {
                this.$emit('input', $event.target.value)
              },

              citychanged ($event) {
                this.$emit('input', $event.target.value)
              }
		},
		 created(){
           this.getaddresses();
           this.getCountries();
           this.getStates();
           this.getCities();
        }
	}
</script>
<style>
  select{
    outline: none;
    width:100%;
  }
  </style>