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
    </v-container>
  </v-content>
</template>

<script>
import RoomList from "@/components/RoomList.vue";
import CreateRoom from "@/components/CreateRoom.vue";

export default {
  name: "Lobby",
  components: {
    RoomList,
    CreateRoom
  }
};
</script>

<style>
.room-list {
  max-width: 600px;
  margin: auto;
}
</style>
