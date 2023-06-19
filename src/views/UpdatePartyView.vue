<script setup>
import PartyForm from '@/components/PartyForm.vue'
</script>

<script>
import { user } from '../states/user.js'
import { get_party_organizer, update_party } from '../services/api.js'

export default {
  components: {
    PartyForm
  },
  data() {
    return {
      loading: true,
      party: {}
    }
  },
  mounted() {
    get_party_organizer(this.$route.params.id).then(party => {
      this.party = party
      this.loading = false
    })
  },
  methods: {
    submit(data) {
      update_party(this.party._id, data).then(response => {
        if(response.type != "success"){
          alert("Error updating party: " + JSON.stringify(response))
        } else {
          this.$router.push({ name: "party-my", params: { id: this.party._id } })
        }
      })
    }
  }
}
</script>

<template>
  <main>
    <h1>Update your Party</h1>
    <PartyForm @submitParty="submit" v-if="!loading" v-model="party" />
  </main>
</template>
