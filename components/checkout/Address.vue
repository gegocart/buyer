<template>
  <div>
     <div class="w-full" v-show="addaddress">
         <h4 class="my-4 uppercase">Add Address</h4>
          <form action="" @submit.prevent="store" class="w-full">
          <div class="flex my-2">
              <div class="w-1/2 field mr-2">
                <label class="label text-shop-primary my-2 text-sm">First Name</label>
                <div class="control">
                 <input class="input-type my-2" type="text" v-model="form.firstname">
                </div>
              </div>
              <div class="w-1/2 field">
                <label class="label text-shop-primary my-2  text-sm">Last Name</label>
                <div class="control">
                 <input class="input-type my-2" type="text" v-model="form.lastname">
                </div>
              </div>
            </div>
             <div class="flex my-2">
              <div class="w-1/2 field mr-2">
                <label class="label text-shop-primary my-2  text-sm">Email</label>
                <div class="control">
                 <input class="input-type my-2" type="text" v-model="form.email">
                </div>
              </div>
              <div class="w-1/2 field">
                <label class="label text-shop-primary my-2  text-sm">Mobile Number</label>
                <div class="control">
                 <input class="input-type my-2" type="text" v-model="form.mobileno">
                </div>
              </div>
            </div>
            <div class="field my-2">
              <label class="label text-shop-primary my-2  text-sm">Address</label>
              <div class="control">
               <!--  <textarea class="input-type my-2" v-model="form.address_1"></textarea> -->
                 <input class="input-type my-2" type="text" v-model="form.address_1">
                  <input class="input-type my-2" type="text" v-model="form.address_2">
              </div>
            </div>
            <div class="flex my-2">
            <div class="field w-1/2 mr-2">
              <label class="label text-shop-primary my-2  text-sm">City</label>
              <div class="control">
                <CityDropdown v-model="form.city" />
                <!-- <select class="input-type my-2" v-model="form.city">
                    <option>Madurai</option>
                    <option>Theni</option>
                </select> -->
              </div>
            </div>
            <div class="field w-1/2">
              <label class="label text-shop-primary my-2  text-sm">State</label>
              <div class="control">
                <StateDropdown v-model="form.state" />
                <!-- <select class="input-type my-2" v-model="form.state">
                     <option>TamilNadu</option>
                </select> -->
              </div>
            </div>
          </div>
          <div class="flex my-2">
            <div class="field mr-2 w-1/2">
              <label class="label text-shop-primary my-2  text-sm">Pincode</label>
              <div class="control">
                <input class="input-type my-2" type="number"  placeholder="6 digit (0 to 9)" v-model="form.postal_code"> 
              </div>
            </div>                          
           
            <div class="field w-1/2">
              <div class="field">
                <label class="label text-shop-primary text-sm">Country</label>
                <div class="control">
                  <div class="input-type my-2">
                    <CountryDropdown v-model="form.country_id" />
                  </div>
                </div>
              </div>
            </div>
          </div>
            <!-- <div class="flex justify-between">
                <div class="flex self-center">
                <nuxt-link :to="{ name: 'delivery-price_details' }" class="no-underline bg-blue px-4 py-2 text-white rounded">Add Address</nuxt-link>
                 </div>
                </div> -->
            <div class="flex justify-between">
                <div class="flex self-center my-6">
                  <button class="w-48 text-sm no-underline bg-shop-primary hover:bg-black p-3 text-white rounded-full font-semibold outline-none">Add Address</button>                  
                </div>
            </div>            
          </form>
        </div>

         <div class="mx-4 lg:mx-0 w-full" v-show="listaddress">
         <div class="flex justify-between items-center">
               <h4 class="my-4 uppercase">Delivery  Address</h4>
               <div>
               <a href="#" class=" bg-blue px-3 py-1 mx-2 text-white rounded hover:shadow-lg no-underline text-sm">Add </a>
               <a href="#" class=" no-underline bg-grey-dark  px-3 py-1 text-sm text-white rounded font-medium outline-none hover:bg-black" @click="changeDeliveryAddress()">Change</a>
               </div>
               </div>
             <!--   <div v-for="address in displayaddress"> -->
               <div v-if="Object.keys(this.address).length>0">
                  <div class="w-full flex my-4">
                    <div class="w-2/5 md:w-1/5 lg:w-1/5">
                      <p >Full Name</p>
                    </div>
                    <div class="w-3/5 md:w-4/5 lg:w-4/5">
                      <p>{{ address.name }}</p>
                    </div>
                  </div>
                   <div class="w-full flex my-4">
                    <div class="w-2/5 md:w-1/5 lg:w-1/5">
                      <p>Address</p>
                    </div>
                    <div class="w-3/5 md:w-4/5 lg:w-4/5">
                      <p>{{ address.address_1 }}</p>
                    </div>
                  </div>
                  <div class="w-full flex my-4">
                    <div class="w-2/5 md:w-1/5 lg:w-1/5">
                      <p>City</p>
                    </div>
                    <div class="w-3/5 md:w-4/5 lg:w-4/5">
                      <p>{{ address.city }}</p>
                    </div>
                  </div>
                  <div class="w-full flex my-4">
                    <div class="w-2/5 md:w-1/5 lg:w-1/5">
                      <p>Postal Code</p>
                    </div>
                    <div class="w-3/5 md:w-4/5 lg:w-4/5">
                      <p>{{ address.postal_code }}</p>
                    </div>
                  </div> 
              <!--     <button class="w-64 no-underline bg-shop-primary hover:bg-black p-3 text-white rounded-full font-semibold outline-none" @click="showdiv(address.id)">
                    Edit Address
                  </button>   -->   

                   <a href="#" @click="showdiv(address.id)" class="w-64 no-underline bg-shop-primary hover:bg-black px-4 py-1 text-sm text-white rounded font-semibold outline-none">Edit</a>          
             </div>
         </div>

         <!-- List of address -->
            <div class="border border-grey p-4" v-show="change_address">
        
            <h4 class="my-2">List Address</h4>
            <div v-for="address in addresses">
            <div class="flex my-4">
            <div class="">
           
           <input @click="setDeliveryAddress(address.id)" type="radio" v-model="select_delivery" name="select_delivery" :value="address.id" class="mt-1">
         
              </div>
            <div class="mx-4">
               <p class="mb-2">{{ address.name }} </p>
              <p class="mb-2">{{ address.address_1 }}, {{address.address_2}} </p>
              <p class="mb-2">{{ address.city }} - {{address.postal_code}}</p>
              <p class="mb-2">{{ address.state }} </p>
              </div>
              </div>
            </div>
            
         
          
        </div>
         <!-- End -->
         <div class="mx-4 lg:mx-0 w-full" v-show="showeditaddress">
          <h4 class="my-4 uppercase">Edit Address</h4>
          <form action="" class="w-full">
          <div class="flex my-2">
              <div class="w-1/2 field mr-6">
                <label class="label text-shop-primary my-2 text-sm">First Name</label>
                <div class="control">
                 <input class="input-type my-2" type="text" v-model="editaddress.firstname">
                </div>
              </div>
              <div class="w-1/2 field">
                <label class="label text-shop-primary my-2 text-sm">Last Number</label>
                <div class="control">
                 <input class="input-type my-2" type="text" v-model="editaddress.lastname">
                </div>
              </div>
            </div>
             <div class="flex my-2">
              <div class="w-1/2 field mr-6">
                <label class="label text-shop-primary my-2 text-sm">Email</label>
                <div class="control">
                 <input class="input-type my-2" type="text" v-model="editaddress.email">
                </div>
              </div>
              <div class="w-1/2 field">
                <label class="label text-shop-primary my-2 text-sm">Mobile Number</label>
                <div class="control">
                 <input class="input-type my-2" type="text" v-model="editaddress.mobileno">
                </div>
              </div>
            </div>
            <div class="field my-2">
              <label class="label text-shop-primary my-2 text-sm">Address</label>
              <div class="control">
               <!--  <textarea class="input-type my-2" v-model="form.address_1"></textarea> -->
                 <input class="input-type my-2" type="text" v-model="editaddress.address_1">
                  <input class="input-type my-2" type="text" v-model="editaddress.address_2">
              </div>
            </div>
            <div class="field my-2">
              <label class="label text-shop-primary my-2 text-sm">City</label>
              <div class="control">
                <select @change="citychanged" class="w-full bg-grey-lighter my-2 p-4 outline-none"
                v-model="editaddress.city">
                    <option value="">Please select</option>
                    <option :value="city.name" v-for="city in cities" :key="city.id">
                      {{ city.name }}
                    </option>
                  </select>
              </div>
            </div>
            <div class="field my-2">
              <label class="label text-shop-primary my-2 text-sm">State</label>
              <div class="control">
                <select @change="statechanged" class="w-full bg-grey-lighter my-2 p-4 outline-none" v-model="editaddress.state">
                  <option value="">Please select</option>
                  <option :value="state.name" v-for="state in states" :key="state.id">
                    {{ state.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="field my-2">
              <label class="label text-shop-primary my-2 text-sm">Pincode</label>
              <div class="control">
                <input class="input-type my-2" type="number"  placeholder="6 digit (0 to 9)" v-model="editaddress.postal_code"> 
              </div>
            </div>                          
           
            <div class="field my-2">
              <div class="field">
                <label class="label text-shop-primary text-sm">Country</label>
                <div class="control">
                  <div class="input-type my-2">
                   <label class="label ">Country</label>
                      <div class="">
                       <select @change="changed" class="w-full bg-grey-lighter my-2 p-4 outline-none" v-model="editaddress.country_id">
                        <option value="">Please select</option>
                        <option :value="country.id" v-for="country in countries" :key="country.id">
                          {{ country.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="flex justify-between">
                <div class="flex self-center">
                <nuxt-link :to="{ name: 'delivery-price_details' }" class="no-underline bg-blue px-4 py-2 text-white rounded">Add Address</nuxt-link>
                 </div>
                </div> -->
            <div class="flex justify-between">
                <div class="flex self-center my-6">
               <!--    <button @click="edit()" class="text-sm no-underline bg-grey-dark px-4 py-2 text-white rounded-full w-48 hover:bg-black uppercase mr-4">Save</button>
                   <button @click="showaddress" class="w-64 no-underline bg-shop-primary hover:bg-black p-3 text-white rounded-full font-semibold outline-none">Show Address </button> -->

                   <a href="#" @click="edit()" class="text-sm no-underline bg-grey-dark px-4 py-2 text-white rounded-full  flex items-center justify-center hover:bg-black uppercase mr-4">Save</a>

                    <a href="#" @click="showaddress()" class=" no-underline bg-shop-primary hover:bg-black px-3 py-2 text-sm text-white rounded-full  outline-none">Show Address</a>

                </div>
            </div>            
          </form>
         </div>
 </div>
        <!-- <div class="">
           <div class="">

          <PaymentMethods
            :payment-methods="paymentMethods"
            v-model="form.payment_method_id"
          />
           </div>
        </div> -->
       <!--  <div class="w-1/2">
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
        </div> -->
</template>

<script>
  import CountryDropdown from '@/components/form/CountryDropdown'
  import StateDropdown from '@/components/form/StateDropdown'
  import CityDropdown from '@/components/form/CityDropdown'
 import PaymentMethods from '@/components/checkout/Payment'
   export default {
    layout: 'home',
    data () {
      return {
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
          default: true,
          address_id:'',
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
          default: true,
          via:'delivery'
           
        },
       // signinshow:true,
         addaddress:true,
         listaddress:false,
         showeditaddress:false,
         displayaddress:[],
         editaddress:[],
         countries: [],
         states:[],
         cities:[],
         addresses: [],
         address: [],
         change_address:false,
         select_delivery:null,
      }
    },

    components: {
      CountryDropdown,
      StateDropdown,
      CityDropdown,
     // PaymentMethods
    },

    methods: {
      async store () {
        this.form.name=this.form.firstname + ' ' + this.form.lastname;
        let response = await this.$axios.$post('addresses', this.form)
        this.getAddress();
        //this.$emit('created', response.data)
        this.$nuxt.$emit('getaddresses',true);        

      },

      async edit () {
        this.editaddress.name=this.editaddress.firstname + ' ' + this.editaddress.lastname;
        let response = await this.$axios.$post('addresses/update/'+this.editaddress.id, 
                                                                          this.editaddress);
        this.showeditaddress=false;
        this.getAddress();
        //this.$emit('created', response.data)
        this.$nuxt.$emit('getaddresses',true);        

      },


      async getCountries () {
        let response = await this.$axios.$get('countries')
        this.countries = response.data
      },

      async getaddressdetails(id)
      {
        let response = await this.$axios.$get('addresses/edit/' + id);
        this.editaddress=response.data;
        this.editaddress.id=response.data.id;
        this.editaddress.country_id=response.data.country.id;       
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
      },


      changed ($event) {
        this.$emit('input', $event.target.value)
      },

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

      showdiveditaddress(){
            this.addaddress=false;
            this.listaddress=false;
            this.showeditaddress=true;
      },

      async getAddress(){
             //var userid=this.$auth.user.id;
            let response = await this.$axios.$get('getdefaultaddress')
        //    this.displayaddress=response.data;
            this.displayaddress=response.data;

         if(Object.keys(this.displayaddress).length>0){
                this.address=response.data[0];
               //  this.form.address_id=this.address.id;
               this.$nuxt.$emit('address_id',this.address.id); 
              this.$nuxt.$emit('getaddresses',true); 
              this.listaddress=true;
              this.addaddress=false;
            }
            else{
              this.listaddress=false;
              this.addaddress=true;
            }
           
      },
        async getAddresses(){
      
            let addresses = await this.$axios.$get('addresses');
             this.addresses=addresses;
                      
             },
        changeDeliveryAddress()
        {
                    this.change_address=true;
                    this.listaddress=false;
                    this.addaddress=false;
                    this.showeditaddress=false;
                
             
        },
             setDeliveryAddress(id)
             {
             //  this.form.address_id=id;
                this.$nuxt.$emit('address_id',id); 
                   this.address=this.addresses[id];
                    this.change_address=false;
                    this.listaddress=true;
                    this.addaddress=false;
                    this.showeditaddress=false;
             }
    },
    created(){
       this.getAddress();
       this.getAddresses();
       this.getCountries();
       this.getStates();
       this.getCities();
    }
  }
</script>         
<style>
  select
  {
    width:100%;
    outline: none;
  }
</style>