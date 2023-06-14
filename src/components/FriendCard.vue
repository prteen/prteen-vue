<script setup>
  import { update_friendship, delete_friendship } from '../services/api.js'
  const props = defineProps(['item'])
  console.log(props)
</script>

<script>
  export default {
    name: 'FriendCard',
    props: ['item'],
    methods: {
      accept_friendship(item) {
        update_friendship(item._id, "accepted").then(response => {
          alert(JSON.stringify(response))
        }).catch(error => {
          console.log(error)
          alert(JSON.stringify(error))
        })
      },
      decline_friendship(item) {
        console.log(item)
        update_friendship(item._id, "rejected").then(response => {
          alert(JSON.stringify(response))
        }).catch(error => {
          console.log(error)
          alert(JSON.stringify(error))
        })
      },
      delete_friendship(item) {
        console.log(item)
        delete_friendship(item).then(response => {
          alert(JSON.stringify(response))
        }).catch(error => {
          console.log(error)
          alert(JSON.stringify(error))
        })
      }
    }
  }
</script>

<template>
    <div class="card-content">
      <tr>
          Image: <img :src="item.image" />
      </tr>
      <tr>
          Friendship ID: {{ item._id }}
      </tr>
      <tr>
          From: {{ item.from }}
      </tr>
      <tr>
          To: {{ item.to }}
      </tr>
      <tr>
          Status: {{ item.status }}
      </tr>
      <div class="card-footer">
            <button class="button is-success" @click="accept_friendship(item)">
              Accept
            </button>
            <button class="button is-danger" @click="decline_friendship(item)">
              Decline
            </button>
            <button class="button is-danger" @click="delete_friendship(item._id)">
              Delete
            </button>
      </div>
    </div>
</template>

<style scoped>
  .card-content {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
  }
  .card-footer {
    display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: center;
  }
</style>
