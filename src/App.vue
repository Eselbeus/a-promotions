<template>
  <div id="app">
  <h1>Alissa Aikio Promotions</h1>
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Bio from './components/Bio.vue'
import Nav from './components/Nav.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    Home,
    Bio,
    Nav,
    Contact
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 400px;
}
</style>
