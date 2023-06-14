<template>
  <div>
    <h1>Friendships</h1>
    <button @click="get_friends()" />
      Refresh
  </div>
  <li v-for="friend in friends">
      <div class="card-content">
        <tr>
          <p class="image">
            <img :src="friend.image" />
          </p>
        </tr>
        <tr>
          <p class="title">
            {{ friend.name }}
          </p>
        </tr>
        <tr>
          <p class="accept">
            <button class="button is-success" @click="accept_friendship(friend)">
              Accept
            </button>
          </p>
        </tr>
        <tr>
          <p class="decline">
            <button class="button is-danger" @click="decline_friendship(friend)">
              Decline
            </button>
          </p>
        </tr>
        <tr>
          <p class="delete">
            <button class="button is-danger" @click="delete_friendship(friend)">
              Delete
            </button>
          </p>
        </tr>
      </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      friends: [],
    }
  },
  methods: {
    async get_friends() {
      console.log("getting friends")
      const response = await fetch("http://127.0.0.1:8081/api/v1/friendships", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
      })
      const data = await response.json()
      this.friends = data
  }
 }
}
</script>
