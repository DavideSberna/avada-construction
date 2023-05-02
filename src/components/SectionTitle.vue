<template>
    <div class="text-center dark-gray" :class="w_400 !== undefined ? w_400 : 'max-w'">
        <div :class="text_start">
            <div :class="w_400 !== undefined ? 'white' : ''">
                <div :class="text_capitalize">
                    <p :class="fs_3">{{ title }}</p>
                </div>
                <hr class="w-25 text-warning border-2" :class="margin !== undefined ? margin : 'm-auto'">
                <p class="pt-3">{{ text }}</p>
            </div>
        </div>
    </div>
</template>
 


<script>
 
export default{
 name: 'SectionTitle',
 props:['title', 'text', 'text_start','text_capitalize', 'fs_3','margin', 'w_400'],
 
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