<template>
  <form @submit.prevent="submit">
    <label for="username">Username</label>
    <input type="text" id="username" v-model="form.username" /><br>
    <input type="submit" value="Send Friend request">
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
          if(response.type == "success") {
            alert("Friendship created!")
          } else {
            alert("Friendship creation failed!")
            console.log(JSON.stringify(error))
          }
        }).catch(error => {
          console.log(error)
          alert(JSON.stringify(error))
        })
      }
    }

 }
</script>
