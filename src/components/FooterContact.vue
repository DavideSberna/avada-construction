<template>
    <li class="list-group-item d-flex p-1">
        <font-awesome-icon :icon="icon" class="me-2" />
        <small>{{ text }}</small>
    </li>
</template>



<script>
 export default{
 name: 'FooterContact',
 props:['icon','text'],
 
 data(){
     return{
          
       
     }
 },

 
  
}
</script>




<style lang="scss" scoped>

a{
    text-decoration: none;
}

</style>