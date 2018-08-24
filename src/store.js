import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/firebase.js'
import uuid from "uuid/v1";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    rooms: {},
    room_name: ''
  },
  mutations: {
    setUsername (state, payload) {
      state.username = payload
    },
    setRoom (state, payload) {
      state.rooms = payload
    },
    setRoomName (state, payload) {
      state.room_name = payload
    }

  },
  actions: {
    login (context) {
      localStorage.setItem('username', this.state.username)
    },
    fetchRooms({ commit }) {
      db.ref('rooms').on("value", function(snap) {
        commit('setRoom', snap.val())
      });
    },
    createRoom({ commit }) {
      // let room_id = uuid();
      let roomName = this.state.room_name
      let username = localStorage.getItem('username')
      db.ref('rooms')
        .child(roomName + '/' + username)
        .set({
          life: 100,
          isWin: false
         })
        .then(() => {
          commit('setRoomName', '')
        })
        .catch(err => console.log(err));
    },
    joinRoom ({ commit }, key) {
      let roomName = key
      let username = localStorage.getItem('username')

      db.ref('rooms')
        .child(roomName + '/' + username)
        .update({
          life: 100,
          isWin: false
         })
         .then(() => {
          //  console.log('success update')
          this.$router.push('/game')
         })
         .catch(err => console.log(err))
    }
  }
})
