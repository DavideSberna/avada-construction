<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4 latest">
        <p class="text-warning">Latest tweets</p>
        <div class="d-flex">
            <div class="me-1">
                <div class="circle">
                    <img class="" src="../../public/img/3a74ce3d0532b7773b174c45ca3bd05a_normal.png" alt="">
                </div>
            </div>
            <div>
                <div class="d-flex align-items-center justify-content-start">
                    <div>
                        <p class="m-0">ThemeFusion</p>
                        <p class="m-0">@Theme_fusion</p>
                    </div>
                </div>
                <div>
                    <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, quaerat placeat! Soluta nam, nemo praesentium ab eaque ipsum dolore voluptatibus.</small>
                </div>
                <div>
                    <img class="post-social" src="../../public/img/En2TRxLW4AEiWUN.jpeg" alt="">
                </div>
                <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center">
                        <font-awesome-icon icon="fa-solid fa-heart" />
                        <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket" class="fa-rotate-90" />
                    </div>
                    <small href="#">22H</small>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
 
export default{
 name: 'FooterLatest',
 
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

.circle{
  width: 30px;
  border-radius: 50%;
  overflow: hidden;
  

   img{
    width: 100%;
  }
}

a{
    text-decoration: none;
}
.img-logo{
    width: 170px;
}

.latest{
    
    .post-social{
        width: 100%;
    }
}

 
</style>