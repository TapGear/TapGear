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
    createRoom() {
      let room_id = uuid();
      db.ref('rooms')
        .child(room_id)
        .set({ name: this.state.room_name })
        .then(() => {
          commit('setRoomName', '')
        })
        .catch(err => console.log(err));
    }
  }
})
