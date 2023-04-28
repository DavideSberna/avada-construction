
<template>
   
  <header>
    <NavComponent/>
  </header>
  <main>
    <JumboComponent/>

    <div id="specialist" class="pt-5 pb-5 container">
      <SectionTitle :title="section[0].title" :text="section[0].text" :fs_3="section[0].fs_3" :text_capitalize="section[0].text_capitalize"/>
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
          <SectionTitle :title="section[1].title" :text="section[1].text" :fs_3="section[1].fs_3" :text_capitalize="section[1].text_capitalize"/>
            <div class="row d-flex justify-content-center">
              <RecentWorkComponent v-for="(items, index) in recentWork" :image="items.image" :icon="items.icon[0]" :icon2="items.icon[1]" :text="items.text" :title="items.title" :status="items.status" :important="items.important" :num="2" />
            </div>
        </div>
        <div class="text-center d-flex align-items-center justify-content-center mb-5 more pt-3 pb-3">
            <hr>
            <p class="link-underline-light text-secondary ps-5 pe-5" @click="showCard">View all projects</p>
            <hr>
        </div>
    </div>

    <div id="core-values" class="bg-body-tertiary">
      <div class="container">
        <SectionTitle :title="section[2].title" :text="section[2].text" :fs_3="section[2].fs_3" :text_capitalize="section[2].text_capitalize"/>
        <div class="row">
          <CoreValuesComponent v-for="(items, index) in coreValues" :color="items.color" :icon="items.icon" :text="items.text" :title="items.title"/>
        </div>
      </div>
    </div>

    <section>
      <OwnersComponent/>
    </section>
     
    <div id="latest" class="bg-body-tertiary">
        <div class="container">
          <SectionTitle :title="section[4].title" :text="section[4].text" :fs_3="section[4].fs_3" :text_capitalize="section[4].text_capitalize"/>
            <div>
                <div class="row">
                    <LatestComponent v-for="(items, index) in latest" :image="items.image" :text="items.text" :title="items.title" :status="items.status" :important="items.important" :num="2" :date="items.date" />
                </div>
                  <div class="text-center d-flex align-items-center justify-content-center mb-5   more pt-3 pb-3">
                      <hr>
          <p class="link-underline-light text-secondary ps-5 pe-5" @click="showCardLatest">View all projects</p>
                      <hr>
                  </div>
            </div>
        </div>
    </div>

    <div id="trusted">
      <div class="container">
        <SectionTitle :title="section[5].title" :text="section[5].text" :fs_3="section[5].fs_3" :text_capitalize="section[5].text_capitalize"/>
        <div class="row">
          <TrustedComponent v-for="(items, index) in trusted" :image="items.image" :title="items.title"/>
        </div>
      </div>
    </div>
     
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
import {coreValuesElement} from './assets/data/store.js';
import {latestElement} from './assets/data/store.js';
import {trustedElement} from './assets/data/store.js';
import {sectionTitleArray} from './assets/data/store.js';
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
import SectionTitle from './components/SectionTitle.vue';
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
  SectionTitle,
 },
 
 
 data(){
     return{
      specialist: [...specialistElement], 
      planning: [...planningElement],
      recentWork: [...recentWorkElement],
      coreValues: [...coreValuesElement],
      latest: [...latestElement],
      trusted: [...trustedElement],
      section: [...sectionTitleArray],
      counter: 0,
      n: 0,
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
    },

    showCardLatest(){
        this.n++
        this.latest.map((item)=>{
            if(item.status == false){
                item.status = true
            }
            if(this.n % 2 == 0){
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

#core-values{
  .max-w{
    max-width: 500px;
    margin: 0 auto;
  }
};

#latest{
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
};

#trusted{
  .max-w{
    max-width: 500px;
    margin: 0 auto;
  }
 
.card-body{
  hr{
    width: 30px;
    margin: 0 auto;
  }
 
}
}
  
 
 
 
</style>