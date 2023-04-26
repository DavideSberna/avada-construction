
<template>
  <header>
    <NavComponent/>
  </header>
  <main>
    <JumboComponent/>
    <SpecialistComponent/>
    <PlanningComponent/>
    <RecentWorkComponent/>
    <CoreValuesComponent/>
     
     
     

  </main>
   
  
  
</template>

 
<script>

import NavComponent from './components/NavComponent.vue'
import JumboComponent from './components/jumboComponent.vue'
import SpecialistComponent from './components/SpecialistComponent.vue'
import PlanningComponent from './components/PlanningComponent.vue'
import RecentWorkComponent from './components/RecentWorkComponent.vue'
import CoreValuesComponent from './components/CoreValuesComponent.vue'
export default{
 name: 'App',

 components:{
  NavComponent,
  JumboComponent,
  SpecialistComponent,
  PlanningComponent,
  RecentWorkComponent,
  CoreValuesComponent,
 },
 
 
 data(){
     return{
         
       
     }
 }
   
}

  
</script>



<style lang="scss" scoped>
  
   
  
 
 
 
</style>