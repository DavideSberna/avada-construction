
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
    <OwnersComponent/>
    <LatestComponent/>
    <TrustedComponent/>
    <BuildingComponent/>
  </main>
  <footer>
    <FooterComponent/>
  </footer>
   
  
  
</template>

 
<script>

import NavComponent from './components/NavComponent.vue';
import JumboComponent from './components/jumboComponent.vue';
import SpecialistComponent from './components/SpecialistComponent.vue';
import PlanningComponent from './components/PlanningComponent.vue';
import RecentWorkComponent from './components/RecentWorkComponent.vue';
import CoreValuesComponent from './components/CoreValuesComponent.vue';
import OwnersComponent from './components/OwnersComponent.vue';
import LatestComponent from './components/LatestComponent.vue';
import TrustedComponent from './components/TrustedComponent.vue';
import BuildingComponent from './components/BuildingComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
export default{
 name: 'App',

 components:{
  NavComponent,
  JumboComponent,
  SpecialistComponent,
  PlanningComponent,
  RecentWorkComponent,
  CoreValuesComponent,
  OwnersComponent,
  LatestComponent,
  TrustedComponent,
  BuildingComponent,
  FooterComponent,
 },
 
 
 data(){
     return{
         
       
     }
 }
   
}

  
</script>



<style lang="scss" scoped>
   
   
  
 
 
 
</style>