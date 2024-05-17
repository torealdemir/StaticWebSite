import { createStore } from 'vuex'

export default createStore({
  state: {
    isDarkMode: false,
  },
  getters: {
  },
  mutations: {
    initializeStore(){

    },
    setDarkMode(state, value) {
      state.isDarkMode = value;
    },
  },
  actions: {
  },
  modules: {
  }
})
