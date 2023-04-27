<template>
    <div>
      <div class="bg-image position-relative d-flex align-items-center justify-content-center text-white">
          <div class="curved-top bg-body-tertiary"></div>
          <div class="curved-bottom bg-body-tertiary"></div>
        <div class="row container">
          <div class="text-center max-w">
            <p class="">Our home owners say</p>
            <hr class="w-25 m-auto text-warning border-2">
          </div>
          <div class="col-12 pt-4" :class="index !== 0 ? 'd-none' : ''" v-for="(items, index) in owners">
            <div class="card text-center border-0 bg-transparent">
              <div class="circle">
                <img :src="items.image" alt="">
              </div>
              <div class="card-body text-white max-w">
                <p class="card-title">{{ items.title }}</p>
                <p class="card-text">{{items.text}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
</template>



<script>
import {ownersElement} from '../assets/data/store.js'
export default{
 name: 'OwnersComponent',
 
 data(){
     return{
      owners: [...ownersElement]
         
       
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
  background-image: url('../../public/img/home-parallax-144609983.jpg');
  min-height: 600px;
  background-size: cover;
   
  .row{
    padding-top: 70px;
    padding-bottom: 90px;
    .max-w{
      max-width: 500px;
      margin: 0 auto;
    }
  }
  .circle{
  width: fit-content;
  height: fit-content;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  margin: 0 auto;
  
  img{
    width: 120px;
  }
}
  .curved-top{
    position: absolute;
    top: 0;
    width: 100%;
    height: 80px;
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