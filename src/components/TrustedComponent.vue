<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4">
    <div class="card text-center border-0">
      <div class="circle d-flex align-items-center justify-content-center">
        <img :src="image" :alt="title">
      </div>
    </div>
  </div>
</template>



<script>
 
export default{
 name: 'TrustedComponent',
 props:['image', 'title'],
 
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

 
.circle{
  width: 100px;
  height: 100px;
  margin: 0 auto;
   
  
  img{
    width: 100%;
  }
}
 
 
</style>