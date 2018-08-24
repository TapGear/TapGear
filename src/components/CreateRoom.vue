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
import { mapActions } from 'vuex'

export default {
  name: "CreateRoom",
  data() {
    return {
    };
  },
  computed: {
    room_name: {
            get () {
                return this.$store.state.room_name
            },
            set (value) {
                this.$store.commit('setRoomName', value)
            }
        }
  },
  methods: {
    ...mapActions([
      'createRoom'
    ])
  }
};
</script>

<style>
</style>
