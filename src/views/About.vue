<template>
<div id="aboutVue" :class="{'bg-dark' :isDarkMode,'bg-light' :!isDarkMode}">
    <div id="about">
    <div id="intro" class="bg-image shadow-2-strong">
        <div class="position-relative">
            <img src="https://i.pinimg.com/originals/9b/cf/06/9bcf06fcd555d2089a61139cafbcf05e.jpg" id="background-img" class="img-fluid rounded" alt="">
        </div>
    </div>
    <div class="container d-flex flex-column justify-content-sm-center">
    <div class="row my-3">
        <div class="col">
            <div class="card" style="width: 18rem;">
                <img src="../assets/git.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div class="col my-3">
            <div class="card" style="width: 18rem;">
                <img src="../assets/git.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div class="col my-3">
            <div class="card" style="width: 18rem;">
                <img src="../assets/git.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
    <div class="row my-3">
        <div class="col">
            <div class="card" style="width: 18rem;">
                <img src="../assets/git.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div class="col my-3">
            <div class="card" style="width: 18rem;">
                <img src="../assets/git.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div class="col my-3">
            <div class="card" style="width: 18rem;">
                <img src="../assets/git.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
</div>
    
    

</div>
<Footer />
</div>



</template>

<script>
import Footer from '@/components/Footer.vue'

export default{

    name:'About',
    components:{
      Footer
    },

    computed : {
        isDarkMode : {
        get(){
            return this.$store.state.isDarkMode;
        },
        set(value){
            this.$store.commit('setDarkMode', value);
        }
        }
    }
    
}
</script>
<style scoped>
#background-img{
    width: 100%;
    height: 100vh;
}

li {
  list-style: none;
}

#aboutVue {
    background-image: url('../assets/colorful.jpg');
    background-size: cover;
}

</style>