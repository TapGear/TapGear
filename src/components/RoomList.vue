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
          <v-btn dark color="blue">Join</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "RoomList",
  data() {
    return {
      rooms: {}
    };
  },
  methods: {
    fetchRooms() {
      this.rooms = {
        room1: {
          name: `Ayo gabung!`
        },
        room2: {
          name: `Mari masuk...`
        },
        room3: {
          name: `Gas gas...`
        }
      };
    }
  },
  created() {
    this.fetchRooms();
  }
};
</script>

<style>
</style>
