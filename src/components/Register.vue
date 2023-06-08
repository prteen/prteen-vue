<script>
import { user, set_user } from '../states/auth.js'
import { register } from '../services/api.js'

export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
        password_confirm: '',
        email: ''
      }
    }
  },
  methods: {
    async register(submitEvent) {
      this.$emit('submit', this.form)
      if(this.form.password != this.form.password_confirm) {
        alert("Passwords do not match!")
        return
      }
      const response = await register(this.form.username, this.form.password, this.form.email)
      console.log(response)
      if(response.status == 200) {
        user.username = this.form.username
        user.password = this.form.password
        this.$router.push({ name: 'Home' })
      } else {
        alert("Registration failed!")
      }
    }
  }
}
</script>


<template>
  <form @submit.prevent="register">
    <div>
      <label for="username">Username</label>
      <input type="text" id="username" v-model="form.username" />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" id="password" v-model.lazy="form.password" />
    </div>
    <div>
      <label for="password_confirm">Confirm Password</label>
      <input type="password" id="password_confirm" v-model.lazy="form.password_confirm" />
    </div>
    <input type="submit" value="Register" />
  </form>
</template>
