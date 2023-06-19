<script setup>
  import { get_user_by_id, join_party } from '../services/api.js'
  import { logged } from '../states/user.js'
  const props = defineProps(['party'])
  console.log(props)
</script>

<script>
  export default {
    name: 'PartyDetails',
    props: ['party'],
    data() {
      return {
        organizer: '',
      }
    },
    mounted() {
    },
    methods: {
      get_organizer() {
        const id = this.party.organizer
        get_user_by_id(id).then(response => {
          this.organizer = response.username
        }).catch(error => {
          console.log(error)
        })
      },
      join() {
        this.$emit('join')
        const id = this.party._id
        join_party(id).then(response => {
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
  <div>
    <h1>{{ party.title }}</h1>
    <h4>{{ party.description }}</h4>
    Tags: {{ party.tags }}<br>
    Location: {{ party.location }}<br>
    Date: {{ party.date }}<br>
    Max participants: {{ party.participants_number }} / {{ party.max_participants }}<br>
    Party ID: {{ party._id }}<br>
    <template v-if="logged">
      <input type="button" @click="join()" value="Prteen-cipate!">
    </template>
  </div>
</template>
