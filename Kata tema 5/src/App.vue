<template>
  <router-view/>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/admin">Admin</router-link>
  </nav>
  
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    font-size: 18px;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }

  h4{
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          font-size: 64px;
          text-align: center;
  }

  .container{
      display: flex;
      flex-wrap: wrap;
      align-content: center;
  }

  
</style>
