import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/firebase.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: ''
  },
  mutations: {
    setUsername (state, payload) {
      state.username = payload
    }

  },
  actions: {
    login (context) {
      localStorage.setItem('username', this.state.username)
    }
  }
})
