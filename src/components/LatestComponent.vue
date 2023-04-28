LatestComponent
<template>
    <div class="bg-body-tertiary">
        <div class="container">
            <div class="text-center max-w pt-5">
                <p class="">Latest news</p>
                <hr class="w-25 m-auto text-warning border-2">
                <p class="pt-3">Lorem ipsum elit. Sequi incidunt ducimus ab, tenetur nesciunt itaque? Accusantium velit quis cumque inventore!</p>
            </div>
            <div>
                <div class="row">
                    <div class="col-4" v-for="(items, index) in latest" :class="!items.status && items.important == 2 ? 'd-none': ''">
                        <div class="card border-0">
                            <img :src="items.image" alt="">
                            <div class="card-body">
                                <p class="card-title">{{items.title}}</p>
                                <small>{{items.date}}</small>
                                <hr>
                                <p class="card-text">{{ items.text }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="text-center d-flex align-items-center justify-content-center mb-5 more pt-3 pb-3">
                        <hr>
            <p class="link-underline-light text-secondary ps-5 pe-5" @click="showCard">View all projects</p>
                        <hr>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
</template>



<script>
import {latestElement} from '../assets/data/store.js'
export default{
 name: 'LatestComponent',
 
 data(){
     return{
        latest: [...latestElement],
        counter: 0,
         
       
     }
 },
 methods:{
      showCard(){
        this.counter++
        this.latest.map((item)=>{
            if(item.status == false){
                item.status = true
            }
            if(this.counter % 2 == 0){
                item.status = false
            } 
        })
    }
    
     
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
  .more{
  hr{
    width: 20%;
    border: solid 1px black;
  }
  p{
    cursor: pointer;
  }
 }
 
</style>