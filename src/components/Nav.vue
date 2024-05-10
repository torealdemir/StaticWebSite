<template>
  <nav class="navbar navbar-expand-md" :class="{'navbar-dark' :isDarkMode, 'bg-dark' : isDarkMode, 'navbar-light': !isDarkMode}">
    <div class="d-flex justify-content-between">
      <div class="d-flex align-items-center">
        <router-link to="/" class="navbar-brand fs-3 ms-3 text-warning mb-0">Home</router-link>
      </div>
      <div class="d-flex align-items-center">
        <div class="d-flex flex-row-reverse">
          <router-link to="/about" class="nav-link mx-3 fs-4 text-info">About</router-link>
          <router-link to="/projects" class="nav-link mx-3 fs-4 text-primary">Projects</router-link>
        </div>
      </div>
    </div>
  
    <button class="navbar-toggler d-flex ms-auto text-warning m-3 d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#btn">
      <i class="bi bi-body-text">=</i>
    </button>

    <div class="collapse navbar-collapse" id="btn">
      <div class="d-flex align-items-center justify-content-center mt-2">
        <div class="switch">
          <input
            type="checkbox"
            id="themeSwitch"
            class="switch-checkbox"
            v-model="isDarkMode"
          />
          <label for="themeSwitch" class="switch-label"></label>
        </div>
      </div>
    </div>
  </nav>
</template>


<script>


export default {
    name:'Navbar',
    
    computed : {
      isDarkMode: {
        get() {
          return this.$store.state.isDarkMode
        },
        set(value){
          this.$store.commit('setDarkMode', value);
        }
      }
    },

    methods: {
      toggleTheme(){
        this.isDarkMode = event.target.checked
      },
      
    }
    
}
</script>


<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.switch-checkbox {
  display: none;
}

.switch-label {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 24px;
  background-color: #ccc;
  border-radius: 24px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.switch-label::after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
}

.switch-checkbox:checked + .switch-label {
  background-color: #53637c;
}

.switch-checkbox:checked + .switch-label::after {
  transform: translateX(26px);
}
</style>
