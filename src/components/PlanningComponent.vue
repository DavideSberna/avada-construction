<template>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4">
        <div class="card text-center border-0 bg-transparent">
          <div class="card-body">
            <font-awesome-icon :icon="icon" />
            <p class="card-title text-warning">{{num}}</p>
            <p class="card-text text-white">{{text}}</p>
          </div>
        </div>
      </div>  
</template>



<script>
 
export default{
 name: 'PlanningComponent',
 props: ['icon', 'num', 'text'],
 
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