<script>
import { user, set_user } from '../states/auth.js'
import { login } from '../services/api.js'

export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    login() {
      this.$emit('submit', this.form)
      login(this.form.username, this.form.password).then(response => {
        console.log(response)
        if(response.type == "success") {
          set_user({
            username: this.form.username,
            password: this.form.password,
            token: response.access_token,
            email: undefined
          })
          alert("Login successful!")
        } else {
          alert("Login failed!")
        }
      }).catch(error => {
        console.log(error)
        alert(JSON.stringify(error))
      })
    }
  }
}

</script>


<template>
  <form @submit.prevent="login">
    <div>
      <label for="username">Username</label>
      <input type="text" id="username" v-model="form.username" />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" id="password" v-model.lazy="form.password" />
    </div>
    <input type="submit" value="Login" />
  </form>
</template>
