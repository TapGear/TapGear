<template>
  <v-container flid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 v-for="(room, key) in rooms" :key="key">
        <v-card 
          color="grey" 
          class="white--text">
          <v-card-title primary-title>
            <div class="headline">{{room.name}}</div>
          </v-card-title>
          <v-btn dark color="blue" @click="joinRoom(key)">Join</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "RoomList",
  computed: {
    ...mapState([
      'rooms'
    ])
  },
  methods: {
    ...mapActions([
      'fetchRooms'
    ])
  },
  created() {
    this.fetchRooms();
  }
};
</script>

<style>
</style>
