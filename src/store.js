import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dark: true
  },
  mutations: {
    enableDarkMode(state) {
      state.dark = true
    },
    disableDarkMode(state) {
      state.dark = false
    }
  },
  actions: {
    enableDarkMode(context) {
      context.commit('enableDarkMode')
    },
    disableDarkMode(context) {
      context.commit('disableDarkMode')
    },
  }
})
