
<template>
   
  <header>
    <NavComponent/>
  </header>
  <main>
    <JumboComponent/>

    <div id="specialist" class="pt-5 pb-5 container">
      <div class="text-center max-w">
        <p class="">Specialist in modern construction</p>
        <hr class="w-25 m-auto text-warning border-2">
        <p class="pt-3">Lorem ipsum elit. Sequi incidunt ducimus ab, tenetur nesciunt itaque? Accusantium velit quis cumque inventore!</p>
      </div>
      <div class="row">
        <SpecialistComponent v-for="(items, index) in specialist" :icon="items.icon" :title="items.title" :text="items.text"/>
      </div>
    </div>

    <div id="planning">
      <div class="bg-image position-relative d-flex align-items-center justify-content-center">
        <div class="curved-top"></div>
        <div class="curved-bottom"></div>
        <div class="row container">
          <PlanningComponent v-for="(items, index) in planning" :icon="items.icon" :num="items.num" :text="items.text"/>
        </div>
      </div>
    </div>

    <div id="recent" class="container">
        <div class="pt-5 pb-5">
            <div class="text-center max-w">
                <p class="">Explore recent work</p>
                <hr class="w-25 m-auto text-warning border-2">
                <p class="pt-3">Lorem ipsum elit. Sequi incidunt ducimus ab, tenetur nesciunt itaque? Accusantium velit quis cumque inventore!</p>
            </div>
            <div class="row d-flex justify-content-center">
              <RecentWorkComponent v-for="(items, index) in recentWork" :image="items.image" :icon="items.icon[0]" :icon2="items.icon[1]" :text="items.text" :title="items.title" :status="!items.status" :important="items.important" :num="2" />
            </div>
        </div>
        <div class="text-center d-flex align-items-center justify-content-center mb-5 more pt-3 pb-3">
            <hr>
            <p class="link-underline-light text-secondary ps-5 pe-5" @click="showCard">View all projects</p>
            <hr>
        </div>
    </div>
     
     
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
import {specialistElement} from './assets/data/store.js';
import {planningElement} from './assets/data/store.js';
import {recentWorkElement} from './assets/data/store.js';
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
      planning: [...planningElement],
      recentWork: [...recentWorkElement],
      counter: 0,
     }
 },
 methods:{
    showCard(){
        this.counter++
        this.recentWork.map((item)=>{
            if(item.status == false){
                item.status = true
            }
            if(this.counter % 2 == 0){
                item.status = false
            } 
        })
    }
     
 },
   
}

  
</script>



<style lang="scss" scoped>

#specialist{
  .max-w{
    max-width: 500px;
    margin: 0 auto;
  }
};

#planning{
  .bg-image{
  background-image: url('../public/img/home-244125289.jpg');
  min-height: 400px;
  background-size: cover;
  .row{
    padding-top: 70px;
    padding-bottom: 90px;
  }
  .curved-top{
    position: absolute;
    top: 0;
    width: 100%;
    height: 80px;
    background-color: rgb(255, 255, 255);
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;

  }
  .curved-bottom{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80px;
    background-color: rgb(255, 255, 255);
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;

  }
}
}
   
#recent{
  .max-w{
    max-width: 500px;
    margin: 0 auto;
  }
 .more{
  hr{
    width: 20%;
    border: solid 1px black;
  }
  p{
    cursor: pointer;
  }
 }
 
 .position-absolute{
        top: 0;
        width: 100%;
        height: 100%;
     }
 .position-relative:hover{
    .card{
        opacity: 0;
    }
     .position-absolute{
        display: block !important;
     }
 }
}
  
 
 
 
</style>