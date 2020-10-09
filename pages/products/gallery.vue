<template>
     
    <div  v-if="items.length>0">
       <lingallery :width="width" :height="height" :items="items"/>
    </div>
    
</template>
<script>

 // import Lingallery from 'lingallery';
  export default {
     props:['slug'],
    data() {
      return {
        params:this.$route.params.slug,
        width:280,
        height:340,
        items:[],
        rooturl:process.env.SITEURL,
      //   itemstest: [{
      //     src: '../product/item1.png',
      //     thumbnail: '../product/item1.png',
      //   },
      //   {
      //     src: '../product/item2.png',
      //     thumbnail: '../product/item2.png'
      //   }
      // ]
      }
    },

    components: {
     // Lingallery
    },
    methods:{
       async getproduct()
        {
           let response = await this.$axios.$get(`products/` +this.params);
         
           this.product=response.data;
           for(var i=0;i<this.product.productgallery.length;i++){
         
            this.items.push({src:this.rooturl + '/uploads/' + this.product.productgallery[i].imagepath,thumbnail:this.rooturl +this.product.productgallery[i].thumbnailimage});
          
           }
            //console.log(this.itemsvalue);
                  
           //var stringify = JSON.stringify(this.itemvalue);
           //this.items=this

          // console.log(this.items)
           
        },

    },
    created(){
      this.getproduct();
    }
  }
</script>
<style>
  .control.left 
  {
    position: absolute;
    top: calc(50% - 50px)! important;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    text-shadow: 0 0 20px rgba(0,0,0,.75);
  }
  .control.right
  {
    position: absolute;
    top: calc(50% - 50px);
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    text-shadow: 0 0 20px rgba(0,0,0,.75);
  }
  figure{
    position: relative;
    margin: 0;
    padding: 0;
    max-width: 100%;
    text-align: center;
    cursor: pointer;
    }

  figure a.control.right {
    right: 5px;
}
 figure a.control.left {
    left: 5px;
}
.lingallery_thumbnails_content_elem {
    float: left;
}
.lingallery_thumbnails_content_elem {
    height: 50px;
    width: 50px;
    border: 2px solid black;
    margin-right: 5px;
    padding-top: 5px;
}
</style>