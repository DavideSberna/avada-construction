<template>
     
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4">
            <div class="card text-center border-0 bg-body-tertiary">
              <div class="circle d-flex align-items-center justify-content-center" :class="color">
                <font-awesome-icon :icon="icon" />
              </div>
              <div class="card-body">
                <p class="card-title">{{title}}</p>
                <hr>
                <p class="card-text pt-3">{{text}}</p>
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
 methods:{
     
 },
 
 computed:{
     
 }
 
  
}
</script>




<style lang="scss" scoped>

.circle{
  width: fit-content;
  height: fit-content;
  border-radius: 50%;
  margin: 0 auto;

}
.red{
    background-color: red;
  }
  .green{
    background-color: green;
  }
  .yellow{
    background-color: yellow;
  }
  .purple{
    background-color: purple;
  }
 
  hr{
    width: 30px;
    margin: 0 auto;
  }
 
</style>