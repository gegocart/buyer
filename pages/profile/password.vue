<template>
    <div class="w-full">
      <changepassword/>
    </div>
</template>
<script>
 import changepassword from '@/components/changepassword/ChangePassword'
    export default {
        layout: 'member',
      data(){
    return {
               
      }

    },
    components: {
      changepassword
    },
    }
</script>