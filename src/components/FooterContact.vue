<template>
    
        <li class="list-group-item d-flex">
            <font-awesome-icon :icon="icon" />
            <small>{{text}}</small>
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