<template>
  <div>
     <h1>Registration</h1>
      <form @submit.prevent="register">
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <div>
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" />
        </div>
        <button type="submit">Register</button>
      </form>
  </div>
</template>

<script>
</script>
