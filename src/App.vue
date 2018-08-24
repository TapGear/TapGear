<template>
<<<<<<< HEAD
<<<<<<< HEAD
  <div id="app">
    <router-view/>
  </div>
=======
=======
>>>>>>> 7731df9dda538559613fe7ac8be539a213f1e0c9
    <v-app id="app">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> | 
        <router-link to="/lobby">Lobby</router-link>
      </div>
      <router-view/>
    </v-app>
<<<<<<< HEAD
>>>>>>> lobby layout
=======
>>>>>>> 7731df9dda538559613fe7ac8be539a213f1e0c9
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
