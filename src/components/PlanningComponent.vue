<template>
   <div>
      <div class="bg-image position-relative d-flex align-items-center justify-content-center">
        <div class="curved-top"></div>
        <div class="curved-bottom"></div>
        <div class="row container">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4">
            <div class="card text-center border-0 bg-transparent">
              <div class="card-body">
                <p class="card-title text-warning">3534</p>
                <p class="card-text text-white">Planning application</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4">
            <div class="card text-center border-0 bg-transparent">
              <div class="card-body">
                <p class="card-title text-warning">896</p>
                <p class="card-text text-white">Completed projects</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4">
            <div class="card text-center border-0 bg-transparent">
              <div class="card-body">
                <p class="card-title text-warning">172</p>
                <p class="card-text text-white">trained professionals</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4">
            <div class="card text-center border-0 bg-transparent">
              <div class="card-body">
                <p class="card-title text-warning">19</p>
                <p class="card-text text-white">International</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>



<script>
 
export default{
 name: 'PlanningComponent',
 
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
  background-image: url('../public/img/home-244125289.jpg');
  min-height: 400px;
  background-size: cover;
  img{
    width: 50px;
    margin: 0 auto;
  }
  .row{
    padding-top: 70px;
    padding-bottom: 90px;
  }
  .curved-top{
    position: absolute;
    top: 0;
    width: 100%;
    height: 80px;
    background-color: rgb(255, 255, 255);
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;

  }
  .curved-bottom{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80px;
    background-color: rgb(255, 255, 255);
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;

  }
}

 
</style>