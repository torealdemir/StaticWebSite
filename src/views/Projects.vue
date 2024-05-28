<template>
  <div id="projectDiv">
    
    <div class="container">
      <h1 class="d-flex justify-content-center my-4 text-success fw-bold text-secondary">Project 1 </h1>
      <div>
        <img class="project1" src="../assets/projects/Project1.png" alt="">
      </div>

    </div>
    <Footer>
    </Footer>
  </div>
 
</template>

<script>
import axios from 'axios';
import Footer from '@/components/Footer.vue'

export default {
  name: 'Projects',
  components: {
    Footer,
  }}
</script>
<style scoped>
li {
    list-style:none;
}


.project1 {
  background-size: cover;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
}

#projectDiv{
  background-image: url('../assets/colorful.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}


</style>