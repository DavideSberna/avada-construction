 

<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4" :class="!status && important == num ? 'd-none' : ''">
        <div>
            <div class="position-relative">
                <div class="card">
                    <img :src="image" alt="">
                </div>
                <div class="position-absolute d-none bg-yellow">
                    <div class="d-flex flex-column align-items-center justify-content-center h-100">
                        <div>
                            <div class="d-flex">
                                <div class="circle bg-white yellow d-flex justify-content-center align-items-center m-1">
                                    <font-awesome-icon :icon="icon" />
                                </div>
                                <div class="circle bg-white yellow d-flex justify-content-center align-items-center m-1">
                                    <font-awesome-icon :icon="icon2" />
                                </div>
                            </div>
                        </div>
                        <div class="text-center white">
                            <p class="mt-2 mb-0">{{ title }}</p>
                            <p class="fs-8">{{ text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

 

<script>
 
export default{
 name: 'RecentWorkComponent',
 props: ['image', 'icon', 'icon2', 'text', 'title', 'status', 'important', 'num'],
 
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
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin: 0 auto;
   
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