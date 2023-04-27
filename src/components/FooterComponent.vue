
<template>
   <div class="bg-dark">
    <div class="container text-white">
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4">
                <div class="d-flex flex-column">
                  <img class="img-logo" src="../../public/img/construction_logo_retina.png" alt="">
                  <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, dolorem repellendus? Voluptatem excepturi tempora eius explicabo maiores, quae voluptates debitis.</small>
                  <button type="button" class="btn btn-warning">Learn more</button>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4 latest">
              <p class="text-warning">Latest tweets</p>
              <div>
                  <div class="d-flex align-items-center justify-content-start">
                      <img class="logo-social" src="../../public/img/3a74ce3d0532b7773b174c45ca3bd05a_normal.png" alt="">
                      <div>
                          <p class="m-0">ThemeFusion</p>
                          <p class="m-0">@Theme_fusion</p>
                      </div>
                  </div>
                  <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis debitis modi quod asperiores delectus dignissimos reiciendis deserunt perferendis distinctio molestias?
                  </div>
                  <div>
                      <img class="post-social" src="../../public/img/En2TRxLW4AEiWUN.jpeg" alt="">
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                          <a href="#">A</a>
                          <a href="#">A</a>
                      </div>
                      <small href="#">22H</small>
                  </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4 contact">
                <div>
                    <p class="text-warning">Contact us today</p>
                    <ul class="p-0 m-0">
                        <li class="list-group-item d-flex">
                            <a class="link-underline-light" href="#">A</a>
                            <small>Corporate location 1600 am london</small>
                        </li>
                        <li class="list-group-item d-flex">
                            <a class="link-underline-light" href="#">A</a>
                            <small>Corporate location 1600 am london</small>
                        </li>
                        <li class="list-group-item d-flex">
                            <a class="link-underline-light" href="#">A</a>
                            <small>Corporate location 1600 am london</small>
                        </li>
                        <li class="list-group-item d-flex">
                            <a class="link-underline-light" href="#">A</a>
                            <small>Corporate location 1600 am london</small>
                        </li>
                        <li class="list-group-item d-flex">
                            <a class="link-underline-light" href="#">A</a>
                            <small>Corporate location 1600 am london</small>
                        </li>
                        <li class="list-group-item d-flex">
                            <a class="link-underline-light" href="#">A</a>
                            <small>Corporate location 1600 am london</small>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4 find">
                <p class="text-warning">Contact us today</p>
                <div>
                    <img src="https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
   </div>
</template>



<script>
 
export default{
 name: 'FooterComponent',
 
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

a{
    text-decoration: none;
}
.img-logo{
    width: 170px;
}

.latest{
    .logo-social{
        width: 30px;
        display: block;
    }
    .post-social{
        width: 100%;
    }
}

.find{
    img{
        width: 100%;
    }
}
 
</style>