<template>
  <div class="flex my-4 bg-white container mx-auto">
    <div class="w-1/5 px-4 border-r border-grey my-4">
      <img src="/images/profile.png" class="w-48">
      <p class="my-2 text-blue-dark font-semibold">{{ seller.name }} </p>
      <p class="my-2 text-grey-dark">{{ seller.email }} </p>
      <p class="text-sm">Lorem Ipsum is simply dummy text of the printing dummy text of the printing</p>
    </div>
    <div class="w-4/5 px-4 my-4">
      <div class="flex justify-between">
        <div>
          <p class="font-semibold my-2">Company Name</p>
          <div class="flex">
            <div><img src="/images/pin.svg" class="w-4 mr-2"></div>
            <div class="flex flex-col">
              <p class="text-sm">Address line 1</p>
              <p class="text-sm">Address line 2</p>
              <p class="text-sm">City</p>
              <p class="text-sm">State</p>
              <p class="text-sm">Country</p>
            </div>
          </div>
             <div class="flex my-4">            
              <img src="/images/star_half.svg" class="w-4 h-4 mr-2">
              <img src="/images/star_half.svg" class="w-4 h-4 mr-2">
              <img src="/images/star_half.svg" class="w-4 h-4 mr-2">
              <img src="/images/star.svg" class="w-4 h-4 mr-2">
          </div>  
        </div>
        <div>
          <div class="flex mb-4 justify-end">
              <img src="/images/facebook.svg" class="w-4 h-4 mr-2">
              <img src="/images/instagram.svg" class="w-4 h-4 mr-2">
              <img src="/images/twitter.svg" class="w-4 h-4 mr-2">
          </div>
          <div>
            <a href="" class="bg-blue-dark text-white text-sm py-2 px-4 font-semibold no-underline">Write a Review</a>
          </div>
        </div>
  </div>  
        <div class="">
             <div class="tabs-component w-full my-10">
              <Tabs :options="{ useUrlFragment: false }" @clicked="tabClicked" @changed="tabChanged">
                  <Tab name="Product">
                      <div class="flex flex-wrap">
                        <div class="w-1/5 border border-grey-dark">
                           <img src="/organicproduct/item1.jpg" class="">
                        </div>
                        <div class="w-1/5 border border-grey-dark">
                           <img src="/organicproduct/item1.jpg" class="">
                        </div>
                        <div class="w-1/5 border border-grey-dark">
                           <img src="/organicproduct/item1.jpg" class="">
                        </div>
                        <div class="w-1/5 border border-grey-dark">
                           <img src="/organicproduct/item1.jpg" class="">
                        </div>
                        <div class="w-1/5 border border-grey-dark">
                           <img src="/organicproduct/item1.jpg" class="">
                        </div>
                        <div class="w-1/5 border border-grey-dark">
                           <img src="/organicproduct/item1.jpg" class="">
                        </div>
                        <div class="w-1/5 border border-grey-dark">
                           <img src="/organicproduct/item1.jpg" class="">
                        </div>
                      </div>
                  </Tab>
                  <Tab name="Rating">       
                       <div class="border-b border-gray-600 p-4">
                           <div class="flex justify-between">
                           <div>
                            <div class="my-2">
                              <img src="/images/star_half.svg" class="w-4 h-4 mr-2">
                              <img src="/images/star_half.svg" class="w-4 h-4 mr-2">
                              <img src="/images/star_half.svg" class="w-4 h-4 mr-2">
                              <img src="/images/star.svg" class="w-4 h-4 mr-2">
                            </div>
                            <p class="my-2">nice product</p>
                            <p class="my-2">12-12-12</p>
                            </div>
                            <div>
                              <img src="/images/user.png" class="h-16 rounded-full bg-white">
                              <p class="text-right my-2">karti</p>
                            </div>
                            </div>
                        
                    </div>          
                  </Tab>
                  <Tab name="policy">
                    <div class="p-8 border-b border-gray-600">
                        <p class="text-sm text-grey-darker">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>           
                  </Tab>
              </Tabs>
             </div> 

    </div>
  </div>
</div>
</template>
<script>
   import Vue from 'vue';
   import {Tabs, Tab} from 'vue-tabs-component';
export default{
  layout:'blank',
  data() {
    return {
      seller: [],
      rooturl:process.env.BASEURL,
      slug:this.$route.params.slug,
       tab:'item1',
    }
  },
  components: {
      Tabs,
      Tab
    },
  methods:{
    async getsellerdetails(){
      console.log(this.rooturl + '/sellers/' + this.slug);
      let response = await this.$axios.$get(this.rooturl + '/sellers/' + this.slug);
      this.seller= response.data;
      
    },
     tabChanged (selectedTab) {
            //console.log('Tab changed to:' + selectedTab.tab.name);
        },
  },
  created(){
    this.getsellerdetails();
  }
  // async asyncData ({ params, app }) {
  //  //let response = await app.$axios.$get(`sellers/${params.slug}`)
 //      let response = await app.$axios.$get(`sellers/${params.slug}`)
      
 //      return {
 //        seller: response.data
 //      }
 //    }


}
</script>

<style>
li.tabs-component-tab {
    width: 50%;
    }
ul.tabs-component-tabs {
    display: flex;
    list-style: none;
    padding: 0px;
}
.tabs-component-panels {
    padding: 1rem;
    background-color: #f3f3f3;
}
a.tabs-component-tab-a {
    text-decoration: none;
    color:grey-dark;
    font-weight: 700;
    text-align: center;
}
li.tabs-component-tab {
    width: 50%;
    background: none;
    display: inline-block;
    cursor: pointer;
    padding: 1rem;
    border-bottom: 2px solid #a7a7a7;
    text-align: center;
}
.tabs-component-tab.is-active {
   border-top: 2px solid #8ec33f00;
    border-left: 2px solid #8ec33f00;
    border-right: 2px solid #8eb93500;
    border-bottom: 2px solid#ff5139;
}
.tabs-component-tab.is-active a{
    color: #ff5139;
    font-weight:700;
}
.tabs-component-tab:hover a{
    color:grey;
    font-weight:700;
}
.tabs-component-tab a {
    color: black;
}
header
{
  border-bottom: 5px solid #8ec33f;
}
.bg-custom
{
  background-color:#8ec33f; 
}
.text-custom
{
  color:#8ec33f;
}
.text-customhover:hover
{
 color:#8ec33f; 
 font-weight: 700;
}
.bg-customhover:hover
{
 background-color:#8ec33f;
}
.dropdown {
  overflow: hidden;
}
.navbar a:hover, .dropdown:hover .dropbtn {
border-bottom: 1px solid white;
}
.dropdown-content {
  display: none;
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.hover-zoom {
    float: left;
    transition: all 0.3s ease-in-out;
    background-size: 110%;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
}
.hover-zoom:hover {
  background-size: 100%;
}
.icon .icon-1{
display:none;
}
.icon:hover .icon-1 {
  display:block;
}
.dropdown {
  overflow: hidden;
}
.navbar a:hover, .dropdown:hover .dropbtn {
border-bottom: 1px solid white;
}
.dropdown-content {
  display: none;
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.hover-zoom {
    float: left;
    transition: all 0.3s ease-in-out;
    background-size: 110%;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
}
.hover-zoom:hover {
  background-size: 100%;
}
.icon .icon-1{
display:none;
}
.icon:hover .icon-1 {
  display:block;
}
ul.tabs-component-tabs
 {
   display: flex
 }
 li.tabs-component-tab {
    width: 50%;
}
.tabs-component-panels {
    margin-top: 0rem;
}

@media only screen and (max-width: 600px) and (min-width: 300px)
{
ul.tabs-component-tabs
 {
    flex-direction: column;
 }
 li.tabs-component-tab {
    width: 100%;
}
.tabs-component-panels {
    margin-top: 1rem;
}
}
</style>