<script setup>
import { user } from '../states/auth.js'
</script>

<template>
  <main>
    <h1>Welcome to Prteen, {{ user.username }}!</h1>
    <RouterLink to="/register">Register</RouterLink>
  </main>
</template>
