<template>
  <v-container>
    <v-layout justify-center align-center fill-height>
      <v-flex xs5>
        <v-card color="white">
          <br><br>
          <h3>Welcome In TapGear</h3>
          <br>
          <v-container>
            <v-layout>
              <v-flex>
                <v-text-field label="Username" v-model="username"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-btn id="login" color="blue" @click="login">Submit</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    username: {
            get () {
                return this.$store.state.username
            },
            set (value) {
                this.$store.commit('setUsername', value)
            }
        },
  },
  methods: {
    ...mapActions([
      'login'
    ])
  }
}
</script>

<style scoped>

.fill-height{
  height: 100vh !important;
}

#login{
  width: 90% !important;
}

.v-btn__content {
  color: white !important
}
</style>
