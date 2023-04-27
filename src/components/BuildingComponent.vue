<template>
  <div class="bg-image">
    <div class="container">
        <div class="d-flex align-items-center justify-content-center pt-5 pb-5 text-white">
            <div class="max-w">
              <p class="">Building inspiring spaces</p>
              <hr class="w-25 text-warning border-2">
              <p class="pt-3">Lorem ipsum elit. Sequi incidunt ducimus ab, tenetur nesciunt itaque? Accusantium velit quis cumque inventore!</p>
            </div>
            <div>
                <button type="button" class="btn btn-warning">Get a free quote</button>
                <small class="d-block">Only tables a few seconds!</small>
            </div>
        </div>
    </div>
  </div>
<div class="hr p-0 m-0"></div>
</template>



<script>
 
export default{
 name: 'BuildingComponent',
 
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
.bg-image{
    background-image: url('../../public/img/about-call-to-action-57862405.jpg');
    background-size: cover;
    background-position: 50px 50px;
    .max-w{
        max-width: 400px;
    }
}
.hr{
    width: 100%;
    height: 10px;
    background-color: rgb(43, 43, 43);
   
}
    
 
</style>