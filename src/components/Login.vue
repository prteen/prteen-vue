<script>
import { user, set_user, save_to_storage, update_user } from '../states/user.js'
import { login, me } from '../services/api.js'

export default { 
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      this.$emit('submit', this.form)
      console.log(this.form)
      login(this.form.username, this.form.password).then(async response => {
        console.log(response)
        if(response.type == "success") {
          let user = set_user({
            username: undefined,
            token: response.access_token,
            email: undefined,
            id: undefined
          })
          save_to_storage()
          try {
            update_user(await me())
            save_to_storage()
          } catch (error) {
            throw error
            alert("error while retrieving further user details")
            alert(JSON.stringify(error))
          }
        } else {
          alert("Login failed!")
          alert(JSON.stringify(response))
        }
      }).catch(error => {
        console.log(error)
        alert(JSON.stringify(error))
      })
      this.$router.push('/')
    }
  }
}

</script>


<template>
  <form @submit.prevent="login">
    <table>
      <tr>
        <td><label for="username">Username</label></td>
        <td><input type="text" id="username" v-model="form.username" /></td>
      </tr>
    {{ User }}
      <tr>
        <td><label for="password">Password</label></td>
        <td><input type="password" id="password" v-model.lazy="form.password" /></td>
      </tr>
    <input type="submit" value="Login" />
    </table>
  </form>
</template>
