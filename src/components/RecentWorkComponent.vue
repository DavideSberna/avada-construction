RecentWorkComponent

<template>
    <div class="container">
        <div class="pt-5 pb-5">
            <div class="text-center max-w">
                <p class="">Explore recent work</p>
                <hr class="w-25 m-auto text-warning border-2">
                <p class="pt-3">Lorem ipsum elit. Sequi incidunt ducimus ab, tenetur nesciunt itaque? Accusantium velit quis cumque inventore!</p>
            </div>
            <div class="row d-flex justify-content-center">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4">
                    <div class="card">
                        <img src="../../public/img/project1-featured-294276386-600x600.jpg" alt="">
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4">
                    <div class="card">
                        <img src="../../public/img/project2-featured-15013609-600x600.jpg" alt="">
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4">
                    <div class="card">
                        <img src="../../public/img/project3-featured-189023420-600x600.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center d-flex align-items-center justify-content-center mb-5 more pt-3 pb-3">
            <hr>
            <a href="#" class="link-underline-light text-secondary ps-5 pe-5">View all projects</a>
            <hr>
        </div>
    </div>
</template>



<script>
 
export default{
 name: 'RecentWorkComponent',
 
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
 .max-w{
    max-width: 500px;
    margin: 0 auto;
  }
 .more{
  hr{
    width: 20%;
    border: solid 1px black;
  }
 }
 
</style>