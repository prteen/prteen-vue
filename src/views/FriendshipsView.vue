<script setup>
  import FriendCard from '../components/FriendCard.vue'
</script>


<template>
  <div>
    <div class="title">
      <h1>Friendships</h1>
      <button @click="refresh">
        Refresh
      </button>
    </div>
    <li v-for="item in friendships">
      <FriendCard v-bind:item="item" />
    </li>
  </div>
</template>


<script>
import { get_friendships } from '../services/api.js' 

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
