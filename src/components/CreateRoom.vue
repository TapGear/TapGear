<template>
  <v-container flid grid-list-lg>
    <v-form>
      <v-layout row wrap>
        <v-flex xs8>
          <v-text-field required v-model="room_name"></v-text-field>
        </v-flex>
        <v-flex xs4>
          <v-btn dark color="blue" @click="createRoom">Create</v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
import firebase from "firebase";
import uuid from "uuid/v1";

const roomRef = firebase.database().ref(`rooms`);

export default {
  name: "CreateRoom",
  data() {
    return {
      room_name: ""
    };
  },
  methods: {
    createRoom() {
      let room_id = uuid();
      let self = this;
      roomRef
        .child(room_id)
        .set({ name: self.room_name })
        .then(() => {
          self.room_name = "";
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>
