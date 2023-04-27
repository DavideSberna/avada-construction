
<template>
    <div class="pt-5 pb-5 container">
      <div class="text-center max-w">
        <p class="">Specialist in modern construction</p>
        <hr class="w-25 m-auto text-warning border-2">
        <p class="pt-3">Lorem ipsum elit. Sequi incidunt ducimus ab, tenetur nesciunt itaque? Accusantium velit quis cumque inventore!</p>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4" v-for="(items, index) in specialist">
          <div class="card text-center border-0 bg-body-tertiary">
            <img class="pt-3" :src="items.image" alt="">
            <div class="card-body">
              <p class="card-title">{{items.title}}</p>
              <p class="card-text">{{items.text}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="pt-5 pb-5 container">
      <div class="text-center max-w">
        <p class="">Specialist in modern construction</p>
        <hr class="w-25 m-auto text-warning border-2">
        <p class="pt-3">Lorem ipsum elit. Sequi incidunt ducimus ab, tenetur nesciunt itaque? Accusantium velit quis cumque inventore!</p>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4">
          <div class="card text-center border-0 bg-body-tertiary">
            <img class="pt-3" :src="image" alt="">
            <div class="card-body">
              <p class="card-title">{{title}}</p>
              <p class="card-text">{{text}}</p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
   
</template>



<script>
import {specialistElement} from '../assets/data/store.js'
export default{
 name: 'SpecialistComponent',
 props: ['image', 'title', 'text'],
 
 data(){
     return{
      specialist: [...specialistElement]
       
     }
 },
 methods:{
     
 },
 
 computed:{
     
 }
 
  
}
</script>




<style lang="scss" scoped>
 .pt-5{
  .max-w{
    max-width: 500px;
    margin: 0 auto;
  }
}
.card{
  img{
    width: 40px;
    margin: 0 auto;
  }
}
</style>