<template>
  <nav class="navbar navbar-expand-md bg-gray">
    <div class="container">
      <div>
        <img src="../../public/img/construction_logo.png" alt="">
      </div>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto m-0 mb-lg-0">
          <li class="nav-item position-relative" v-for="(items, index) in nav" @click="openItem">
            <div class="d-flex align-items-center">
              <a class="nav-link pe-2 text-uppercase text-secondary fs-8" href="#">{{ items.name }}</a>
              <font-awesome-icon v-if="items.subitems.length !== 0" icon="fa-solid fa-caret-down"
                class="text-black-50 d-block d-md-none" />
            </div>
            <ul class="item d-none m-0 p-2 absolute">
              <li class="link-underline-light pt-3" v-for="(item, index) in items.subitems"
                :class="item.length == 0 ? 'd-none' : ''">
                <a class="nav-link text-secondary p-1" :href="item.link">{{ item.name }}</a>
              </li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <button class="btn bg-yellow ms-3 text-secondary rounded-1 text-uppercase fs-8" type="submit">Get quote</button>
        </form>
      </div>
    </div>
</nav></template>



<script>
 
import {navElement} from '../assets/data/store.js'
export default{
 name: 'NavComponent',
 
 data(){
     return{
      nav : [...navElement],
      drop: false,
         
       
     }
 },
 methods:{
     
 },
 
 computed:{
 
     
 }
 
  
}
</script>




<style lang="scss" scoped>

nav{
   
  img{
    width: 120px;
  }
  a:hover{
    color: #FED03D !important;
  }
  form{
    .btn:hover{
      background-color: #ffdf76;

    }
  }
   
}
.nav-item:hover{
  .item:hover{
    display: block !important;
  }
  .absolute{
    min-width: 200px;
    display: block !important;
    list-style: none;
    position: absolute;
    top: 35px;
    background-color: #f8f9fa;
  }

}


@media screen and (max-width: 768px){
    
  .absolute{
    position:static !important;
    li{
      padding-left: 20px;
      padding-top: 0 !important;
    }
  }
  form{
    .btn{
      margin: 15px 0 15px 0 !important;
    }
  }
  
}
 
</style>