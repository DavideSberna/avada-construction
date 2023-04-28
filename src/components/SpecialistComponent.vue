
<template>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4">
        <div class="card text-center border-0 bg-body-tertiary">
          <font-awesome-icon :icon="icon" />
          <div class="card-body">
            <p class="card-title">{{title}}</p>
            <p class="card-text">{{text}}</p>
          </div>
        </div>
      </div>
</template>



<script>
export default{
 name: 'SpecialistComponent',
 props: ['icon', 'title', 'text'],
 
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