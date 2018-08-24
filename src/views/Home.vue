<template>
  <div class="home">
    <login></login>
  </div>
</template>

<script>
import login from '@/components/login.vue'

export default {
  name: 'home',
  components: {
    login
  }
}
</script>

<style scoped>
.home{
  height: 100vh;
  background-image: linear-gradient(#B2FEFA, #0ED2F7)
}
</style>
