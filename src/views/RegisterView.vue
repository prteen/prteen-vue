<template>
  <div>
     <h1>Registration</h1>
      <form @submit.prevent="register">
        <div>
          <label for="username">Username</label>
          <input type="text" id="username" v-model="form.username" />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="text" id="email" v-model="form.email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" v-model.lazy="form.password" />
        </div>
        <div>
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" v-model.lazy="form.confirm_password" />
        </div>
        <input type="submit" value="Register" />
      </form>
  </div>
</template>

<script>
export default {
  data() {
    console.log("queried data!")
    return {
      form: {
        email: '',
        password: '',
        confirm_password: ''
      },
    }
  },
  methods: {
    async register(submitEvent) {
      this.$emit('submit', this.form)
      console.log(this.form.password, this.form.confirm_password)
      if(this.form.password != this.form.confirm_password) {
        alert("Passwords do not match!")
        return
      }
      console.log(JSON.stringify({
          username: this.form.username,
          password: this.form.password,
          email: this.form.email
        })
        )
      console.log(this.form)
      console.log(await fetch("http://127.0.0.1:8080/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Host": "127.0.0.1:8080",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.form.username,
          password: this.form.password,
          email: this.form.email
        }),
      }).then((res) => res.json()))
    },
  }
}
</script>
