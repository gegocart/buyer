<template>
  <lingallery :width="width" :height="height" :items="items"/>
</template>
<script>
  
export default{

	layout:'product',
      data() {
      return {
        width: 480,
        height: 400,
        items: [{
          src: 'https://picsum.photos/600/400/?image=0',
          thumbnail: 'https://picsum.photos/64/64/?image=0',
          caption: 'Some Caption'
        },
        {
          src: 'https://picsum.photos/600/400/?image=10',
          thumbnail: 'https://picsum.photos/64/64/?image=10'
        }
      ]};
    },
    components: {
      Lingallery
    }
  }
      
</script>
<style>
  .control.left 
  {
    position: absolute;
    top: calc(50% - 12px);
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    text-shadow: 0 0 20px rgba(0,0,0,.75);
  }
</style>