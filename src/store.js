import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/firebase.js'
import uuid from "uuid/v1";
import router from "./router.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    rooms: {},
    room_name: '',
    isLoading: false
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
    },
    setLoading (state) {
      state.isLoading = !state.isLoading
    }
  },
  actions: {
    login (context) {
      let self = this
      localStorage.setItem('username', this.state.username)
      router.push('/lobby')
    },
    fetchRooms({ commit }) {
      db.ref('rooms').on("value", function(snap) {
        commit('setRoom', snap.val())
      });
    },
    createRoom({ commit, dispatch }) {
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
          dispatch('waitPlayers', roomName)
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
          console.log('roomName -->',roomName)
          router.push(`/game/${roomName}`)
         })
         .catch(err => console.log(err))
    },
    waitPlayers ({ commit }, roomName) {
      let self = this
      console.log('roomName', roomName)
      db.ref(`rooms/${roomName}`).on('value', function(snap) {
        // console.log('loading')
        commit('setLoading')
        // console.log(snap.val())
        let currentUsers = snap.val()
        let currUsersLength = Object.keys(currentUsers).length
        // console.log(currUsersLength)
        if (currUsersLength > 1) {
          router.push(`/game/${roomName}`)
        }
      })
    }
  }
})
