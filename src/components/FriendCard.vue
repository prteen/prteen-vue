<script setup>
  import { update_friendship, delete_friendship, get_user_by_id } from '../services/api.js'
  const props = defineProps(['item'])
</script>

<script>
  import { user } from '../states/user.js'
  
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
          this.$emit('refresh')
        }).catch(error => {
          console.log(error)
          alert(JSON.stringify(error))
        })
      },
      reject(item) {
        console.log(item)
        update_friendship(this.item._id, "rejected").then(response => {
          this.$emit('refresh')
        }).catch(error => {
          console.log(error)
          alert(JSON.stringify(error))
        })
      },
      del(item) {
        console.log(item)
        delete_friendship(this.item._id).then(response => {
          this.$emit('refresh')
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
    <div class="card-content">
      From: {{ from }}<br>
      To: {{ to }}<br>
      Status: {{ item.status }}<br>
      Friendship ID: {{ item._id }}<br>
      <div class="card-footer">
        <template v-if="item.status == 'pending'"> 
          <input v-if="item.to == user.id" type="button" class="button is-success" @click="accept(item)" value="Accept">
          <input v-if="item.to == user.id" type="button" class="button is-danger" @click="reject(item)" value="Reject">
        </template>
        <input v-if="!(item.to == user.id && item.status == 'pending')" type="button" class="button is-danger" @click="del(item)" value="Delete">
      </div>
    </div>
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
    width: 500px;
  }
  .card-footer {
    display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: center;
  }
</style>
