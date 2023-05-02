
<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4">
    <div class="card text-center border-0 bg-gray">
      <div class="circle d-flex align-items-center justify-content-center mt-4">
        <font-awesome-icon :icon="icon" class="fs-5 dark-gray" />
      </div>
      <div class="card-body dark-gray">
        <p class="card-title fs-4">{{ title }}</p>
        <p class="card-text">{{ text }}</p>
      </div>
    </div>
  </div>
</template>



<script>
export default{
 name: 'SpecialistComponent',
 props: ['icon', 'icon1','icon2', 'title', 'text'],
 
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

@use '../../src/assets/styles/variable' as *;
.circle{
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: solid 1px #747474;
  margin: 0 auto;
   
}

.card:hover{
  .circle{
    background-color: $yellow;
    border: none;
    .dark-gray{
      color: $white;
    }
  }
}
 
</style>