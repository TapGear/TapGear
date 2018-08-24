<template>
  <v-content class="lobby">
    <v-container fluid>
      <h1>Lobby</h1>
      <div class="room-list">
        <v-toolbar color="primary" dark>
          <v-toolbar-title>Rooms</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card>
          <RoomList/>
        </v-card>
        <v-toolbar color="primary" dark>
          <v-toolbar-title>Create Room</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card>
          <CreateRoom />
        </v-card>
      </div>
      <v-dialog v-model="isLoading" width="500">
        <v-card color="white">
          <v-card-text>
            Waiting for other players...
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-container>
  </v-content>
</template>

<script>
import RoomList from "@/components/RoomList.vue";
import CreateRoom from "@/components/CreateRoom.vue";
import { mapState } from "vuex"

export default {
  name: "Lobby",
  components: {
    RoomList,
    CreateRoom
  },
  computed: {
    ...mapState(['isLoading'])
  },
  created () {
    if(!localStorage.getItem('username')) {
      this.$router.push('/')
    }
  }
};
</script>

<style>
.room-list {
  max-width: 600px;
  margin: auto;
}
</style>
