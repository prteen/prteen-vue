<script setup> 
import { RouterLink, RouterView } from 'vue-router'
import { Transition } from "vue";
</script>

<script>
import { user, logged, logout } from './states/user.js'
export default {
  name: 'App',
  methods: {
    log_out() {
      logout()
      this.$router.push('/')
    },
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand">
    <img src="./assets/logo.svg" width="50" height="50" class="d-inline-block align-top" alt="">
  </a>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink v-if="!logged()" to="/register">Register</RouterLink>
        <RouterLink v-if="!logged()" to="/login">Login</RouterLink>
        <RouterLink to="/parties">Parties</RouterLink>
        <RouterLink v-if="logged()" to="/party/create">Create Party</RouterLink>
        <RouterLink v-if="logged()" to="/friendships">Friendships</RouterLink>
        <a v-if="logged()" @click="log_out()" href="#">Logout</a>
    </div>
  </div>
</nav>
  <div class="container">
    <Transition appear>
      <RouterView />
    </Transition>
  </div>
</template>

<style scoped>
* {
  margin: 0;   
  padding: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s ease, transform 0.8s ease-in-out;
  transform: translateY(0px);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(100px);
}

* {
  font-family: Fira Sans;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  /* max-width: 800px; */
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.container {
  margin: 0 auto; 
  align-items: center;
  justify-content: center;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: left;
  margin-top: 2rem;
  padding: 0 1rem;
}

nav a {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  display: block;
  border-bottom: 1px solid var(--color-border);
}

nav a.router-link-exact-active {
  color: var(--color-text);
  
}

nav a:hover {
  background-color: #e0e0f0;
  color: var(--color-text);
  border-radius: 5px;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
