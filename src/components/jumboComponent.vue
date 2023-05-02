<template>
  <div class="pb-5">
    <div class="bg-image d-flex justify-content-center align-items-center">
      <div class="">
        <div class="text-white text-center">
          <h3 class="text-uppercase fw-bold">Building inspiring spaces</h3>
          <p class="yellow">We build inspiring residential & commercial spaces</p>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <button type="button" class="btn bg-black gray me-2 rounded-1">Explore recent work</button>
          <button type="button" class="btn bg-yellow dark rounded-1">Get a quote today</button>
        </div>
      </div>
    </div>
    <div>
      <div class="position-relative bg-yellow text-center min-h d-flex justify-content-center align-items-center">
        <h5 class="text-capitalize dark">Do you have a construction project we can help with?</h5>
        <button type="button" class="btn bg-black gray rounded-1 text-uppercase position-absolute max-w fs-8">Get a free
          quote</button>
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

  .btn:nth-child(1):hover{
    background-color: #333333 !important;
    color: #FED03D !important;
  }
  .btn:nth-child(2):hover{
    background-color: #ffdf76 !important;
  }
  .btn:nth-child(3):hover{
    background-color: #333333 !important;
    color: #FED03D !important;
  }
}
.min-h{
  min-height: 100px;
  button{
    bottom: -18px;
    left: calc(50% - 100px);
    border: solid 1px white;
    
  }
}
.max-w{
  width: 200px;
}
</style>