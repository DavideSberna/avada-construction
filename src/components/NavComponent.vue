<template>
    <nav class="navbar navbar-expand-md bg-body-tertiary">
      <div class="container">
          <div>
            <img src="../../public/img/construction_logo.png" alt="">
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item" v-for="(items, index) in nav">
                  <a class="nav-link" href="#">{{items.name}}</a>
                  <ul class="d-none">
                    <li class="link-underline-light" v-for="(item, index) in items.subitems">
                      <a class="nav-link" :href="item.link">{{item.name}}</a>
                    </li>
                  </ul>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <button class="btn btn-warning" type="submit">Get quote</button>
            </form>
          </div>
      </div>
    </nav>
</template>



<script>
 
import {navElement} from '../assets/data/store.js'
export default{
 name: 'NavComponent',
 
 data(){
     return{
      nav : [...navElement]
         
       
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
   
}
.nav-item:hover{
  ul{
    display: block !important;
    list-style: none;
  }

}
 
</style>