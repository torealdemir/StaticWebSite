<template>
  <div id="projectDiv">
    <h1 class="d-flex justify-content-center my-4 text-success">Projects!</h1>
    <Footer Footer class="fixed-bottom">
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


#projectDiv{
  height: 150vh;
  background-image: url('../assets/colorful.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>