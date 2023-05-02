<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4">
    <div class="card text-center border-0 pt-4">
      <div class="circle d-flex align-items-center justify-content-center" :class="color">
        <font-awesome-icon :icon="icon" class="text-white fs-3" />
      </div>
      <div class="card-body">
        <p class="card-title dark-gray">{{ title }}</p>
        <hr>
        <p class="card-text pt-3 dark-gray">{{ text }}</p>
      </div>
    </div>
  </div>
</template>



<script>
 export default{
 name: 'CoreValuesComponent',
 props: ['color', 'icon', 'text', 'title'],
 
 data(){
     return{
       
       
     }
 },
 
  
}
</script>




<style lang="scss" scoped>
@use '../../src/assets/styles/variable' as *;

.circle{
  width: 50px;
  height: 50px;
  border-radius: 50%;
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
.bg-orange{
    background-color: $orange;
};
.bg-sky-blue{
    background-color: $sky-blue;
};
.bg-light-sky-blue{
    background-color: $light-sky-blue;
};
.bg-green{
    background-color: $green;
};
 
  hr{
    width: 30px;
    margin: 0 auto;
  }
 
</style>