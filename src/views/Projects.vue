<template>
    <h1 class="d-flex justify-content-center my-4 text-success">Projects!</h1>
<Footer />
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
<style>
li {
    list-style:none;
}

</style>