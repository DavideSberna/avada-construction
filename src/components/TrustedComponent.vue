<template>
    <div>
      <div class="container">
        <div class="text-center max-w pt-5">
          <p class="">Trusted partners</p>
          <hr class="w-25 m-auto text-warning border-2">
          <p class="pt-3">Lorem ipsum elit. Sequi incidunt ducimus ab, tenetur nesciunt itaque? Accusantium velit quis cumque inventore!</p>
        </div>
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4" v-for="(items, index) in trusted">
            <div class="card text-center border-0">
              <div class="circle d-flex align-items-center justify-content-center">
                <img :src="items.image" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
</template>



<script>
import {trustedElement} from '../assets/data/store.js' 
export default{
 name: 'TrustedComponent',
 
 data(){
     return{
      trusted: [...trustedElement]
         
       
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
  width: 100px;
  height: 100px;
  margin: 0 auto;
   
  
  img{
    width: 100%;
  }
}
.card-body{
  hr{
    width: 30px;
    margin: 0 auto;
  }
 
}
 
</style>