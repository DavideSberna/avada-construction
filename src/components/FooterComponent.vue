
<template>
   <div class="bg-dark">
    <div class="container text-white">
        <div class="row">
            <FooterAvada/>
            <FooterLatest/>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4 contact">
                <div>
                    <p class="text-warning">Contact us today</p>
                    <ul class="p-0 m-0">
                        <FooterContact v-for="(items, index) in footer" :icon="items.icon" :text="items.text"/>       
                    </ul>
                </div>
            </div>
            <FooterFind/>
        </div>
    </div>
   </div>
</template>



<script>
import FooterAvada from './FooterAvada.vue';
import FooterLatest from './FooterLatest.vue';
import FooterContact from './FooterContact.vue';
import FooterFind from './FooterFind.vue';
import {footerElement} from '../assets/data/store.js';
export default{
 name: 'FooterComponent',
 components:{
    FooterAvada,
    FooterLatest,
    FooterContact,
    FooterFind,
 },
 
 data(){
     return{
        footer: [...footerElement],
         
         
       
     }
 },

 
  
}
</script>




<style lang="scss" scoped>

.circle{
  width: 30px;
  border-radius: 50%;
  overflow: hidden;
  

   img{
    width: 100%;
  }
}

a{
    text-decoration: none;
}
.img-logo{
    width: 170px;
}

.latest{
    
    .post-social{
        width: 100%;
    }
}


 
</style>