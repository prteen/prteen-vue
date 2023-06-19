<script setup>
  import { update_friendship, delete_friendship, get_user_by_id } from '../services/api.js'
  const props = defineProps(['item'])
  console.log(props)
</script>

<script>
  export default {
    name: 'FriendCard',
    props: ['item'],
    data() {
      return {
        from: '',
        to: ''
      }
    },
    mounted() {
      this.load_friendship()
    },
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
        update_friendship(this.item._id, "rejected").then(response => {
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
      },
      load_friendship() {
        get_user_by_id(this.item.from).then(response => {
          this.from = response.username || 'You'
        }).catch(error => {
          console.log(error)
        })
        get_user_by_id(this.item.to).then(response => {
          this.to = response.username || 'You'
        }).catch(error => {
          console.log(error)
        })
      },
    }
  }
</script>

<template>
    <v-card class="card-content">
      <tr>
          Image: <v-img src="/picture.png" alt="" contain height="50px" width="50px">
</v-img>
      </tr>
      <tr>
          From: {{ from }}
      </tr>
      <tr>
          To: {{ to }}
      </tr>
      <tr>
          Status: {{ item.status }}
      </tr>
      <tr>
          Friendship ID: {{ item._id }}
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
