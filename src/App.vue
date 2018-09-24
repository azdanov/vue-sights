<template>
  <div id="app">
    <div id="nav">
      <h1 class="heading">Vue Sights</h1>
      <div>
        <router-link to="/">Home</router-link>
        <router-link :to="{ name: 'about', path: 'about' }">About</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

ul {
  padding-left: 0;
  list-style: none;
}

body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1200px;
  margin: auto;
}

#nav {
  padding: 0 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .delimiter {
    user-select: none;
  }
}
</style>
