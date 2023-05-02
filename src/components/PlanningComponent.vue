<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4">
    <div class="card text-center border-0 bg-transparent">
      <div class="card-body">
        <font-awesome-icon :icon="icon" class="fs-1 yellow" />
        <p class="card-title text-warning fs-2 yellow m-0">{{ num }}</p>
        <p class="card-text text-white text-uppercase m-0 fs-8">{{ text }}</p>
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