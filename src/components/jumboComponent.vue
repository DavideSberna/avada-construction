<template>
  <div class="pb-5">
    <div class="bg-image d-flex justify-content-center align-items-center">
      <div class="">
        <div class="text-white text-center">
          <h3>Building inspiring spaces</h3>
          <p>We build inspiring residential & commercial spaces</p>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <button type="button" class="btn btn-secondary me-2">Explore recent work</button>
          <button type="button" class="btn btn-warning">Get a quote today</button>
        </div>
      </div>
    </div>
    <div>
      <div class="position-relative bg-warning text-center min-h d-flex justify-content-center align-items-center">
        <p>Do you have a construction project we can help with?</p>
        <button type="button" class="btn btn-dark w-25 position-absolute">Get a free quote</button>
      </div>
    </div>
  </div>
</template>



<script>
 
export default{
 name: 'JumboComponent',
 
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
  background-image: url('../public/img/home-slider-62528242.jpg');
  min-height: 500px;
  background-size: cover;
}
.min-h{
  min-height: 100px;
  button{
    bottom: -18px;
    left: calc(50% - 100px);
    border: solid 1px white;
    
  }
}
</style>