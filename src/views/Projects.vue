<template>
  <div class="container bg-secondary ">
      <h1 class="d-flex justify-content-center my-4 text-warning fw-bold text-secondary py-3">Project 1 </h1>
      <div class="">
        <img class="project1" src="../assets/projects/Project1.png" alt="picture of project 1">
      </div>

    
  </div>
  <Footer class="mt-3">
  </Footer>
 
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

.maindiv{
  background-image: url('../assets/colorful.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}


</style>