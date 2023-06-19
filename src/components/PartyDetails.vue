<script setup>
  import TagList from '../components/TagList.vue'
  import { get_user_by_id, join_party, unjoin_party } from '../services/api.js'
  import { logged, user } from '../states/user.js'
</script>

<script>
  import strftime from 'strftime'

  export default {
    name: 'PartyDetails',
    props: {
      party: {
        type: Object,
        required: true
      },
    },
    data() {
      return {
        organizer: '',
        participants_names: []
      }
    },
    mounted() {
      this.get_organizer()
      this.resolve_participants()
      this.party.location = JSON.parse(this.party.location)
    },
    methods: {
      resolve_participants() {
        console.log(this.party.participants)
        this.participants_names = []
        this.party.participants.forEach(id => {
          get_user_by_id(id).then(response => {
            this.participants_names.push(response.username)
          }).catch(error => {
            console.log(error)
          })
        })
      },
      get_organizer() {
        const id = this.party.organizer
        get_user_by_id(id).then(response => {
          this.organizer = response.username
        }).catch(error => {
          console.log(error)
        })
      },
      join() {
        const id = this.party._id
        join_party(id).then(response => {
          // alert(response.message)
          this.$emit('join')
          setTimeout(this.resolve_participants, 300)
        }).catch(error => {
          console.log(error)
          alert(JSON.stringify(error))
        })
      },
      unjoin() {
        const id = this.party._id
        unjoin_party(id).then(response => {
          // alert(response.message)
          this.$emit('join')
          setTimeout(this.resolve_participants, 300)
        }).catch(error => {
          console.log(error)
          alert(JSON.stringify(error))
        })
      },
      format_date() {
        return strftime("%y/%m/%d %H:%M", new Date(this.party.date))
      },
      location_string() {
        console.log(this.party)
        if(!this.party.location)
          return "none"
        if(this.party.location.string)
          return this.party.location.string
        if(this.party.location.coords)
          return this.party.location.coords
        return "none"
      }
    }
  }
</script>

<template>
  <div>
    <h1>{{ party.title }}</h1>
    <h4>{{ party.description }}</h4>
    <span style="display: flex; vertical-align: middle">Tags: <TagList :tags_selected="party.tags" /></span>
    Location: {{ location_string() }}<br>
    Date: {{ format_date() }}<br>
    Organizer: {{ organizer }}<br>
    Participants ({{ party.participants_number }} / {{ party.max_participants }}):<br>
    <ul>
      <li v-for="participant in participants_names">
        {{ participant }}
      </li>
    </ul>
    Party ID: {{ party._id }}<br>
    <template v-if="logged">
      <input v-if="party.participants.includes(user.id)" type="button" @click="unjoin()" value="Prleave!">
      <input v-else type="button" @click="join()" value="Prteen-cipate!">
    </template>
  </div>
</template>
