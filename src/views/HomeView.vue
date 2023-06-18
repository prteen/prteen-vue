<script setup>
import { user } from '../states/user.js'
</script>

<template>
  <div class="homepage">
  <main>
    <h1>Welcome to Prteen {{ user.username || '' }}!</h1>
    <div v-if="user.token">
      <p>Your details are:</p>
      <table>
        <tr>
          <td>Username: </td>
          <td>{{ user.username }}</td>
        </tr>
        <tr>
          <td>Email: </td>
          <td>{{ user.email }}</td>
        </tr>
      </table>
    </div>
    <div v-else>
      <p>You are not logged in.</p>
      <RouterLink to=/login>Login</RouterLink> or <RouterLink to="/register">Register</RouterLink>
    </div>
  </main>
  </div>
</template>

<style scoped>
body {
  margin: 0;   
  padding: 0;
}

.homepage { 
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(0, 0, 0, 0.5)), url('src/assets/homepage.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100%;
}

main {
  margin: 0 auto;
  max-width: 800px;
}
</style>
