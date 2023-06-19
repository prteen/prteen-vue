<script setup>
  import FriendCard from '../components/FriendCard.vue'
  import { get_friendships } from '../services/api.js' 
</script>


<template>
  <div>
    <div class="title">
      <h1>Friendships</h1>
      <div class="buttons">
        <button @click="refresh">Refresh</button>
        <button @click="$router.push('/friendships/new')">New Friendship</button>
      </div>
    </div>
    <div v-for="item in friendships">
        <FriendCard @refresh="refresh" v-bind:item="item" />
    </div>
  </div>
</template>


<script>

export default {
  data() {
    return {
      friendships: [],
    }
  },
  mounted() {
    this.refresh()
  },
  methods: {
    refresh() {
      get_friendships().then(response => {
        console.log(response)
        this.friendships = response
        console.log(this.friendships)
      }).catch(error => {
        console.log(error)
        alert(JSON.stringify(error))
      })
    }
 }
}
</script>
