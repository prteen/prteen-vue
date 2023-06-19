<script setup>
  import PartyDetails from '../components/PartyDetails.vue'
  import { get_party } from '../services/api.js'
</script>


<template>
  <div>
    <PartyDetails v-if="!loading" v-bind:party="party" @join="refresh" />
  </div>
</template>


<script>

export default {
  name: 'PartyDetailsView',
  data() {
    return {
      party: {},
      loading: true
    }
  },
  mounted() {
    this.refresh()
  },

  methods: {
    refresh() {
      const id = this.$route.params.id
      get_party(id).then(response => {
        this.party = response
        this.party.participants_number = this.party.participants.length
        this.loading = false
      }).catch(error => {
        console.log(error)
        alert(JSON.stringify(error))
      })
    }
 }
}
</script>
