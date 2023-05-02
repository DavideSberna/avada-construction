<template>
    <div id="building">
        <div class="bg-image">
            <div class="container">
                <div class="d-flex align-items-center justify-content-center pt-5 pb-5 text-white">
                    <SectionTitle :title="section[6].title" :text="section[6].text"
                        :text_capitalize="section[6].text_capitalize" :fs_3="section[6].fs_3"
                        :text_start="section[6].text_start" :margin="section[6].margin" :w_400="section[6].w_400" />
                    <div>
                        <button type="button" class="btn btn-warning">Get a free quote</button>
                        <small class="d-block">Only tables a few seconds!</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="hr p-0 m-0"></div>
</template>



<script>
 import SectionTitle from './SectionTitle.vue'
import {sectionTitleArray} from '../assets/data/store.js';
export default{
 name: 'BuildingComponent',

 components:{
  SectionTitle,
 },
 
 data(){
     return{
        section: [...sectionTitleArray], 
       
     }
 },
 methods:{
     
 },
 
 computed:{
     
 }
 
  
}
</script>




<style lang="scss" scoped>
 .bg-image{
        background-image: url('../public/img/about-call-to-action-57862405.jpg');
        background-size: cover;
        background-position: 50px 50px;  
    }
  
</style>