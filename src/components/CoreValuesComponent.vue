<template>
    <div class="bg-body-tertiary">
      <div class="container">
        <div class="text-center max-w pt-5">
          <p class="">Specialist in modern construction</p>
          <hr class="w-25 m-auto text-warning border-2">
          <p class="pt-3">Lorem ipsum elit. Sequi incidunt ducimus ab, tenetur nesciunt itaque? Accusantium velit quis cumque inventore!</p>
        </div>
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4">
            <div class="card text-center border-0 bg-body-tertiary">
              <div class="circle d-flex align-items-center justify-content-center">
                <img src="../../public/img/image (3).svg" alt="">
              </div>
              <div class="card-body">
                <p class="card-title">Great services</p>
                <hr>
                <p class="card-text pt-3">Lorem ipsumtllum psum a la odit minima cupiditate ratione molestiae.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4">
            <div class="card text-center border-0 bg-body-tertiary">
              <div class="circle d-flex align-items-center justify-content-center">
                <img src="../../public/img/image (3).svg" alt="">
              </div>
              <div class="card-body">
                <p class="card-title">Highest standards</p>
                <hr>
                <p class="card-text pt-3">Lorem ipsumtllum psum a la odit minima cupiditate ratione molestiae.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4">
            <div class="card text-center border-0 bg-body-tertiary">
              <div class="circle d-flex align-items-center justify-content-center">
                <img src="../../public/img/image (3).svg" alt="">
              </div>
              <div class="card-body">
                <p class="card-title">Professional team</p>
                <hr>
                <p class="card-text pt-3">Lorem ipsumtllum psum a la odit minima cupiditate ratione molestiae.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4">
            <div class="card text-center border-0 bg-body-tertiary">
              <div class="circle d-flex align-items-center justify-content-center">
                <img src="../../public/img/image (3).svg" alt="">
              </div>
              <div class="card-body">
                <p class="card-title">Creative solution</p>
                <hr>
                <p class="card-text pt-3">Lorem ipsumtllum psum a la odit minima cupiditate ratione molestiae.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
</template>



<script>
 
export default{
 name: 'CoreValuesComponent',
 
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
  }
 
.circle{
  width: fit-content;
  height: fit-content;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  margin: 0 auto;
  
  img{
    width: 30px;
    margin: 10px; 
  }
}
.card-body{
  hr{
    width: 30px;
    margin: 0 auto;
  }
 
}
 
</style>