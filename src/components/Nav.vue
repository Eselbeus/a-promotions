<template>
  <div>
    <nav>
      <router-link class="nav-item" to="/">Home</router-link>
      <router-link class="nav-item" to="/bio">About</router-link>
      <router-link class="nav-item" to="/contact">Contact</router-link>
    </nav>
  </div>

</template>

<script>
export default {
  name: 'Bio',
  props: {
  }
}
</script>
<style scoped>

nav {
  padding: 1rem;
}

.nav-item {
  background: #CCCCCC;
  text-decoration: none;
  padding: 1rem;
  color: #779999;
}

.nav-item:hover {
  color: #557777;
}
</style>
