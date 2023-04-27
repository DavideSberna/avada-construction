RecentWorkComponent

<template>
    <div class="container">
        <div class="pt-5 pb-5">
            <div class="text-center max-w">
                <p class="">Explore recent work</p>
                <hr class="w-25 m-auto text-warning border-2">
                <p class="pt-3">Lorem ipsum elit. Sequi incidunt ducimus ab, tenetur nesciunt itaque? Accusantium velit quis cumque inventore!</p>
            </div>
            <div class="row d-flex justify-content-center">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4" v-for="(items, index) in recentWork" >
                    <div class="position-relative">
                        <div class="card">
                            <img :src="items.image" alt="">
                        </div>
                        <div class="position-absolute d-none bg-warning">
                            <div class="d-flex flex-column align-items-center justify-content-center h-100">
                                <div>
                                    <div class="d-flex">
                                        <a href="#">{{ items.icon[0]}} {{ items.icon[1]}}</a>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <p>{{items.title}}</p>
                                    <p>{{items.text}}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="text-center d-flex align-items-center justify-content-center mb-5 more pt-3 pb-3">
            <hr>
            <a href="#" class="link-underline-light text-secondary ps-5 pe-5">View all projects</a>
            <hr>
        </div>
    </div>
</template>



<script>
import {recentWorkElement} from '../assets/data/store.js'
export default{
 name: 'RecentWorkComponent',
 
 data(){
     return{
        recentWork: [...recentWorkElement]
         
       
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
 .more{
  hr{
    width: 20%;
    border: solid 1px black;
  }
 }
a{
    text-decoration: none;
}
 .position-absolute{
        top: 0;
        width: 100%;
        height: 100%;
     }
 .position-relative:hover{
    .card{
        opacity: 0;
    }
     .position-absolute{
        display: block !important;
     }
 }
 
</style>