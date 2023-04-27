
<template>
  <header>
    <NavComponent/>
  </header>
  <main>
    <JumboComponent/>
    <SpecialistComponent/>
    <!-- v-for="(items, index) in specialist" :image="items.image" :title="items.title" :text="items.text" -->
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
import {specialistElement} from './assets/data/store.js'
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
      specialist: [...specialistElement],
         
       
     }
 }
   
}

  
</script>



<style lang="scss" scoped>
   
   
  
 
 
 
</style>