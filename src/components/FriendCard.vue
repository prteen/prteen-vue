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
      accept(item) {
        update_friendship(this.item._id, "accepted").then(response => {
          alert(JSON.stringify(response))
        }).catch(error => {
          console.log(error)
          alert(JSON.stringify(error))
        })
      },
      reject(item) {
        console.log(item)
        update_friendship(item._id, "rejected").then(response => {
          alert(JSON.stringify(response))
        }).catch(error => {
          console.log(error)
          alert(JSON.stringify(error))
        })
      },
      del(item) {
        console.log(item)
        delete_friendship(this.item._id).then(response => {
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
    <v-card class="card-content">
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
            <button class="button is-success" @click="accept(item)">
              Accept
            </button>
            <button class="button is-danger" @click="reject(item)">
              Reject
            </button>
            <button class="button is-danger" @click="del(item)">
              Delete
            </button>
      </div>
    </v-card>
</template>

<style scoped>
  .card-content {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    border-radius: 10px;
    background-color: #f1f1f1;
    margin: 8px;
    padding: 10px;
  }
  .card-footer {
    display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: center;
  }
</style>
