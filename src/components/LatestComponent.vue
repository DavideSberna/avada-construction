LatestComponent
<template>
 
        <div class="col-12 col-md-6 col-lg-4 pt-3" :class="!status && important == num ? 'd-none': ''">
            <div class="card border-0">
                <img :src="image" alt="">
                <div class="card-body">
                    <p class="card-title">{{title}}</p>
                    <small>{{date}}</small>
                    <hr>
                    <p class="card-text">{{text}}</p>
                </div>
            </div>
        </div>
            
   
</template>



<script>
 
export default{
 name: 'LatestComponent',
 props: ['image', 'text', 'title', 'status', 'important', 'num', 'date'],
 
 data(){
     return{
         
        
         
       
     }
 },

 
  
}
</script>




<style lang="scss" scoped>
 
  
 
</style>