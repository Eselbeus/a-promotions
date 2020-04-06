<template>
  <div id="home">
    <h1>{{ title }}</h1>
    <h2>
      Booking for Bands and Musical Artists
    </h2>
    <p>
      Currently booking acts at Philadelphia area venues.
    </p>
    <p>
      If you are looking to book shows please get in touch.
    </p>
    <img alt="The Anchor" src="../assets/aapmain.jpg">
    <p><i>August 19, 2019 with The Anchor</i></p>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #root {
    background: #EEEEEE;
  }
</style>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  width: 400px;
}
</style>
