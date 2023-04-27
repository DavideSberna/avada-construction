<template>
    <div class="bg-body-tertiary">
      <div class="container">
        <div class="text-center max-w pt-5">
          <p class="">Our core values</p>
          <hr class="w-25 m-auto text-warning border-2">
          <p class="pt-3">Lorem ipsum elit. Sequi incidunt ducimus ab, tenetur nesciunt itaque? Accusantium velit quis cumque inventore!</p>
        </div>
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4" v-for="(items, index) in coreValues">
            <div class="card text-center border-0 bg-body-tertiary">
              <div class="circle d-flex align-items-center justify-content-center" :class="items.color">
                <img :src="items.image" alt="">
              </div>
              <div class="card-body">
                <p class="card-title">{{items.title}}</p>
                <hr>
                <p class="card-text pt-3">{{items.text}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
</template>



<script>
import {coreValuesElement} from '../assets/data/store.js'
export default{
 name: 'CoreValuesComponent',
 
 data(){
     return{
      coreValues: [...coreValuesElement]
       
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
  margin: 0 auto;

   
  
  img{
    width: 30px;
    margin: 10px; 
  }
}
.red{
    background-color: red;
  }
  .green{
    background-color: green;
  }
  .yellow{
    background-color: yellow;
  }
  .purple{
    background-color: purple;
  }
.card-body{
  hr{
    width: 30px;
    margin: 0 auto;
  }
 
}
 
</style>