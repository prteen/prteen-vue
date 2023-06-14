<template>
  <form @submit.prevent="submit">
    <label for="username">Username</label>
    <input type="text" id="username" v-model="form.username" /><br>
    <button @click="submit">Send Friend request</button>
  </form>
</template>

<script>
 import { new_friendship } from '../services/api.js'
 
 export default {
    data() {
      return {
        form: {
          username: '',
        }
      }
    },
    methods: {
      submit() {
        this.$emit('submit', this.form)
        new_friendship(this.form.username).then(response => {
          console.log(response)
          if(response.type == "success") {
            alert(response, "\nFriendship created!")
          } else {
            alert("Friendship creation failed!")
            alert(JSON.stringify(error))
          }
        }).catch(error => {
          console.log(error)
          alert(JSON.stringify(error))
        })
      }
    }

 }
</script>
