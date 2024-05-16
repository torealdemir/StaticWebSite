<template class="tore">

<!-- Background image -->
<div id="intro" class="bg-image shadow-2-strong" >
  <div class="position-relative">
    <img src="../assets/sitePictures/pict3.jpg" class="mainImage img-fluid rounded shadow-img" alt="Fluid Image">
    <div class="position-absolute top-50 start-50 translate-middle">
      <div class="first-texts">
        <h1 class="headers mb-3 text-white">Odtu Metalurji ve Material Section</h1>
        <h5 class="headers mb-4 text-white ">Nano Materials Field</h5>
      </div>
    </div>
  </div>

</div>


<!-- //--- -->




<!--Main layout-->
<main class="" :class="{'bg-dark' : isDarkMode,}">
  <div class="cutter d-flex align-items-center justify-content-center" :class="{'bg-dark': isDarkMode, 'cutter': !isDarkMode}" >
  <div class="cutterin" :class="{'bg-light': isDarkMode, 'bg-dark': !isDarkMode}">
  </div>
</div> 





<div class="container">
  <!--Section: Content-->
  <section>
    <div class="row">
      <div class="col-md-6 col-sm-8 mb-4">
        <div class="bg-image hover-overlay shadow-2-strong" data-mdb-ripple-init data-mdb-ripple-color="light">
          <img src="../assets/sitePictures/pict1.jpg" class="img-fluid rounded" />
          <a href="#!">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
          </a>
        </div>
      </div>

      <div class="col-md-6 col-sm-8 mr-3 mb-4 d-flex align-items-center">
        <div class="">
          <h4 :class="{'text-secondary' : isDarkMode}"><strong>Facilis consequatur eligendi</strong></h4>
          <p :class="{'text-secondary' : isDarkMode}">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur
            eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum
            sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis.
          </p>
        </div>
        <div class="mx-3">
          <h4 :class="{'text-secondary' : isDarkMode}"><strong>Doloremque vero ex debitis veritatis?</strong></h4>
          <p :class="{'text-secondary' : isDarkMode}">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod itaque voluptate
            nesciunt laborum incidunt. Officia, quam consectetur. Earum eligendi aliquam illum
            alias, unde optio accusantium soluta, iusto molestiae adipisci et?
          </p>
        </div>  
      </div>
    </div>
  </section>
  <!--Section: Content-->

  <div class="cutter d-flex align-items-center justify-content-center" :class="{'bg-dark': isDarkMode, 'cutter': !isDarkMode}" >
    <div class="cutterin" :class="{'bg-light': isDarkMode, 'bg-dark': !isDarkMode}">

      </div>
    </div>
  <!--Section: Content-->
  <section class="text-center">
    <h4 class="mb-5" :class="{'text-secondary' : isDarkMode}"><strong>Facilis consequatur eligendi</strong></h4>

    <div class="row">
      <div class="col-lg-4 col-md-12 mb-4">
        <div class="card">
          <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
            <img src="../assets/sitePictures/pict2.jpg" class="img-fluid" />
            <a href="#!">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
            </a>
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </p>
            <a href="#!" class="button1 btn btn-warning" data-mdb-ripple-init>Button</a>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card">
          <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
            <img src="../assets/sitePictures/pict1.jpg" class="img-fluid rounded" />
            <a href="#!">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
            </a>
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </p>
            <a href="#!" class="button2 btn btn-primary" data-mdb-ripple-init>Button</a>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card">
          <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
            <img src="../assets/sitePictures/pict5.jpg" class="img-fluid" />
            <a href="#!">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
            </a>
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </p>
            <a href="#!" class="button3 btn btn-primary" data-mdb-ripple-init>Button</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Section: Content-->

  <div class="cutter d-flex align-items-center justify-content-center" :class="{'bg-dark': isDarkMode, 'cutter': !isDarkMode}" >
    <div class="cutterin" :class="{'bg-light': isDarkMode, 'bg-dark': !isDarkMode}">

      </div>
    </div>  
</div>
</main>
<Footer />

</template>

<script>
// import axios from 'axios';
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Footer,
  },
  // data() {
  //   return {
  //     contents: []
  //   };
  // },
  computed: {
    isDarkMode: {
      get() {
        return this.$store.state.isDarkMode;
      },
      set(value) {
        this.$store.commit('setDarkMode', value);
      }
    }
  },
  methods: {
  toggleTheme() {
    this.isDarkMode = event.target.checked;
  },
  
},
}
</script scoped>

<style scoped>
body {
font-family: "KoHo", sans-serif;
}

.first-texts{
  margin-bottom: 80%;
}

.headers {
font-size: 3.5vw;
}

.button2 {
  background-color: rgb(106, 210, 252);
  color: black;
  border: none;
}

.button3 {
  background-color: rgb(0, 225, 255);
  border: none;
  color:black;
}
.button2:hover{
  transition: 0.5s;
  scale: 1.1;
  color: white;
}

.button1:hover{
  transition: 0.5s;
  scale: 1.1;
  color: white;
} 

.button3:hover {
  transition: 0.5s;
  scale: 1.1;
  color: white;
}

.cutter {
height: 8vh;
background-color:  rgb(252, 243, 243);
}

.cutterin{
height: 0.03vh;
width: 75vw;
background-color: rgb(252, 243, 243);
}

li{
  list-style: none;
}

#first-back {
  background-size: cover;
}

.contentt {
  background-color: rgb(252, 243, 263);
}
</style>
