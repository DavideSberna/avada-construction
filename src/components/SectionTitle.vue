<template>
   <div class="text-center max-w">
    <div :class="text_start">
        <div :class="text_capitalize">
            <p :class="fs_3" >{{title}}</p>
        </div>
            <hr class="w-25 text-warning border-2" :class="margin !== undefined ? margin : 'm-auto'">
            <p class="pt-3">{{text}}</p>
        </div>
    </div>
</template>



<script>
 
export default{
 name: 'SectionTitle',
 props:['title', 'text', 'text_start','text_capitalize', 'fs_3','margin'],
 
 data(){
     return{
         
       
     }
 },
 methods:{
     
 },
 
 computed:{
     
 }
 
  
}
</script>




<style lang="scss" scoped>
 
  .max-w{
    max-width: 500px;
    margin: 0 auto;
  };
  .margin-0{
    margin: 0 !important;
  }
 
</style>