<script setup>
import PartyForm from '@/components/PartyForm.vue'
</script>

<script>
import { user } from '../states/user.js'
import { get_party, create_party } from '../services/api.js'

export default {
  components: {
    PartyForm
  },
  methods: {
    submit(data) {
      create_party(data).then(result => {
        if(result.type != "success"){
          alert("Error creating party: " + JSON.stringify(result))
        } else {
          // this.$router.push({ name: "party-view", params: { id: result.id } })
        }
      }).catch(err => {
        console.log(err)
        alert("Error creating party: " + JSON.stringify(err))
      })
    }
  }
}
</script>

<template>
  <main>
    <h1>Create new Party</h1>
    <PartyForm @submitParty="submit" />
  </main>
</template>
