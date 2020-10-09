<template>
     <div class="w-full container mx-auto bg-white my-3 px-3 py-3">
                     <div class="flex ">
                       <div class="w-full lg:w-1/3">
                         <div class="border">
                           <img :src="this.image" class="w-full px-1 py-1">
                           <div class="flex items-center px-2 py-3">
                             <div class="w-1/2 border-r"><img src="/images/gift.png" class=""></div>
                             <div class="w-1/2 px-5"><h1 class="text-grey-darker font-medium">₹&nbsp; {{this.amt}}</h1></div>
                           </div>
                           <div class=" py-4  border-t">
                             <p class="text-base px-4 text-grey-darker">{{this.message}}</p>
                           </div>
                         </div>
                       </div>
                       <div class="w-full lg:w-2/3">
                         <div class="px-8">
                         <div class="border-b pb-4">
                           <h1 class="font-medium">Gegocart Pay eGift Card</h1>
                           <p class="text-sm text-grey-darker py-1">by <span class="text-blue-dark">Gegocart</span></p>
                           <ul class="list-reset flex py-1"><li><img src="/images/star_fill.svg" class="w-4 h-4 mr-1"></li> <li><img src="/images/star_fill.svg" class="w-4 h-4 mr-1"></li> <li><img src="/images/star_fill.svg" class="w-4 h-4 mr-1"></li> <li><img src="/images/star_line.svg" class="w-4 h-4 mr-1"></li> <li><img src="/images/star_line.svg" class="w-4 h-4 mr-1"></li></ul>
                           </div>
                           <div class="my-3">
                             <div class="py-2 border-b">
                               <h4 class="py-2 text-base">1.Select a style for your Gift Card</h4>
                               <p class="text-sm py-3"><span class="text-grey-dark">Design:</span><span class=" mx-2 font-semibold">Happy Birthday - From all of us</span></p>
                               <ul class="list-reset flex py-3">
                                 <li class="mr-2"><a href="#"><img @click="showimg" src="/images/b1.jpg" class="w-24 h-24 border border-shop-primary p-1 rounded"></a></li>
                                 <li class="mr-2"><a href="#"><img @click="showimg" src="/images/b2.jpg" class="w-24 h-24 border p-1 rounded"></a></li>
                                  <li class="mr-2"><a href="#"><img @click="showimg" src="/images/b3.jpg" class="w-24 h-24 border p-1 rounded"></a></li>
                                  <li class="mr-2"><a href="#"><img @click="showimg" src="/images/b4.png" class="w-24 h-24 border p-1 rounded"></a></li>
                                  <li class="mr-2"><a href="#"><img @click="showimg"  src="/images/b5.jpg" class="w-24 h-24 border p-1 rounded"></a></li>
                                  <li class="mr-2"><div class="w-24 h-24 border rounded text-sm flex items-center justify-center "><a href="#" class="text-blue-dark no-underline">See more</a></div></li>
                               </ul>
                             </div>
                             <div class="py-2 border-b">
                               <h4 class="py-2 text-base">2. Enter your Gift Card details</h4>
                          <div class="py-3">
                          <div class="flex items-center py-3">
                          <div class="w-1/6"><label class="text-xs  font-semibold">Amount</label></div>
                          <div class="w-5/6">
                          <ul class="list-reset flex items-center">
                          <li><button  @click="giftamount" value="500" class="text-sm text-black no-underline border rounded py-1 px-3 mr-2"  >₹&nbsp;500</button></li>
                          <li><button @click="giftamount" value="1000"  class="text-sm text-black no-underline border rounded py-1 px-3 mr-2 border-shop-primary" >₹&nbsp;1000</button></li>
                          <li><button @click="giftamount" value="2000" class="text-sm text-black no-underline border rounded py-1 px-3 mr-2 " >₹&nbsp;2000</button></li>
                          <li><button @click="giftamount" value="5000" class="text-sm text-black no-underline border rounded py-1 px-3 mr-2" >₹&nbsp;5000</button></li>
                          <li><button @click="giftamount" value="7500" class="text-sm text-black no-underline border rounded py-1 px-3 mr-2" >₹&nbsp;7,500</button></li>
                         <!--  <li><button @click="giftamount" value="500" class="text-sm text-black no-underline border rounded py-1 px-3 mr-2" >₹&nbsp;10,00</button></li> -->
                          <li><input v-on:keyup="gift_amount"  v-model="amount" type="text" name="amount" class="text-sm text-black no-underline border rounded py-1 px-3 mr-2 w-32" placeholder="Other amount"></li>
                          </ul></div>
                          </div>
                           <div class="flex items-center py-3">
                          <div class="w-1/6"><label class="text-xs  font-semibold">Delivery</label></div>
                          <div class="w-5/6">
                          <ul class="list-reset flex items-center">
                          <li><a href="#" class="text-sm text-black no-underline border rounded py-1 px-3 mr-2 border-shop-primary" >Email</a></li>
                          <li><a href="#" class="text-sm text-black no-underline border rounded py-1 px-3 mr-2" >Share via link</a></li>
                         
                          </ul></div>
                          </div>
                          <div class="flex items-baseline py-3">
                    <div class="w-1/6"><label class="text-xs font-semibold">To</label></div>
                    <div class="w-5/6">
                    <input type="text" v-model="email"  class="text-xs text-black no-underline border rounded py-2 px-3 w-64" placeholder="Enter Recipient e-mail address">
                    <p class="text-xs text-grey-dark py-1">Max of 25 Recipients</p>
                    </div>
                          </div>
                          <div class="flex items-center py-3">
                    <div class="w-1/6"><label class="text-xs font-semibold">From</label></div>
                    <div class="w-5/6">
                    <input type="text" v-model="address" name="address" class="text-xs text-black no-underline border rounded py-2 px-3 w-64" placeholder="">
                   
                    </div>
                          </div>
                             <div class="flex items-center py-3">
                    <div class="w-1/6"><label class="text-xs font-semibold">Message</label></div>
                    <div class="w-5/6">
                    <textarea type="text" v-model="message" name="address" class="text-xs text-black no-underline border rounded py-2 px-3 w-64" placeholder="" rows="3"></textarea>
                   
                    </div>
                          </div>
                           <div class="flex items-center py-3">
                    <div class="w-1/6"><label class="text-xs font-semibold">Quantity</label></div>
                    <div class="w-5/6">
                     <input type="number" v-model="quantity" name="address" class="text-xs text-black no-underline border rounded py-2 px-3 w-16">
                   
                    </div>
                          </div>
                           <div class="flex items-center py-3">
                    <div class="w-1/6"><label class="text-xs font-semibold">Delivery Date</label></div>
                    <div class="w-5/6">
                    <div>
                    <img src="/images/calendar.svg" class="w-4 h-4 absolute mx-2 my-2">
                       <input type="date" v-model="date" name="address" class="text-xs text-black no-underline border rounded py-2 px-3 w-64 pl-8">
                    </div>
                   
                    </div>
                          </div>

                          </div>
                          </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
</template>
<script>

  export default {
   
    data() {
      return {
      
        amount:'',
        image:'/images/birthday.png',
        amt:'1000',
        email:'',
        address:'',
        message:'Hope you enjoy this Gift Card!',
        quantity:1,
        date:'',
        products:{},
        productvariations:[],
      }
    },
    methods:{
      giftamount(event)
      {
        this.amount='';
        this.amt=event.target.value;
       },
      gift_amount(event){
        this.amt=event.target.value;

        if(this.amt==''){
          this.amt=0;
        }
        if(this.amt>10000)
        {
          alert('This is over the ₹10,000 maximum');
        }
      },
      showimg(event){
        this.image=event.target.src;
       // alert(event.target.src);
      },
     
     
    },
    created(){
   console.log(this.amt);

    }
  }
</script>