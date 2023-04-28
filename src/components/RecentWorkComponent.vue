RecentWorkComponent

<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4" :class="!status && important == num ? 'd-none': ''">
        <div>
            <div class="position-relative">
                <div class="card">
                    <img :src="image" alt="">
                </div>
                <div class="position-absolute d-none bg-warning">
                    <div class="d-flex flex-column align-items-center justify-content-center h-100">
                        <div>
                            <div class="d-flex">
                                <font-awesome-icon :icon="icon" />
                                <font-awesome-icon :icon="icon2" />
                            </div>
                        </div>
                        <div class="text-center">
                            <p>{{title}}</p>
                            <p>{{text}}</p>
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
  
 
</style>