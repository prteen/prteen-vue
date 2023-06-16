<script setup> 
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
import { user, logged } from './states/user.js'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink v-if="!logged()" to="/register">Register</RouterLink>
        <RouterLink v-if="!logged()" to="/login">Login</RouterLink>
        <RouterLink v-if="logged()" to="/party/create">Create Party</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
