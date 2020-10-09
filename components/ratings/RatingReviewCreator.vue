<template>
  <div id="app">
  <h4 class="my-4 uppercase">Rate and Review the product</h4>
   <div v-if="this.success!=null" 
   class="w-1/2 my-4 bg-red-light p-4 flex justify-between" id="success-alert">
    <p class="text-white">{{this.success}}</p>
    <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="close()">
   </div>
   <form action="#" @submit.prevent="store" class="custom-form">
         <div class="flex my-2">
              <div class="w-1/2 field flex">
                <label class="label my-2 w-64 self-center">Rate the product</label>
                <div class="control w-1/2 flex flex-col">
                <StarRating v-model="form.rating"></StarRating>               
                 <p class="help is-danger" v-if="errors.rating">
                    {{ errors.rating[0] }}
                  </p>
                   </div>
              </div>             
            </div>
            <div class="field my-2 flex">
              <label class="label my-2 w-64 self-center">Description</label>
              <div class="control flex flex-col w-1/2">
                <textarea class="input-type my-2" cols="5" rows="5" v-model="form.description"></textarea>
               <p class="help is-danger" v-if="errors.description">
                    {{ errors.description[0] }}
                  </p>
              </div>
            </div>
            <div class="field my-2 flex">
              <label class="label my-2 w-64">Title</label>
              <div class="control w-1/2 flex flex-col">
               <input class="input-type my-2" type="text" v-model="form.title">
                <p class="help is-danger" v-if="errors.title">
                    {{ errors.title[0] }}
                  </p>
              </div>
            </div>
            <div class="field my-2 flex">
              <label class="label my-2 w-64">Name</label>
              <div class="control w-1/2 flex flex-col">
               <input class="input-type my-2" type="text" v-model="form.customer_name">
              </div>
            </div>   

            <div class="field my-2 flex">
              <label class="label my-2 w-64">Add Product Image</label>
              <div class="control flex flex-xol w-1/2">
               <div class="dropzone-img w-full">
                  <dropzone  id="foo" ref="el" :options="options" :destroyDropzone="true" v-on:vdropzone-success="showSuccess" v-on:vdropzone-sending="sendingEvent" v-on:vdropzone-thumbnail="showthumbnail"></dropzone>
                </div>
              </div>
            </div>                         
            <input type="hidden" v-model="form.imagecount" name=""> 
            <div class="flex justify-between">
                <div class="flex self-center my-6">
                  <button class="w-64 no-underline bg-blue px-4 py-2 text-white rounded uppercase hover:shadow-lg">Submit</button>                  
                </div>
            </div>            
   </form>
 </div>
</template>

<script>
  import StarRating from 'vue-star-rating'
   import Dropzone from 'nuxt-dropzone'
  import 'nuxt-dropzone/dropzone.css'
  export default {
     props:['productid'],
    data () {
      return {
       
         form: {
          user_id: this.$auth.user.id,
          customer_name: '',
          title: '',
          rating: '',
          description: '',
          entityid:'',
          entityname:'product',
          imagecount:''
        },
        imagefile:[],
       success:null,
       errors:[],
         // See https://rowanwins.github.io/vue-dropzone/docs/dist/index.html#/props
      options: {
        url: "http://httpbin.org/anything",
        addRemoveLinks: true,
        maxFiles: 10,
      },
       
      }
    },
 components: {
    StarRating,
    Dropzone,
  },
    

    methods: {
     async close(){
      
         this.success=null;
      },
      async store () {
       let formData = new FormData();
        formData.append('user_id',this.form.user_id);
        formData.append('customer_name',this.form.customer_name);
        formData.append('title',this.form.title);
         formData.append('rating',this.form.rating);
         formData.append('description',this.form.description);
         formData.append('entity_id',this.form.entityid);
         formData.append('entity_name','product');
         for(let i=0; i<this.imagefile.length;i++)
        {
            if(typeof this.imagefile[i] !== "undefined")
           {
             formData.append('review_image'+i,this.imagefile[i]);
           }
           else
           {
             formData.append('review_image'+i,'');
           }

          /// formData.append('product_image',this.form.imagefile);
        }
         formData.append('imagecount',this.imagefile.length);

        let responses = await this.$axios.$post('addrating', formData,{headers: {
                                              'Content-Type': 'multipart/form-data'
                                          }}).then((response) => {
                                              if(response.message!=="Saved Successfully"){
                                              this.success=response.message;
                                              
                                           }
                                           else{
                                              this.form="";

                                             //  //console.log(response.data);
                                             //  this.$nuxt.$emit('savemessage',response.message);
                                             this.$router.replace({
                                                name: 'stores',
                                               });
                                              
                                           }
                                          }).catch((error) => {
                                             this.errors = error;
                                          });
                  

      
      },
       showSuccess(file,response){
            // console.log(response);
            // console.log(file);
         },
         showthumbnail(file,dataUrl)
         {
           // console.log(file);
           //  console.log(dataUrl);
         },
          removeAllFiles() {
          this.$refs.el.dropzone.removeAllFiles();
        },
        sendingEvent (file, xhr, formData) {
       
          //console.log(file);
          this.imagefile.push(file);
         },

   
    },
    created () {
     this.form.entityid=this.productid;
    },
  
  }
</script>
<style>
svg.vue-star-rating-star 
{
   height: 30px;
   width: 30px;
}
</style>