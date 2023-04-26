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
            <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link" href="#">Work</a>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link" href="#">Articles</a>
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
 
 
export default{
 name: 'NavComponent',
 
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
nav{
  img{
    width: 120px;
  }
}
.dropdown:hover{
  ul{
    display: block !important;
  }

}
 
</style>