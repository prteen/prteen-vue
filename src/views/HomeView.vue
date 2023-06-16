<script setup>
import { user } from '../states/user.js'
</script>

<template>
  <main>
    <h1>Welcome to Prteen, {{ user.username }}!</h1>
    <div v-if="user.token">
      <p>Your details are:</p>
      <table>
        <tr>
          <td>Username</td>
          <td>{{ user.username }}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{{ user.email }}</td>
        </tr>
      </table>
    </div>
    <div v-else>
      <p>You are not logged in.</p>
      <RouterLink to=/login>Login</RouterLink> or <RouterLink to="/register">Register</RouterLink>
    </div>
  </main>
</template>
