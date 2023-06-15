<script setup>
import { user } from './states/auth.js' 
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
        <RouterLink v-if="user.token" to="/login">Login</RouterLink>
        <RouterLink v-if="user.token" to="/party/create">Create Party</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
