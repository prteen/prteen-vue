<script>
import { user, set_user, save_to_storage } from '../states/users.js'
import { register, login } from '../services/api.js'

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
      register(this.form.username, this.form.password, this.form.email).then(response => {
        if(response.type == "success") {
          login(this.form.username, this.form.password).then(response => {
            let user = set_user({
              username: this.form.username,
              password: this.form.password,
              token: response.access_token,
              email: this.form.email
            })
            save_to_storage(user)
            // assume no errors are generated
          })
        }
      }).catch(error => {
        console.log(error)
        alert("Registration failed! ")
      })
    }
  }
}
</script>


<template>
  <form @submit.prevent="register">
    <table>
      <tr>
        <td><label for="username">Username</label></td>
        <td><input type="text" id="username" v-model="form.username" /></td>
      </tr>
      <tr>
        <td><label for="email">Email</label></td>
        <td><input type="email" id="email" v-model="form.email" /></td>
      </tr>
      <tr>
        <td><label for="password">Password</label></td>
        <td><input type="password" id="password" v-model.lazy="form.password" /></td>
      </tr>
      <tr>
        <td><label for="password_confirm">Confirm Password</label></td>
        <td><input type="password" id="password_confirm" v-model.lazy="form.password_confirm" /></td>
      </tr>
    </table>
    <input type="submit" value="Register" />
  </form>
</template>
