<template>
    <div class="w-full container mx-auto bg-white p-6 my-4">
          <ReviewCreator :productid="product_id" />
    </div>
</template>

<script>
  
  import ReviewCreator from '@/components/ratings/RatingReviewCreator'

  export default {
    
     data(){
    return {
       product_id:''           
      }

    },
    components: {
      ReviewCreator
    },
    middleware: [
      'redirectIfGuest'
    ],
     async asyncData ({ params, app }) {
      //console.log(params.productid);
      return {
         product_id: params.productid
      }
    }
    
  }
</script>