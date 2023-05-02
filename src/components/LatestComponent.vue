
<template>
    <div class="col-12 col-md-6 col-lg-4 pt-3" :class="!status && important == num ? 'd-none' : ''">
            <div class="card border-0">
                <div class="position-relative">
                    <img class="w-100" :src="image" alt="">
                    <div class="position-absolute d-none bg-yellow">
                        <div class="d-flex flex-column align-items-center justify-content-center h-100">
                            <div>
                                <div class="d-flex">
                                    <div class="circle bg-white yellow d-flex justify-content-center align-items-center m-1">
                                        <font-awesome-icon :icon="icon1" />
                                    </div>
                                    <div class="circle bg-white yellow d-flex justify-content-center align-items-center m-1">
                                        <font-awesome-icon :icon="icon2" />
                                    </div>
                                </div>
                            </div>
                            <div class="text-center white">
                                <p class="mt-2 mb-0 dark" >{{ title }}</p>
                                <p class="fs-8 dark">{{ textHover }}</p>
                                <button type="button" class="btn rounded-1 text-uppercase fs-8">{{ button }}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <p class="card-title">{{ title }}</p>
                    <small>{{ date }}</small>
                    <hr>
                    <p class="card-text">{{ text }}</p>
                </div>
            </div>
        </div>
</template>



<script>
 
export default{
 name: 'LatestComponent',
 props: ['image', 'text', 'title', 'status', 'important', 'num', 'date', 'icon1','icon2', 'button', 'textHover'],
 
 data(){
     return{
         
        
         
       
     }
 },

 
  
}
</script>




<style lang="scss" scoped>
@use '../../src/assets/styles/variable' as *;
 .circle{
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin: 0 auto;
   
}
 .position-absolute{
        top: 0;
        width: 100%;
        height: 100%;

        button{
            background-color: #fcdc72;
            color: $dark-gray;
        }
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